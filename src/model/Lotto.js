import { LOTTO_SIZE } from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/message.js";
import DefaultError from "../error/DefaultError.js";
import { hasNoDuplicates } from "../utils/validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_SIZE) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_LOTTO_SIZE);
    }

    if (!hasNoDuplicates(numbers)) {
      throw new DefaultError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return [...this.#numbers];
  }

  //당첨 번호랑 몇개가 맞는지 return해주는 함수
  matchCount(winningNumbers) {
    const matchNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );

    return matchNumbers.length;
  }

  //입력한 숫자가 Number 객체에 있는지 판단하는 함수
  contains(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
