import React, { useState, useEffect } from "react";
import ApplyButton from "./jobs";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/companies")
    .then((response) => response.json())
    .then((data) => setCompanies(data))
    .catch((error) => console.error("Error fetching companies:", error));
}, []);

  return (
    <div>
      {companies.map((company) => (
        <div key={company.id}>
          <div>{company.name}</div>
          <ApplyButton companyId={company.id} />
        </div>
      ))}
    </div>
  );
};

export default Companies;