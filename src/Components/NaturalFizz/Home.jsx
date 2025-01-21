import { useState, useEffect } from "react";
import "./Home.css";

const mapFlavors = [
  {
    name: "Lemon",
    fruitCan: "/public/images/NaturalFizz/lemonCan.png",
    fruit: "/public/images/NaturalFizz/lemon.png",
    backgroundColor: "#f4d453",
    flavorDescription:
      "The organic lemon soda tingles refreshingly on the tongue, zesty acidity from freshly squeezed lemons.",
  },
  {
    name: "Apple",
    fruitCan: "/public/images/NaturalFizz/appleCan.png",
    fruit: "/public/images/NaturalFizz/apple.png",
    backgroundColor: "#ea3f48",
    flavorDescription:
      "The organic apple soda is crisp and refreshing, with a burst of sweet, juicy apples.",
  },
  {
    name: "Blueberry",
    fruitCan: "/public/images/NaturalFizz/blueberryCan.png",
    fruit: "/public/images/NaturalFizz/blueberry.png",
    backgroundColor: "#8b90ae",
    flavorDescription:
      "The organic blueberry soda is vibrant and tangy, with a burst of sweet, wild blueberries.",
  },
  {
    name: "Peach",
    fruitCan: "/public/images/NaturalFizz/peachCan.png",
    fruit: "/public/images/NaturalFizz/peach.png",
    backgroundColor: "#f9af3c",
    flavorDescription:
      "The organic peach soda is sweet and juicy, with a smooth, mellow flavor of ripe peaches.",
  },
  {
    name: "Unlocking the Power",
    fruitCan: "/public/images/NaturalFizz/peachCan.png",
    fruit: "/public/images/NaturalFizz/waterDrops.png",
    backgroundColor: "#f9af3c",
    flavorDescription:
      "BUY NATURALFIZZ NOW!",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mapFlavors.length);
      });
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  const startAnimation = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 500); 
  };

  return (
    <div>

      <section
        className="section array-section"
        style={{
          backgroundColor: mapFlavors[currentIndex]?.backgroundColor || "#ffffff",
        }}
      >
        {mapFlavors[currentIndex] && (
          <>
  
            <div className="SectionContainer textLeft">
              <h2 className="slide-in-left">{mapFlavors[currentIndex].name}</h2>
              <p className="slide-in-left">{mapFlavors[currentIndex].flavorDescription}</p>
            </div>

       
            <div className="SectionImageFruitContainer">
              <img
                id="flavorBanner"
                src={mapFlavors[currentIndex].fruit}
                alt="Flavor fruit"
                className={`fade-in ${isAnimating ? "fade-out" : ""}`}
              />
            </div>

 
            <div className="SectionImageContainer">
              <img
                src={mapFlavors[currentIndex].fruitCan}
                alt="Flavor can"
              />
            </div>
          </>
        )}
      </section>


      <section
        className="section next-section"
        style={{
          backgroundColor: mapFlavors[currentIndex]?.backgroundColor || "#ffffff",
        }}
      >
        <h1>Nächste Sektion</h1>
      </section>
    </div>
  );
};

export default Home;
