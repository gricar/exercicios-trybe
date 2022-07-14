import Character from "./Character";
import CharacterService from "./CharacterService";
import LocalDbModel from "./LocalDbModel";
import LongRangeCharacter from "./LongRangeCharacter";
import MeleeCharacter from "./MeleeCharacter";
import MockDbModel from "./MockedDbModel";

const characterPresentation = (character: Character) => {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);


console.log('##########################################');

const A = new CharacterService(new LocalDbModel())
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel);
B.getAll().then(console.log);