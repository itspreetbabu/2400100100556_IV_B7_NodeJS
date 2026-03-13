//this is destructuring process while importing the function(s)


import { add, substract,PI} from './math.js'
//default importer
import fetchUser from './user.js'

//console is an object
//log is function to print on your console window
 console.log(`add(): ${add(10,5)}`)
 console.log(`substract(): ${substract(10,5)}`)
 //for matted string
 console.log(`The value of PI: ${PI}`)
 console.log('getUser():',fetchUser())
