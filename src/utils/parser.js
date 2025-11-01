export const parseCommaSeperatedNumbers = (input) => {
  const split = input.split(",");
  const mapper = split.map((value) => value.trim());
  const filter = mapper.filter(Boolean);
  const numbers = filter.map((value) => Number(value));

  return numbers;
};
