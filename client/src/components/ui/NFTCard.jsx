import NFTDetails from './NFTDetails';
import { useState, useEffect } from 'react'

function NFTCard() {
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:5001');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (

    <>
      <div className="nft-card">
        <img className="nft-logo" src={data.image} alt={data.name} />
        <div className="info">

          <div className="nft-name"><h2>{data.name}</h2></div>
          <div className="details">
            <h3 className="section-title">Details</h3>
            <NFTDetails nft={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NFTCard

