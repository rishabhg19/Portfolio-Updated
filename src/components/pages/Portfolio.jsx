import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
const images = [
    {
        id: "1",
        path: "/assets/portfolio/shiny.png",
        alt_text: "Shiny app project",
        source: "webpage",
        source_url: "https://rishabhg.shinyapps.io/ExploringFloodVulnerability/"
    },
    {
        id: "2",
        path: "/assets/portfolio/aiagent.png",
        alt_text: "AI Agent project",
        source: "repository",
        source_url: "https://github.com/rishabhg19"
    },
    {
        id: "3",
        path: "/assets/portfolio/park.png",
        alt_text: "iOS app project",
        source: "repository",
        source_url: "https://github.com/rishabhg19"
    },
    {
        id: "4",
        path: "/assets/portfolio/nlp.png",
        alt_text: "Article Summarization model NLP project",
        source: "project paper",
        source_url: "https://drive.google.com/file/d/1_E-H06JK2aqiyO83_OeLKh0g5B2gSYmB/view?usp=drivesdk"
    },
    {
        id: "5",
        path: "/assets/portfolio/svd.png",
        alt_text: "Image and graphics processing project",
        source: "repository",
        source_url: "https://github.com/rishabhg19"
    },
    {
        id: "6",
        path: "/assets/portfolio/github.png",
        alt_text: "Github logo",
        source: "Github profile",
        source_url: "https://github.com/rishabhg19"
    }

]

    return (
        <>
            <div className="portfolio-top-text">Below are some of my favorite projects. Check out my &nbsp;<a href="https://github.com/rishabhg19">Github profile</a>&nbsp;to see more!</div>
            <div className="portfolio">
                <Carousel className="crsl" autoPlay infiniteLoop interval={5000} stopOnHover>
                {
                    images.map(image => <div><img src={image.path} alt={image.alt_text}></img><div className="carousel-text">See {image.source} <a href={image.source_url}>here</a>.</div></div>)
                }
                </Carousel>
            </div>
        </>
    );
};

export default Portfolio;