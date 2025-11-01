import RankFactory from "../src/factory/RankFactory.js";

describe("RankFactory를 활용한 Rank 객체 생성을 통해 규칙이 잘 적용되는지 확인", () => {
  test("6개 일치 시 1등 Rank 객체를 반환한다.", () => {
    const rank = RankFactory.createRank(6, false);
    expect(rank.name).toBe("FIRST");
    expect(rank.prize).toBe(2000000000);
  });

  test("5개 + 보너스 일치 시 2등 Rank 객체를 반환한다.", () => {
    const rank = RankFactory.createRank(5, true);
    expect(rank.name).toBe("SECOND");
    expect(rank.prize).toBe(30000000);
  });

  test("일치하는 둥수가 없으면 MISS Rank를 반환한다.", () => {
    const rank = RankFactory.createRank(2, false);
    expect(rank.name).toBe("MISS");
    expect(rank.isMiss()).toBe(true);
  });
});
