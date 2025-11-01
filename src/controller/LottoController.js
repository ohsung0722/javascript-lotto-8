import { LOTTO_DELIMITER } from "../constants/lotto.js";
import { ERROR_MESSAGE } from "../constants/message.js";
import IOFactory from "../factory/IOFactory.js";
import WinningLotto from "../model/WinningLotto.js";
import LottoService from "../service/LottoService.js";
import LottoValidator from "../service/LottoValidator.js";
import ResultService from "../service/ResultService.js";
import { parseCommaSeperatedNumbers } from "../utils/parser.js";
import {
  ensureAllNumbers,
  ensureContainsDelimiter,
  ensureNotEmpty,
} from "../utils/validator.js";

class LottoController {
  constructor() {
    this.inputView = IOFactory.createInputView();
    this.outputView = IOFactory.createOutputView();
    this.lottoService = new LottoService();
    this.resultService = new ResultService();
    this.lottoValidator = new LottoValidator();
  }

  async play() {
    const purchaseAmount = await this.#handlePurchaseAmount();
    const { count, lottos } = this.lottoService.publish(purchaseAmount);
    this.outputView.printPurchasedLotto(count, lottos);

    const winningNumbers = await this.#handleWinningNumbers();
    const bonusNumber = await this.#handleBonusNumber(winningNumbers);

    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    const result = this.resultService.calculate(lottos, winningLotto);

    this.outputView.printResult(result, purchaseAmount);
  }

  async #handlePurchaseAmount() {
    while (true) {
      try {
        const input = await this.inputView.inputPurchaseAmount();
        const amount = Number(input);
        this.lottoValidator.validatePurchaseAmount(amount);
        return amount;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  async #handleWinningNumbers() {
    while (true) {
      try {
        const input = await this.inputView.inputWinningNumbers();
        const numbers = this.#processWinningNumbersInput(input);
        return numbers;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  async #handleBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await this.inputView.inputBonusNumber();
        const bonus = Number(input);
        this.lottoValidator.validateLottoNumber(bonus);
        this.lottoValidator.validateBonusNumber(bonus, winningNumbers);

        return bonus;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  #processWinningNumbersInput(input) {
    this.#validateRawInput(input);
    const numbers = parseCommaSeperatedNumbers(input);
    this.#validateParsedNumbers(numbers);
    return numbers;
  }

  #validateRawInput(input) {
    ensureNotEmpty(input, ERROR_MESSAGE.EMPTY_INPUT);
    ensureContainsDelimiter(
      input,
      LOTTO_DELIMITER,
      ERROR_MESSAGE.MISSING_DELIMITER
    );
  }

  #validateParsedNumbers(numbers) {
    ensureAllNumbers(numbers, ERROR_MESSAGE.INVALID_NUMBER_FORMAT);
    this.lottoValidator.validateWinningNumbers(numbers);
  }
}

export default LottoController;
