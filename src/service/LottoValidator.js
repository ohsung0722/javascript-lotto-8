import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  LOTTO_SIZE,
} from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/message.js";
import DefaultError from "../error/DefaultError.js";
import { hasNoDuplicates, isInRange, isInteger } from "../utils/validator.js";

class LottoValidator {
  validatePurchaseAmount(amount) {
    if (!isInteger(amount) || amount % LOTTO_PRICE !== 0) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_PURCHASE_UNIT);
    }
    if (amount < LOTTO_PRICE) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_PURCHASE_MIN);
    }
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== LOTTO_SIZE) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_LOTTO_SIZE);
    }

    numbers.forEach((number) => this.validateLottoNumber(number));

    if (!hasNoDuplicates(numbers)) {
      throw new DefaultError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }
  }

  validateLottoNumber(number) {
    if (!isInteger(number)) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
    }
    if (!isInRange(number, LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER)) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
    }
  }
}

export default LottoValidator;
