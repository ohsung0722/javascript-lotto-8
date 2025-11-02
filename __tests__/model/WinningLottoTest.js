import Lotto from "../../src/model/Lotto.js";
import WinningLotto from "../../src/model/WinningLotto.js";

describe("당첨이 몇개인지, 보너스 번호가 포함되는지를 저장하는 WinningLotto 클래스 테스트", () => {
  test("보너스 번호와 당첨 번호가 중복되면 예외가 발생한다.", () => {
    expect(() => new WinningLotto([1, 2, 3, 4, 5, 6], 6)).toThrow(
      "[ERROR] 로또 번호와 보너스 번호는 중복될 수 없습니다."
    );
  });

  test("중복되지 않은 보너스 번호라면 정상적으로 생성된다.", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    expect(winningLotto).toBeInstanceOf(WinningLotto);
  });

  test("로또 번호를 3개 맞추고 보너스 번호는 불일치 하는 경우", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);

    const result = winningLotto.match(lotto);

    expect(result).toEqual({ matchCount: 3, bonusMatch: false });
  });

  test("로또가 5개 번호를 맞추고 보너스 번호도 맞춘 경우", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);

    const result = winningLotto.match(lotto);

    expect(result).toEqual({ matchCount: 5, bonusMatch: true });
  });

  test("로또가 모든 번호를 맞췄지만 보너스는 포함하지 않은 경우", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    const result = winningLotto.match(lotto);

    expect(result).toEqual({ matchCount: 6, bonusMatch: false });
  });

  test("로또가 번호를 하나도 맞추지 않았을 때 matchCount는 0이다", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([10, 11, 12, 13, 14, 15]);

    const result = winningLotto.match(lotto);

    expect(result).toEqual({ matchCount: 0, bonusMatch: false });
  });
});
