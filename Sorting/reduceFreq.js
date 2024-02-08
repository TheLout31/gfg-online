var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

const map = arr.reduce(
  (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
  new Map()
);

console.info([...map.keys()]); // to get unique elements
console.info([...map.values()]); // to get the occurrences
console.info([...map.entries()]);
