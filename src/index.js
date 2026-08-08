function sortHeroes(heroes) {
  return heroes.sort((a, b) => {
    return b.health - a.health;
  });
}

export default sortHeroes;
