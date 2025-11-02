import LottoResult from "../../src/model/LottoResult.js";
import RankFactory from "../../src/factory/RankFactory.js";

describe("LottoResult 도메인 테스트 (RankFactory 활용)", () => {
  let lottoResult;

  beforeEach(() => {
    lottoResult = new LottoResult();
  });

  test("초기 상태에서 모든 Rank 개수는 0이다.", () => {
    expect(lottoResult.getCountOf(RankFactory.createRank(6, false))).toBe(0);
    expect(lottoResult.getCountOf(RankFactory.createRank(3, false))).toBe(0);
  });

  test("MISS Rank는 add()시 카운트 되지 않는다.", () => {
    const missRank = RankFactory.createRank(1, false);
    lottoResult.add(missRank);

    //전체 Rank 검증
    const ranks = [
      RankFactory.createRank(6, false),
      RankFactory.createRank(5, true),
      RankFactory.createRank(5, false),
      RankFactory.createRank(4, false),
      RankFactory.createRank(3, false),
    ];

    ranks.forEach((rank) => {
      expect(lottoResult.getCountOf(rank)).toBe(0);
    });
  });

  test("add()를 여러번 호출하면 해당 Rank의 카운트가 누적된다.", () => {
    const fifth = RankFactory.createRank(3, false);
    const fourth = RankFactory.createRank(4, false);

    lottoResult.add(fifth);
    lottoResult.add(fifth);
    lottoResult.add(fourth);

    expect(lottoResult.getCountOf(fifth)).toBe(2);
    expect(lottoResult.getCountOf(fourth)).toBe(1);
  });

  test("getTotalPrize()는 Rank별 상금 x 개수의 총합을 반환한다.", () => {
    const fifth = RankFactory.createRank(3, false); // 5,000원
    const fourth = RankFactory.createRank(4, false); // 50,000원

    lottoResult.add(fifth);
    lottoResult.add(fifth);
    lottoResult.add(fourth);

    expect(lottoResult.getTotalPrize()).toBe(60000);
  });

  test("caculateProfitRate()는 (총 상금 / 구매 금액) * 100을 계산한다.", () => {
    const fifth = RankFactory.createRank(3, false); // 5,000원
    const fourth = RankFactory.createRank(4, false); // 50,000원

    lottoResult.add(fifth);
    lottoResult.add(fourth);

    const purchaseAmount = 100000;
    const expectedRate = ((fifth.prize + fourth.prize) / purchaseAmount) * 100;

    expect(lottoResult.calculateProfitRate(purchaseAmount)).toBeCloseTo(
      expectedRate,
      1
    );
  });
});
