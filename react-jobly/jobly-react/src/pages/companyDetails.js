import React, { useState, useEffect } from 'react';
import { JoblyApi } from '../../src/api';

const CompanyDetail = ({ match }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompanyData() {
      try {
        const companyData = await JoblyApi.getCompany(match.params.company);
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching company:', error);
      }
    }

    fetchCompanyData();
  }, [match.params.company]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Description: {company.description}</p>
      {/* Render other company details */}
    </div>
  );
};

export default CompanyDetail;
