import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ComparisonPage from './pages/ComparisonPage/ComparisonPage';
import TimelinePage from './pages/TimelinePage/TimelinePage';

// App component
export default
function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/compare" component={ComparisonPage} />
      <Route path="/timeline" component={TimelinePage} />
    </Router>
  );
}