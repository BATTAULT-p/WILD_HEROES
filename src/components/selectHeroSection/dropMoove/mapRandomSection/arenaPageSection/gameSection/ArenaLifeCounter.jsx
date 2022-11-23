import PropTypes from "prop-types";
import PicLifeCounterGlass from "../../../../../../assets/img/LifeCounterGlass.png";
import PicLifeCounter from "../../../../../../assets/img/LifeCounter.png";

const ArenaLifeCounter = ({
  computerLife,
  firstPlayerLife,
  fightThemeIcone,
}) => {
  return (
    <div id="lifecounter">
      <img id="lifecounterSupport" src={PicLifeCounter} alt="Life counter" />
      <img id="FightThemeIcon" src={fightThemeIcone.img} alt="Fight theme" />
      <img
        id="lifecounterGlass"
        src={PicLifeCounterGlass}
        alt="Life counter glass"
      />
      <div id="score">
        <p id="computerLife">{computerLife}</p>
        <p id="firstPlayerLife">{firstPlayerLife}</p>
      </div>
    </div>
  );
};
ArenaLifeCounter.propTypes = {
  computerLife: PropTypes.number.isRequired,
  firstPlayerLife: PropTypes.number.isRequired,
  fightThemeIcone: PropTypes.arrayOf.isRequired,
};
export default ArenaLifeCounter;
