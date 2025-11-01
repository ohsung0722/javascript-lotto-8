import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/message.js";

class OutputView {
  printPurchasedLotto(lottos) {
    this.#printPurchasedLottoAmount(lottos.amount);
    this.#printPurchasedLottoNumbers(lottos);
  }

  printResult(result, purchaseAmount) {
    this.#printHeader();
    this.#printRankRows(result);
    this.#printProfitRate(result, purchaseAmount);
  }

  #printPurchasedLottoAmount(amount) {
    Console.print(OUTPUT_MESSAGES.PURCHASED_LOTTO_AMOUNT(amount));
  }

  #printPurchasedLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(
        OUTPUT_MESSAGES.PURCHASED_LOTTO_NUMBERS(lotto.getNumbers())
      );
    });
  }

  #printHeader() {
    Console.print("");
    Console.print(OUTPUT_MESSAGES.STAT_TITLE);
    Console.print(OUTPUT_MESSAGES.SEPARATOR);
  }

  #printRankRows(result) {
    const rows = result.toRows();
    rows.forEach((row) => Console.print(row));
  }

  #printProfitRate(result, purchaseAmount) {
    const rate = result.calculateProfitRate(purchaseAmount);
    Console.print(OUTPUT_MESSAGES.PROFIT_RATE(rate));
  }
}

export default OutputView;
