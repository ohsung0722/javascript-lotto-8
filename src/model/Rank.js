class Rank {
  constructor({ name, matchCount, bonus, prize, label }) {
    this.name = name;
    this.matchCount = matchCount;
    this.bonus = bonus;
    this.prize = prize;
    this.label = label;
  }

  isMiss() {
    return this.name === "MISS";
  }
}

export default Rank;
