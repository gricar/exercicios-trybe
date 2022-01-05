// BONUS - Youtube - Programador a Bordo

const pessoas = [
  {
    nome: 'Ayrton',
    idade: 27
  },
  {
    nome: 'João',
    idade: 13
  },
  {
    nome: 'Maria',
    idade: 24
  },
  {
    nome: 'Cleber',
    idade: 41
  },
  {
    nome: 'Otávio',
    idade: 12
  }
];

const maiorDeIdade = pessoas.reduce( (acumulador, valorArr) => {
  const propMaiorOuMenor = valorArr.idade >= 18 ? 'maioresIdade' : 'menoresIdade';
  // console.log(propMaiorOuMenor)
  acumulador[propMaiorOuMenor].push(valorArr);
  return acumulador;
} , { maioresIdade: [], menoresIdade: [] }) //valor inicial do reduce são as chaves 'maioresIdade' e 'menoresIdade' -> ou seja, o acumulador ja inicia com este objeto

console.log(maiorDeIdade)

// explicando: o acumulador tem o obj definido no valor inicial do reduce; com isso, no loop, ele verifica qual chave será feito o push (maiores ou menores) e com isso insere o objeto atual (valorArr);