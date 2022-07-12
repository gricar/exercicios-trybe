import Subclass from "./Subclass";
import Superclass from "./Superclass";
import Bird from "./Bird";

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