class OutputView {
  printPurchasedLotto(lottos) {
    this.#printPurchasedLottoAmount(lottos.amount);
    this.#printPurchasedLottoNumbers(lottos);
  }

  #printPurchasedLottoAmount(amount) {
    Console.print(`${amount}개를 구매했습니다.`);
  }

  #printPurchasedLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
}
