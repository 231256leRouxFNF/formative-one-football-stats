// Importing necessary modules and components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

console.log('HomePage: Hello there');

// Defining the HomePage component
const HomePage = () => {
  // Logging to the console that the component has been rendered
  console.log('HomePage component rendered');
  console.log('HomePage: General Kenobi');

  // Returning the JSX to render the component
  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      <div className="row">
        {/* Top row with 3 smaller cards */}
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Content for card 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Content for card 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Content for card 3.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">Content for card 4.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Middle row with 1 big card */}
        <div className="col-md-9 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Big Card</h5>
              <p className="card-text">Content for the big card.</p>
            </div>
          </div>
        </div>
        {/* Right side with 1 card */}
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 5</h5>
              <p className="card-text">Content for card 5.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the HomePage component as the default export
export default HomePage;