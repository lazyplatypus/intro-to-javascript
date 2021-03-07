
function hello(argument) {
    return "hello " + argument;
}

function print() {
    let argument =  process.argv.slice(2);
    let message = hello(argument);
    console.log(message)
}

module.exports = { print, hello }