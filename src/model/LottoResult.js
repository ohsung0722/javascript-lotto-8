import { RANK_CONFIG } from "../config/RankConfig.js";
import { RESULT_ROW_FORMAT } from "../constants/resultFormat.js";
import RankFactory from "../factory/RankFactory.js";

class LottoResult {
  constructor() {
    this.counts = this.#initCounts();
  }

  #initCounts() {
    const counts = new Map();

    RANK_CONFIG.RANKS.forEach((rankConfig) => {
      const rank = RankFactory.createRank(
        rankConfig.matchCount,
        rankConfig.bonus
      );

      counts.set(rank, 0);
    });

    return counts;
  }

  add(rank) {
    if (rank.isMiss()) return;
    this.counts.set(rank, this.counts.get(rank) + 1);
  }

  getCountOf(rank) {
    return this.counts.get(rank) ?? 0;
  }

  getTotalPrize() {
    let sum = 0;

    for (const [rank, count] of this.counts.entries()) {
      sum += rank.prize * count;
    }

    return sum;
  }

  calculateProfitRate(purchaseAmount) {
    const totalPrize = this.getTotalPrize();
    const rate = (totalPrize / purchaseAmount) * 100;

    return Math.round(rate * 10) / 10;
  }

  toRows() {
    return RANK_CONFIG.RANKS.map((config) =>
      RESULT_ROW_FORMAT(
        config.label,
        config.prize,
        this.getCountOf(RankFactory.createRank(config.matchCount, config.bonus))
      )
    );
  }
}

export default LottoResult;
