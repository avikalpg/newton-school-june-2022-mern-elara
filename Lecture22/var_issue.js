const fun_array = [];
for (var i = 0; i < 3; i++ ) {
    let func = () => {
        console.log(i);
    }
    fun_array.push(func);
}
console.log("value of i is " + i);
// fun_array: [ ()=> {console.log(3)} , () => { console.log(3)}, () => { console.log(3) }]
// i = 4;
for(let j = 0; j < 3; j++) {
    console.log(j);
    fun_array[j]();
}
