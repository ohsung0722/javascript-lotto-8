import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  LOTTO_SIZE,
} from "../constants/lotto.js";
import Lotto from "../model/Lotto.js";
import { generateSortedRandomNubmers } from "../utils/randomGenerator.js";

class LottoService {
  publish(amount) {
    const count = this.#calculateLottoCount(amount);
    const lottos = Array.from({ length: count }, () =>
      this.#createSingleLotto()
    );

    return { count, lottos };
  }

  #calculateLottoCount(amount) {
    return Math.floor(amount / LOTTO_PRICE);
  }

  #createSingleLotto() {
    const numbers = generateSortedRandomNubmers(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_SIZE
    );

    return new Lotto(numbers);
  }
}

export default LottoService;
