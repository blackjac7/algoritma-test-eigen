const countOccurrences = (input, query) => {
    return query.map((item) => input.filter((value) => value === item).length);
};

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countOccurrences(INPUT, QUERY)); // [1, 0, 2]
