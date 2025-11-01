import { Random } from "@woowacourse/mission-utils";

export function generateSortedRandomNubmers(minNumber, maxNumber, size) {
  const numbers = Random.pickUniqueNumbersInRange(minNumber, maxNumber, size);
  const sorted = numbers.sort((a, b) => a - b);

  return sorted;
}
