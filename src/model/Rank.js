import { RANK_CONFIG } from "../config/RankConfig.js";

class Rank {
  constructor({ name, matchCount, bonus, prize, label }) {
    this.name = name;
    this.matchCount = matchCount;
    this.bonus = bonus;
    this.prize = prize;
    this.label = label;
  }

  static #createNormalRanks() {
    return RANK_CONFIG.RANKS.map((config) => new Rank(config));
  }

  static #createMissRank() {
    return new Rank(RANK_CONFIG.MISS);
  }

  static initializeRanks() {
    const normalRanks = this.#createNormalRanks();

    normalRanks.forEach((rank) => {
      Rank[rank.name] = rank;
    });

    Rank.MISS = this.#createMissRank();
  }

  isMiss() {
    return this.name === "MISS";
  }
}

//클래스 로드 시점에 한번만 초기화하기 위해 사용
Rank.initializeRanks();

export default Rank;
