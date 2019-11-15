let stairs = prompt ("How many stairs do you want ?");
let space = " ";
let block = "#";
let stage = "";
for (let i = 1 ;i <= stairs; i++) {
    stage = space.repeat(stairs-i) + block.repeat(i);
    console.log(stage + "\n")
}