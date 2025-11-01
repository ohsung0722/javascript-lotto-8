export const RANK_CONFIG = {
  RANKS: [
    {
      name: "FIRST",
      matchCount: 6,
      bonus: false,
      prize: 2000000000,
      label: "6개 일치",
    },
    {
      name: "SECOND",
      matchCount: 5,
      bonus: true,
      prize: 30000000,
      label: "5개 일치, 보너스 볼 일치",
    },
    {
      name: "THIRD",
      matchCount: 5,
      bonus: false,
      prize: 1500000,
      label: "5개 일치",
    },
    {
      name: "FOURTH",
      matchCount: 4,
      bonus: false,
      prize: 50000,
      label: "4개 일치",
    },
    {
      name: "FIFTH",
      matchCount: 3,
      bonus: false,
      prize: 5000,
      label: "3개 일치",
    },
  ],
  MISS: { name: "MISS", matchCount: 0, bonus: false, prize: 0, label: "" },
};
