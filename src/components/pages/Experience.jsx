import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { experiences } from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

const ExperienceCard = ({ experience, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`experience-card ${isActive ? 'active' : 'inactive'}`}
    >
      <h3 className="experience-title">
        {experience.title}
      </h3>
      <p className="experience-company">
        {experience.company_name} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="experience-details">
      <ul>
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="experience-detail"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
      {experience.skills}
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Using 768px as the breakpoint for medium devices
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="experience-container container">
      <motion.div>
        <h2 className="experience-header">
          My Professional Experience <span class="expicons"><img src="/assets/experience/ups.png" alt="Experience icon UPS"></img><img src="/assets/experience/proskauer.jpeg" alt="Experience icon Proskauer"></img></span>
        </h2>
      </motion.div>

      <div className="experience-content row">
        <div className="experience-list col-md-4 col-sm-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
            />
          ))}
        </div>

        <div className="experience-details-container col-md-8 col-sm-12">
          <ExperienceDetails experience={selectedJob} />
          <img src={selectedJob.image} alt="empty"></img>
        </div>
      </div>
    </div>
  );
};

export default Experience;
