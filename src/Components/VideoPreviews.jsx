import React, { useState, useEffect } from "react";
import Info from "./Info.jsx";
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcepts.jsx";
import NaturalFizz from "./NaturalFizz/Home.jsx";
import Social from "../../public/images/social.png"
import Teamwork from "../../public/images/Teamwork.png"
import SLSFV from "../../public/images/SLSFV-Logo.png"

import "./VideoPreview.css";
import "./Main.css";

export default function VideoPreviews({ currentTimestamp }) {
    const [selectedInfo, setSelectedInfo] = useState([]);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [animationClass, setAnimationClass] = useState("fade-in");

    useEffect(() => {
        const infosToDisplay = [];

        if (currentTimestamp > 40 && currentTimestamp <= 47) {
            infosToDisplay.push({
                id: "Info1",
                title: "Teamfähig",
                points: [<img src={Teamwork} alt="Teamwork Zertifikat" style={{height: "175px" }} />],
            });
        }

        if (currentTimestamp > 41 && currentTimestamp <= 47) {
            infosToDisplay.push({
                id: "Info2",
                title: "Soziale Intelligenz",
                points: [<img src={Social} alt="Softskill Zertifikat" style={{height: "175px" }} />],
            });
        }
        if (currentTimestamp > 47 && currentTimestamp <= 68) {
          infosToDisplay.push({
              id: "Info3",
              title: "Ehrenamtlich in der Webentwicklung",
              points: [<img src={SLSFV} alt="SLSFV-Logo" style={{height: "175px" }} />],
          });
      }
      if (currentTimestamp > 68 && currentTimestamp <= 90) {
        infosToDisplay.push({
            id: "Info4",
            title: "Effizienz4",
            points: ["Prozessoptimierung", "Zeitmanagement"],
        });
    }

        if (infosToDisplay.length === 0) {
         
            setAnimationClass("fade-in");
            setTimeout(() => setShowPlaceholder(true), 1000);
        } else {

            setAnimationClass("fade-out");
            setTimeout(() => {
                setShowPlaceholder(false);
                setSelectedInfo(infosToDisplay);
            }, 1000);
        }
    }, [currentTimestamp]);

    return (
        <div className="sideWrapper">
            
            {showPlaceholder ? (
                <>
                 <NaturalFizz />
                <div className={`placeholderDiv ${animationClass}`}>
                    {CORE_CONCEPTS.map((concept, index) => (
                        <CoreConcept key={index} {...concept} />
                    ))}
                </div></>
            ) : (
                
                selectedInfo.map((info) => (
                    <Info
                        key={info.id}
                        title={info.title}
                        points={info.points}
                        className={animationClass}
                    />
                ))
            )}
        </div>
    );
}