import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복된 숫자가 발생할 수 없습니다.");
  });

  test("로또 번호가 6개 이면서 중복된 숫자가 없다면 정상적으로 lotto 인스턴스가 생성된다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).toBeInstanceOf(Lotto);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("getNumbers()는 새로운 배열을 반환하고, 외부 변경이 내부에 영향을 주지 않는다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbers = lotto.getNumbers();
    numbers[0] = 99;
    expect(lotto.getNumbers()[0]).toBe(1);
  });

  test("당첨 번호와 일치하는 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [3, 4, 5, 8, 9, 10];
    expect(lotto.matchCount(winningNumbers).toBe(3));
  });

  test("특정 번호가 포함되어 있으면 true를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.contatins(3).toBe(true));
  });

  test("특정 번호가 포함되어 있지 않으면 false를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.contatins(8).toBe(false));
  });
});
