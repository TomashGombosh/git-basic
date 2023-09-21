
const args = process.argv.slice(2);

args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
}
);

const sum = args.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

console.log(sum);