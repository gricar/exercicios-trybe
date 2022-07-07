import Car from './Car';
import Colors from './Colors';
import Doors from './Doors';
import Directions from './Directions';

/* Exercício 1 e 2 */
const carroStilo = new Car('Corolla', Colors.BLACK, 4);

carroStilo.openTheDoor(Doors.DRIVER);
carroStilo.closeTheDoor(Doors.DRIVER);
carroStilo.turnOn();
carroStilo.speedUp();
carroStilo.speedDown();
carroStilo.turn(Directions.LEFT);
carroStilo.speedUp();
carroStilo.speedDown();
carroStilo.turn(Directions.RIGHT);
carroStilo.stop();
carroStilo.openTheDoor(Doors.BEHIND_DRIVER);
carroStilo.closeTheDoor(Doors.BEHIND_DRIVER);

// console.log(carroStilo.turnOn());

/* ------------------------------------------------------------------ */

/* Exercício 3 */

import Pizza from './Pizza';

const calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8
}

// console.log(calabresa);

const nutela: Pizza = {
  flavor: "Nutela",
  slices: 4
}

// console.log(nutela);

/* ------------------------------------------------------------------ */

/* Exercício 4 */
import PizzaCommon from './PizzaCommon';
import PizzaSugar from './PizzaSugar';
import PizzaVegetarian from './PizzaVegetarian';

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 6,
};

// console.log(frango);

const marshmallow: PizzaSugar = {
  flavor: 'Marshmallow',
  slices: 4,
};

// console.log(marshmallow);

const cogumelos: PizzaVegetarian = {
  flavor: 'Cogumelos',
  slices: 6,
};

// console.log(cogumelos);
