import "./Plus.css";
import { Link } from "react-router-dom";
function Plus() {
  return (
    <>
      <div>
      <Link to="/Ana">
        <img src="plus.svg" alt="+" className="Plus"/>
      </Link>

      </div>
    </>
  );
}

export default Plus;