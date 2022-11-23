import PropTypes from "prop-types";
import CardDroped from "./arenaDropSection/CardDroped";
import PicCardBack from "../../../../../../assets/img/CardBackBlk.png";

const ArenaDrop = ({
  themeFight,
  drop,
  isShownCardFavorite1,
  isShownCardFavorite2,
  isShownCardPlayer,
}) => {
  return (
    <div>
      <CardDroped
        drop={drop}
        isShownCardFavorite1={isShownCardFavorite1}
        isShownCardFavorite2={isShownCardFavorite2}
        isShownCardPlayer={isShownCardPlayer}
      />
      <div id="arenaDrop">
        <div id="arenaDropBG">
          <img src={PicCardBack} alt="CardBack" />
        </div>
        <p>
          FIGHT <br /> WITH <br /> {themeFight.txt}
        </p>
      </div>
    </div>
  );
};

ArenaDrop.propTypes = {
  themeFight: PropTypes.arrayOf.isRequired,
  drop: PropTypes.string.isRequired,
  isShownCardFavorite1: PropTypes.string.isRequired,
  isShownCardFavorite2: PropTypes.string.isRequired,
  isShownCardPlayer: PropTypes.string.isRequired,
};

export default ArenaDrop;
