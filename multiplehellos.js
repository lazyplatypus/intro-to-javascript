function hello(argument0, argument1) {
    let str = "";
    for (let i = 0; i < parseInt(argument1); i++){
        str += "Hello "
    }
    str += argument0
    return str
}

function print() {
    let argument = process.argv.slice(2);
    let message = hello(argument[0],argument[1]);
    console.log(message)
}

print()

module.exports = hello