import { RANK_CONFIG } from "../config/RankConfig.js";
import Rank from "../model/Rank.js";

class RankFactory {
  static createRank(matchCount, bonusMatch) {
    if (matchCount === 6) return Rank.FIRST;
    if (matchCount === 5 && bonusMatch) return Rank.SECOND;
    if (matchCount === 5) return Rank.THIRD;
    if (matchCount === 4) return Rank.FOURTH;
    if (matchCount === 3) return Rank.FIFTH;
    return Rank.MISS;
  }
}

export default RankFactory;
