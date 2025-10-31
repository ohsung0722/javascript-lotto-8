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
      throw new DefaultError("로또 번호와 보너스 번호는 중복될 수 없습니다.");
    }
  }

  match(lotto) {
    const matchCount = lotto.matchCount(this.#winningNumbers);
    const bonusMatch = lotto.contains(this.#bonusNumber);

    return { matchCount, bonusMatch };
  }
}

export default WinningLotto;
