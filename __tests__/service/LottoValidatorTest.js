import LottoValidator from "../../src/service/LottoValidator.js";
import { ERROR_MESSAGE } from "../../src/constants/message.js";
import * as validator from "../../src/utils/validator.js";

describe("LottoValidator", () => {
  let lottoValidator;

  beforeEach(() => {
    lottoValidator = new LottoValidator();
  });

  describe("validatePurchaseAmount()", () => {
    test("정상 금액(1000원 단위)은 통과한다", () => {
      expect(() => lottoValidator.validatePurchaseAmount(3000)).not.toThrow();
    });

    test("정수가 아닌 값은 예외를 발생시킨다", () => {
      jest.spyOn(validator, "isInteger").mockReturnValue(false);

      expect(() => lottoValidator.validatePurchaseAmount("1000")).toThrow(
        ERROR_MESSAGE.INVALID_PURCHASE_UNIT
      );

      validator.isInteger.mockRestore();
    });

    test("1000원 단위가 아니면 예외를 발생시킨다", () => {
      expect(() => lottoValidator.validatePurchaseAmount(1500)).toThrow(
        ERROR_MESSAGE.INVALID_PURCHASE_UNIT
      );
    });

    test("1000원 미만 금액은 예외를 발생시킨다", () => {
      expect(() => lottoValidator.validatePurchaseAmount(500)).toThrow(
        ERROR_MESSAGE.INVALID_PURCHASE_MIN
      );
    });
  });

  describe("validateWinningNumbers()", () => {
    test("6개의 숫자이고 중복이 없을 경우 통과한다", () => {
      expect(() =>
        lottoValidator.validateWinningNumbers([1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("로또 번호 개수가 6개가 아니면 예외를 발생시킨다", () => {
      expect(() =>
        lottoValidator.validateWinningNumbers([1, 2, 3, 4, 5])
      ).toThrow(ERROR_MESSAGE.INVALID_LOTTO_SIZE);
    });

    test("로또 번호 중 정수가 아닌 값이 포함되면 예외를 발생시킨다", () => {
      jest
        .spyOn(validator, "isInteger")
        .mockImplementation((n) => typeof n === "number" && n === 1);

      expect(() =>
        lottoValidator.validateWinningNumbers([1, "A", 3, 4, 5, 6])
      ).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);

      validator.isInteger.mockRestore();
    });

    test("중복된 번호가 있을 경우 예외를 발생시킨다", () => {
      jest.spyOn(validator, "hasNoDuplicates").mockReturnValue(false);

      expect(() =>
        lottoValidator.validateWinningNumbers([1, 2, 3, 3, 4, 5])
      ).toThrow(ERROR_MESSAGE.DUPLICATED_NUMBER);

      validator.hasNoDuplicates.mockRestore();
    });
  });

  describe("validateLottoNumber()", () => {
    test("정상 범위(1~45) 내의 숫자는 통과한다", () => {
      expect(() => lottoValidator.validateLottoNumber(10)).not.toThrow();
    });

    test("정수가 아니면 예외를 발생시킨다", () => {
      jest.spyOn(validator, "isInteger").mockReturnValue(false);

      expect(() => lottoValidator.validateLottoNumber("A")).toThrow(
        ERROR_MESSAGE.INVALID_LOTTO_NUMBER
      );

      validator.isInteger.mockRestore();
    });

    test("범위를 벗어난 숫자는 예외를 발생시킨다", () => {
      jest.spyOn(validator, "isInRange").mockReturnValue(false);

      expect(() => lottoValidator.validateLottoNumber(100)).toThrow(
        ERROR_MESSAGE.INVALID_LOTTO_NUMBER
      );

      validator.isInRange.mockRestore();
    });
  });

  describe("validateBonusNumber()", () => {
    test("보너스 번호가 정상일 경우 통과한다", () => {
      expect(() =>
        lottoValidator.validateBonusNumber(7, [1, 2, 3, 4, 5, 6])
      ).not.toThrow();
    });

    test("보너스 번호가 당첨 번호와 중복되면 예외 발생", () => {
      expect(() =>
        lottoValidator.validateBonusNumber(6, [1, 2, 3, 4, 5, 6])
      ).toThrow(ERROR_MESSAGE.DUPLICATED_LOTTO_AND_BONUS_NUMBER);
    });

    test("보너스 번호가 유효하지 않으면 예외 발생", () => {
      jest.spyOn(validator, "isInteger").mockReturnValue(false);

      expect(() =>
        lottoValidator.validateBonusNumber("A", [1, 2, 3, 4, 5, 6])
      ).toThrow(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);

      validator.isInteger.mockRestore();
    });
  });
});
