import Lotto from "../../src/model/Lotto.js";
import LottoService from "../../src/service/LottoService.js";

describe("LottoService 테스트", () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  test("구입 금액에 따라 로또 개수가 올바르게 생성된다.", () => {
    const purchaseAmount = 5000;
    const { count, lottos } = lottoService.publish(purchaseAmount);

    expect(count).toBe(5);
    expect(lottos).toHaveLength(5);
    expect(lottos.every((lotto) => lotto instanceof Lotto)).toBe(true);
  });

  test("생성된 각 로또는 6개의 숫자를 가진다", () => {
    const { lottos } = lottoService.publish(1000);

    const numbers = lottos[0].getNumbers();
    expect(numbers).toHaveLength(6);
  });

  test("로또 번호는 지정된 범위(1~45)에 포함된다", () => {
    const { lottos } = lottoService.publish(1000);
    const numbers = lottos[0].getNumbers();

    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(45);
    });
  });

  test("구입 금액이 0원일 때 count가 0이다", () => {
    const { count, lottos } = lottoService.publish(0);

    expect(count).toBe(0);
    expect(lottos).toHaveLength(0);
  });
});
