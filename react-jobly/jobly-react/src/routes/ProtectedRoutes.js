import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? rest.element : <Navigate to="/" replace />}
    />
  );
};

export default ProtectedRoute;