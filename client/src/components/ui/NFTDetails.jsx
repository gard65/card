import React, { useState } from 'react';
import '../styles/NFTDetails.css';

const NFTDetails = ({ nft }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className="link-collapse d-flex align-items-center p-3">


      <button className="details-button" onClick={toggleDetails}>
        Details
        <span className={`arrow-icon ${isDetailsOpen ? 'rotate' : ''}`} />
      </button>
      <div className={`details-container ${isDetailsOpen ? 'open' : ''}`}>
        <div className={`nft-details`}>
          <p>{nft.description}</p>
          <ul>
            {nft.attributes.map(attribute => (
              <li key={attribute.trait_type}>
                <strong>{attribute.trait_type}: </strong>
                {attribute.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;

