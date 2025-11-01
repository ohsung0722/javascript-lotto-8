export const INPUT_MESSAGE = {
  PAYMENT_AMOUNT: "구입 금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const ERROR_PREFIX = (message) => `[ERROR] ${message}`;

export const ERROR_MESSAGE = {
  INVALID_PURCHASE_UNIT: "구입 금액은 1,000원 단위여야 합니다.",
  INVALID_PURCHASE_MIN: "구입 금액은 1,000원 이상이어야 합니다.",
  INVALID_LOTTO_NUMBER: "로또 번호는 1부터 45 사이의 정수여야 합니다.",
  INVALID_LOTTO_SIZE: "로또 번호는 6개여야 합니다.",
  DUPLICATED_NUMBER: "로또 번호는 중복될 수 없습니다.",
  DUPLICATED_LOTTO_AND_BONUS_NUMBER:
    "로또 번호와 보너스 번호는 중복될 수 없습니다.",
};

export const OUTPUT_MESSAGES = {
  //로또 구매 관련
  PURCHASED_LOTTO_AMOUNT: (amount) => `${amount}개를 구매했습니다.`,
  PURCHASED_LOTTO_NUMBERS: (numbers) => `[${numbers.join(", ")}]`,

  //통계 타이틀
  STAT_TITLE: "당첨 통계",
  SEPARATOR: "---",

  //수익률 출력
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};
