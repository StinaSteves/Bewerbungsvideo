import React, { useState } from "react";

import Lines from "/images/lines.png";

import "./Main.css";


const ExpandableText = ({ children, maxHeight = 60 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded((prev) => !prev);
    };
  
    return (
      <div className="expandable-content">
      <div
        className={`content ${isExpanded ? "expanded" : "collapsed"}`}
        style={{ "--max-height": `${maxHeight}px` }}
      >
        {children}
      </div>
      <button className="toggle-button" onClick={toggleExpand}>
        {isExpanded ? "... weniger" : "... mehr"}
      </button>
    </div>
    );
  };

export default function VideoDescription() {
  return (
    
      <div className="bioWrapper">
                <div className="bio">
                  <h3>6 Aufrufe vor 10 Tagen</h3>
                 
                  <ExpandableText>
                    <p>
                      Hinweis: Die Vollbildfunktion wurde absichtlich deaktiviert, um
                      ein optimiertes und fokussiertes Seherlebnis zu gewährleisten.
                      Vielen Dank für Ihr Verständnis! <br />
                      <br />
                      <br />
                      Willkommen zu meinem Bewerbungsvideo als Frontend-Entwickler! In
                      diesem Video möchte ich meine Fähigkeiten und Leidenschaft für
                      die Webentwicklung vorstellen. Mit Erfahrung in React, CSS, und
                      JavaScript habe ich bereits an vielfältigen Projekten
                      gearbeitet, die sauberen, responsiven und benutzerfreundlichen
                      Code erfordern.
                    </p>
                  </ExpandableText>
                </div>
                <div className="commentWrapper">
                  <h3>2 Kommentare</h3>
                  <div className="sorting">
                    <img
                      src={Lines}
                      alt=""
                      style={{ width: "30px", height: "30px" }}
                    />
                    <p>sortieren nach</p>
                  </div>
                </div>
              </div>
            

    
  );
}