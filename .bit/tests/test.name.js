let hello = undefined

try { testfile = require('../../name.js') }
catch(e) {
    throw new Error("Hey fam, check your file name. We were unable to find your file 'name.js' ");
}

var names = ['gdragon','Daniel', 'Shreya'];
for (let i= 0; i < names.length; i++){ 
    let helloworld = testfile.hello(names[i]);
    let test_output = "hello " + names[i];
    if(helloworld != test_output){
        throw new Error(`You got: ${helloworld}, was expecting: ${test_output}.`)
    } 
}


console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")