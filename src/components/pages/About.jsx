import React from "react";

const About = () => {
    return (
        <>
        <div className="masonry">
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/outdoors.jpg" alt="Me outdoors." />
                    <div className="description">My visit to Watkins Glen State Park.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/pr.jpg" alt="My half marathon pr." />
                    <div className="description">My half marathon personal best.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/lovesick.jpg" alt="Love Sick tour 2023." />
                    <div className="description">Don Toliver Love Sick Tour 2023.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/cards.jpg" alt="Practicing with my cards." />
                    <div className="description">Me practicing with my cards.</div>
                </div>
            </div>
            <div className="item description-item">
                I am a recent university graduate embarking on my professional career. 
                The industries I am most interested in are technology and finance, 
                and I am most skilled in areas like software engineering, data engineering, 
                data science, and data analytics. I enjoy exploring the outdoors, 
                attending live music events, endurance running, and practicing sleight of hand.
                Explore this gallery to learn more.
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/fordhamgrad.jpg" alt="Fordham University graduation." />
                    <div className="description">Fordham University graduation.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/columbiagrad.PNG" alt="Columbia University graduation." />
                    <div className="description">Columbia University graduation.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/whalewatch.jpg" alt="Me going whale watching." />
                    <div className="description">Me going whale watching.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/half.jpg" alt="Hudson Valley Half Marathon." />
                    <div className="description">Me at the Hudson Valley Half Marathon finish line.</div>
                </div>
            </div>
            <div className="item">
                <div className="image-wrapper">
                    <img src="/assets/cmm.jpg" alt="Me painting." />
                    <div className="description">Me painting.</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
