import React, { createContext, useState, useEffect, useContext } from 'react';

// Creating the Context
export const JobRoleContext = createContext({
  selectedJobRole: "",
  setSelectedJobRole: () => {},
});

// Define the Provider
export const JobRoleProvider = ({ children }) => {
  const [selectedJobRole, setSelectedJobRole] = useState(
    localStorage.getItem('selectedJobRole') || ""
  );

  useEffect(() => {
    localStorage.setItem('selectedJobRole', selectedJobRole);
  }, [selectedJobRole]);

  return (
    <JobRoleContext.Provider value={{ selectedJobRole, setSelectedJobRole }}>
      {children}
    </JobRoleContext.Provider>
  );
};

// Custom hook to use the JobRoleContext
export const useJobRole = () => useContext(JobRoleContext);