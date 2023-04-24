import React, {useState, useEffect } from "react";

function ContainerCard () {
    const [batmanData, setBatmanData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/Media")
        .then((res) => res.json())
        .then((data) => setBatmanData(data));
        }, []);
    
        const [isSeen, setIsSeen] = useState(false);
    
      const handleMarkAsSeen = () => {
        setIsSeen(!isSeen);
      }
    
      return (
        <div>
          {batmanData.map((batItem) => (
            <div key={batItem.id}>
                <image src={batItem.image} alt={batItem.title}/>
              <h3>{batItem.title}</h3>
              <p>{batItem.year}</p>
              <p>
                <strong>{`Director: ${batItem.director}`}</strong>
              </p>
              <p>{`Starring ${batItem.actors}`}</p>
              <button onClick={handleMarkAsSeen}>{isSeen ? "Already seen" : "Have not seen"}</button>
              </div>
          ))}
          </div>
      )
    };
    

export default ContainerCard;
