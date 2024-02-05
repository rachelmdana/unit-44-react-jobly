import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Simulate user authentication upon component mount
  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking token in local storage)
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data or set currentUser based on authentication status
      setCurrentUser({ username: 'exampleUser' }); // Replace with actual user data
    }
  }, []);

  const handleLogout = () => {
    // Clear authentication state (e.g., tokens)
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to Jobly!</h1>
      <nav>
        <Link to="/companies">Companies</Link>
        <Link to="/jobs">Jobs</Link>
        {/* Show the Profile link only if currentUser is truthy */}
        {currentUser && <Link to="/profile">Profile</Link>}
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;