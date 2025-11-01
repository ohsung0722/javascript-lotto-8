import { ERROR_MESSAGE } from "../constants/message.js";
import DefaultError from "../error/DefaultError.js";

class WinningLotto {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validate(winningNumbers, bonusNumber);
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new DefaultError(ERROR_MESSAGE.DUPLICATED_LOTTO_AND_BONUS_NUMBER);
    }
  }

  match(lotto) {
    const matchCount = lotto.matchCount(this.#winningNumbers);
    const bonusMatch = lotto.contains(this.#bonusNumber);

    return { matchCount, bonusMatch };
  }
}

export default WinningLotto;
