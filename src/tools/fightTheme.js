import PicPower from "../assets/img/iconeFTPower.png"
import PicAgility from "../assets/img/iconeFTAgility.png"
import PicFight from "../assets/img/iconeFTFight.png"
import PicIntelligency from "../assets/img/iconeFTIntelligency.png"
import PicStamina from "../assets/img/iconeFTStamina.png"
import PicStrenght from "../assets/img/iconeFTStrenght.png"
import PicRandom from "../assets/img/iconeFTRandom.png"


const allThemes = [
  "power",
  "speed",
  "combat",
  "intelligence",
  "durability",
  "strength",
];

const randomTheme = allThemes[Math.floor(Math.random() * allThemes.length)];

const fightTheme = [
  { txt: "PWR", img: PicPower, theme: "power" },
  { txt: "AGI", img: PicAgility, theme: "speed" },
  { txt: "FGT", img: PicFight, theme: "combat" },
  { txt: "INT", img: PicIntelligency, theme: "intelligence"},
  { txt: "STA", img: PicStamina, theme: "durability"},
  { txt: "STR", img: PicStrenght, theme: "strength"},
  { txt: "LUCK", img: PicRandom, theme: `${randomTheme}`}
];

export default fightTheme;
