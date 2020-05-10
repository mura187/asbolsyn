export const eraseFromObject = <T extends {}>(target: T | any, ...erase: string[]): T =>
  Object.assign({}, ...Object.keys(target)
    .filter((n: string) => !erase.includes(n))
    .map((n: string) => ({ [n]: target[n] })));
