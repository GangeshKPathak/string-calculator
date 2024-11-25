export function add(numbers: string): number {
  if (!numbers) return 0;

  const delimiters = [",", "\n"];
  let customDelimiter: string | undefined;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    customDelimiter = parts[0].slice(2);
    numbers = parts.slice(1).join("\n");
  }

  const regex = new RegExp(`[${delimiters.join("")}${customDelimiter || ""}]`);
  const nums = numbers.split(regex).map(Number);

  const negatives = nums.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}
