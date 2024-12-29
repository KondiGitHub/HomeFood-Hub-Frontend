import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to HomeChef Hub!</h1>
      <Link to="/menu">Explore Our Menu</Link>
    </div>
  );
}

export default HomePage;
