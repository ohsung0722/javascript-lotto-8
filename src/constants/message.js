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
};
