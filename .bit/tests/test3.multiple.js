  
let hello = undefined

try { hello = require('../../multiplehellos.js') }
catch(e) {
    throw new Error("YOUR FILES DON'T EXIST MARY");
}

var testcases = [3, 5, 7]
var testnames = ['Daniel', 'Alex', 'BTS Member']
let answer = ""
for (let i = 0; i < testcases.length; i++){
        for (let j = 0; j < parseInt(testcases[i]); j++){
            answer += "Hello "
        }
        answer += testnames[i]
        let test_output = hello(testnames[i], testcases[i])    
        if(answer != test_output){
            throw new Error(`Karen, you done fucked up ~ Got: ${test_output}, was expecting: ${answer}.`)
        }

        answer = ""

}


console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")
