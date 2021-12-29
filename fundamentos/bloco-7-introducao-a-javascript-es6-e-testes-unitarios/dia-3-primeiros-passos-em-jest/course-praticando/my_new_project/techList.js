//Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto!
function techList(techNames, name) {
  if (techNames.length === 0) return "Vazio!";
  
  const sortedTechNames = techNames.sort();
  const techFinal = [];
  for (let i = 0; i < sortedTechNames.length; i += 1) {
    techFinal.push({
      tech: sortedTechNames[i],
      name,
    })
  }
  return techFinal;
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;
