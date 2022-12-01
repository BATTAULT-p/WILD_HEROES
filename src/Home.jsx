import { useEffect } from "react";
import "./Home.css";
import PropTypes from "prop-types";
import WarBack from "./assets/videos/homeBG.mp4";
import ColumnMaster from "./components/home/ColumnMaster";
import Eclair from "./components/home/Eclair";

const Home = ({ heroes, loading }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="home">
          <div className="main">
            <video className="videoFeu" src={WarBack} autoPlay loop muted />
          </div>
          <ColumnMaster heroes={heroes} />
          <Eclair />
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  heroes: PropTypes.arrayOf.isRequired,
};

export default Home;
