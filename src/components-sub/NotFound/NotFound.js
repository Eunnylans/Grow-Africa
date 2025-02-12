import { Link } from "react-router-dom";
import "./NotFound.scss"; // Import your SCSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="home-button">Go Home</Link>
    </div>
  );
};

export default NotFound;
