import Character from "./Character";
import LongRangeCharacter from "./LongRangeCharacter";
import MeleeCharacter from "./MeleeCharacter";

const characterPresentation = (character: Character) => {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);