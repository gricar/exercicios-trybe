// BONUS - Youtube - Programador a Bordo

const pessoasYoutube = [
  {
    nome: 'Thiago Nigro',
    sexo: 'M',
    age: 30,
    estado: 'SP'
  },
  {
    nome: 'Naty Arcuri',
    sexo: 'F',
    age: 30,
    estado: 'RJ'
  },
  {
    nome: 'Joel Jota',
    sexo: 'M',
    age: 33,
    estado: 'MG'
  },
  {
    nome: 'Tallis Gomes',
    sexo: 'M',
    age: 28,
    estado: 'SP'
  },
  {
    nome: 'Alexandra',
    sexo: 'F',
    age: 40,
    estado: 'MG'
  },
];

const pessoasAgrupadasSexo = pessoasYoutube.reduce((acumulador, pessoa) => {
  if(!acumulador[pessoa.sexo]) {
    acumulador[pessoa.sexo] = []
  }
  acumulador[pessoa.sexo].push(pessoa);
  return acumulador;
}, {})

//console.log('pessoasAgrupadasSexo', pessoasAgrupadasSexo)

const pessoasAgrupadasEstado = pessoasYoutube.reduce((acumulador, pessoa) => {
  if(!acumulador[pessoa.estado]) {  // verifica se existe uma propriedade no objeto inicial {} com o nome do ''.estado'
    acumulador[pessoa.estado] = []; // no primeiro loop nao existe propriedade criada no acumulador, então com isso é criado a propriedade com a própria ''.estado'
  }
  acumulador[pessoa.estado].push(pessoa);
  return acumulador;
}, {})

//console.log('pessoasAgrupadasEstado', pessoasAgrupadasEstado)

//exemplo agrupando em Array
const pessoasAgrupadasIdadeArr = pessoasYoutube.reduce((acc, { nome, age }) => {
  if (age >= 30) {
    acc.push({nome, age});
  }
  return acc;
}, []);
//console.log('pessoasAgrupadasIdadeArr', pessoasAgrupadasIdadeArr)

//exemplo agrupando em Objeto
const pessoasAgrupadasIdadeObj = pessoasYoutube.reduce((acc, currObj) => {
  const { nome, age } = currObj;
  if (age >= 30) {
    acc[nome] = {nome, age}
  };
  return acc
}, {})
//console.log('pessoasAgrupadasIdadeObj', pessoasAgrupadasIdadeObj)