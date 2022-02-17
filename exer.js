function run() {
    let a = document.getElementById("input_word").value;

    let sorted = (a) => (a)
    .split("").sort().join("");
    console.log(sorted(a))

    document.getElementById("output").innerHTML = sorted(a);
}

// function run() {
//     let x = document.getElementById("input_word").value;

//     let sort = (x) => String(x)
//     .split("").sort().join("");

//     document.getElementById("output").innerHTML = sort(x);
// }