/* basic of object in Object in Js
 There are many ways in which objects in JavaScript differ from objects in other mainstream programming languages, like Java. 

 1) Creating objects using object literal syntax :
                    
      Tis is really simple and most popular way to crate a object in js
      like this const person = {
                               firstName: 'testFirstName',
                               lastName: 'testLastName'
                            };
        
        NOTE => BHIND THE SCREEN THE KEYS OF AN OBJECT IS STORE AS STRING FORMAT                     


      the most gernal things of object is that the object store the value in key value pairs simple..
*/
    // we can also used symbol as keys in object like this : 

     const mySym = Symbol("key_1")

 
    const user = {

        [mySym]: "key_1", // In js syntax we can can use Symbol as a key in object inside the square bracket. and also accses as user[mySym] 

        name : "ankit",
        age : 18,
        location : "Lucknow",
        email : "ak@gmail.com",
        "other_mail": "ak@google.com" // We can also give the key name as string because we know that in background the keys are store as String format.
         // we can't accses the other_mail by . opration  like user.other_mail (  give the error ......)
         // we can accses the "other_mail" key by user["other-mail"] there is no another ways to accses the other_mail key in user object
    
        
        
        }      
     
    // console.log(user.name);

    // console.log(user["other_mail"]);
    // console.log(user[mySym]);    // to accses the symbol as a key

// We can also lock the value of object by using freeze() 

// Object.freeze(user.name)  // or Object.freeze(ObjectName)


// We can also use the function inside the object like this :

user.states = function(){

    console.log(`Hello JS user, ${this.name}`);

}

// console.log(user.states); // it return the reference of function.
console.log(user.states());

/* 2) Creating object using the 'new' keyword :
                                             this method of object creation resembles the way objects are in class-based languages, like java 
                                             So, that create an object using the 'new keyword, you need to have a constractor function.'

    There are 2 ways to use 'new' keyword

    a) Using the 'new' keyword with in-build object constructor, like this
 */
       const person = new Object()
    
    // After the creation of object we can add the properties to this object

       person.firstName = 'FirstName';
       person.lastName = 'LastName';

       console.log(person.firstName, person.lastName);