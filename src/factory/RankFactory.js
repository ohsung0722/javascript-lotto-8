import { RANK_CONFIG } from "../config/RankConfig.js";
import Rank from "../model/Rank.js";

class RankFactory {
  static createRank(matchCount, bonusMatch) {
    const config =
      RANK_CONFIG.RANKS.find(
        (rank) => rank.matchCount === matchCount && rank.bonus === bonusMatch
      ) || RANK_CONFIG.MISS;

    return new Rank(config);
  }
}

export default RankFactory;
