
const args = process.argv.slice(2);

args.forEach((val, index) => {
    console.log(`Item ${index}: ${val}`);
}
);

const product = args.reduce((a, b) => {
    return parseInt(a) * parseInt(b);
});

console.log(`The product is: ${product}`);