process.stdout.write("EXERCISE 1:");
console.log();

let i, j;
//Exercise 1

let n = 5;

for(i = 1; i <= n; i++) {
    for(j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

//Exercise 2
console.log();
process.stdout.write("EXERCISE 2:");
console.log();

for(i = 0; i <= n; i++) {
    for(j = n; j > i; j--) {
        process.stdout.write("*");
    }
    console.log();
}

//Exercise 3
console.log();
process.stdout.write("EXERCISE 3:");
console.log();

let space = 0;

for(i = 1; i <= n; i++) {
    for(space = 0; space < n - i; space++) {
        process.stdout.write(" ");
    }

    for(j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

//Exercise 4
console.log();
process.stdout.write("EXERCISE 4:");
console.log();

for(i = 1; i <= n; i++) {
    for(space = 5; space > n - i; space--) {
        process.stdout.write(" ");
    }
    for(j = n; j >= i; j--) {
        process.stdout.write("*");
    }
    console.log();
}
