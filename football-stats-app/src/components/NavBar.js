import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" style={{ width: '250px' }}>
      <h4 className="mb-4">Logo</h4>
      <nav className="flex-grow-1">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/compare" className="nav-link text-white">Compare</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/timeline" className="nav-link text-white">Timeline</Link>
          </li>
        </ul>
      </nav>
      <button className="btn btn-warning mt-auto">Share</button>
    </div>
  );
}
