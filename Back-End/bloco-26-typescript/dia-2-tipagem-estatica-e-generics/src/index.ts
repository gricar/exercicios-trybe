import Car from './Car';
import Colors from './Colors';
import Doors from './Doors';
import Directions from './Directions';

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
