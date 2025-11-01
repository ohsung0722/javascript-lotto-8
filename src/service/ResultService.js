import RankFactory from "../factory/RankFactory.js";
import LottoResult from "../model/LottoResult.js";

class ResultService {
  calculate(lottos, winningLotto) {
    const result = this.#createEmptyResult();

    lottos.forEach((lotto) => {
      const rank = this.#evaluateSingleLotto(lotto, winningLotto);
      this.#accumulate(result, rank);
    });

    return result;
  }

  #createEmptyResult() {
    return new LottoResult();
  }

  #evaluateSingleLotto(lotto, winningLotto) {
    const { matchCount, bonusMatch } = winningLotto.match(lotto);

    return RankFactory.createRank(matchCount, bonusMatch);
  }

  #accumulate(result, rank) {
    result.add(rank);
  }
}

export default ResultService;
