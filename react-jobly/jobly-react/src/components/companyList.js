import React, { useState, useEffect } from 'react';
import {JoblyApi} from '../../../api';

const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const companiesData = await JoblyApi.getCompanies(searchTerm);
        setCompanies(companiesData);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    }

    fetchCompanies();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      <ul>
        {companies.map(company => (
          <li key={company.handle}>
            {company.name}
            {/* Render other company info */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
