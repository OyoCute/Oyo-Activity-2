function run() {
    let a = document.getElementById("input_word").value;

    let sorted = (a) => (a)
    .split("").sort().join("");
    console.log(sorted(a))

    document.getElementById("output").innerHTML = sorted(a);
}
