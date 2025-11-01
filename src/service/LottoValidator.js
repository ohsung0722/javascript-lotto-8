import { LOTTO_PRICE } from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/message.js";
import DefaultError from "../error/DefaultError.js";
import { isInteger } from "../utils/validator.js";

class LottoValidator {
  validatePurchaseAmount(amount) {
    if (!isInteger(amount) || amount % LOTTO_PRICE !== 0) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_PURCHASE_UNIT);
    }
    if (amount < LOTTO_PRICE) {
      throw new DefaultError(ERROR_MESSAGE.INVALID_PURCHASE_MIN);
    }
  }
}

export default LottoValidator;
