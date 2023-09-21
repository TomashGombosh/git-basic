
const arguments = process.argv.slice(2);

arguments.forEach((val, index) => {
    console.log(`${index}: ${val}`);
}
);

const sum = arguments.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

console.log(sum);