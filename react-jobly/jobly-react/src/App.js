// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import useLocalStorage from './hooks/useLocalStorage';
// import Home from './pages/home';
// import Companies from './pages/companies';
// import CompanyDetail from './pages/companyDetails';
// import Jobs from './pages/jobs';
// import LoginForm from './pages/login';
// import SignupForm from './pages/signup';
// import EditProfileForm from './pages/profile';
// import { JoblyApi } from './api';
// import axios from 'axios';

// const App = () => {
//   const [token, setToken] = useLocalStorage('token', null);
//   const [currentUser, setCurrentUser] = useState(null);
  

//   useEffect(() => {
//   const fetchData = async () => {
//     if (token) {
//       try {
//         const response = await axios.get('/user'); // Use the correct function or API call here
//         setCurrentUser(response.data.user);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [token]);

//   const handleLogin = async (e) => {
//   e.preventDefault();
//     const username = e.target.username.value;
//     const password = e.target.password.value;

//     try {
//       const token = await JoblyApi.login({ username, password }); 
//       localStorage.setItem("token", token);  
//       setToken(token);
//       return <Navigate to="/" replace />; // Replace Redirect with Navigate
//     } catch (err) {
//       console.error("Error logging in:", err);
//       alert("Error logging in. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     setToken(null);
//     setCurrentUser(null);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm onSubmit={handleLogin} />} />
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/edit-profile" element={<EditProfileForm user={currentUser} />} />
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<Navigate to="/" replace />} />

//         {token && (
//           <>
//             <Route path="/companies/*" element={<Companies />} />
//             <Route path="/companies/:id" element={<CompanyDetail />} />
//             <Route path="/jobs" element={<Jobs />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };


// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Home from './pages/home';
import Companies from './pages/companies';
import CompanyDetail from './pages/companyDetails';
import Jobs from './pages/jobs';
import LoginForm from './pages/login';
import SignupForm from './pages/signup';
import EditProfileForm from './pages/profile';
import { JoblyApi } from './api';

const App = () => {
  const [token, setToken] = useLocalStorage('token', null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = () => {
    // Navigate to the home page
  };

  const handleLogout = () => {
    // Clear the token and user data
    setToken(null);
    setCurrentUser(null);
  };

  useEffect(() => {
    // Fetch user data
    const fetchData = async () => {
      if (token) {
        try {
          const response = await JoblyApi.getUser(token);
          setCurrentUser(response.data.user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchData();
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/edit-profile" element={<EditProfileForm user={currentUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        {token && (
          <>
            <Route path="/companies/*" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/jobs" element={<Jobs />} />
          </>
        )}
      </Routes>
      {token && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </Router>
  );
};

export default App;