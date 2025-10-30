import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

class InputView {
  async inputPaymentAmount() {
    return Console.readLineAsync(INPUT_MESSAGE.PAYMENT_AMOUNT);
  }

  async inputWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  async inputBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default InputView;
