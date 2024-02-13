import React from 'react';

const CompanyCard = ({ company }) => {
  return (
    <div>
      <h3>{company.name}</h3>
      {/* Render other company info */}
    </div>
  );
};

export default CompanyCard;
