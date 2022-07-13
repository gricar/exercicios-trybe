import Subclass from "./Subclass";
import Superclass from "./Superclass";
import Bird from "./Bird";
import SalesContract from "./SalesContract";
import NaturalPerson from "./NaturalPerson";
import LegalPerson from "./LegalPerson";

// Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
const myFunc = (object: Superclass) => {
  // Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
  object.sayHello();

  console.log(object.isSuper ? 'Super!' : 'Sub!');
};


// Crie um objeto da _Superclass_ e outro da _Subclass_.
const sup = new Superclass();
const sub = new Subclass();

// Chame a função `myFunc` 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);

/*  --------------------------------------------------- */
console.log('-----------Exemplo interface ----------------')

const parrot = new Bird('papagaio', new Date(Date.parse('Aug 16, 2015')));

console.log('idade:', parrot.age);
console.log()
parrot.fly();

/*  --------------------------------------------------- */
console.log('----------- Resolução do problema inicial do Course ----------------')

const s1 = new SalesContract();
const pp1 = new NaturalPerson('Gabigol', '455.907.568-98');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '23961237162378');

s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();
