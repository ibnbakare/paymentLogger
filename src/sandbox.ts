// // // const character = "mario";

// // // console.log(character);

// // // const inputs = document.querySelectorAll("input")

// // // inputs.forEach(item =>{
// // //     console.log(item)
// // // })

// // let man = "yy"

// // let mixed  = ["name",5]

// // mixed.push(6)


// // let nam:string;

// // nam = "rishwan"

// // let arr:any[]

// // arr = ["name",12,true]
// // console.log(arr)

// // //object

// // let objone:{
// //     add:string,
// //     title:number,
// //     isadd:boolean

// // }

// // objone = {
// //     add:"see",
// //     title:2,
// //     isadd:true

// // }

// // console.log(objone)
// // console.log("me")
// // console.log("me")

// // // functions

// // let add:Function;
// // let addOne:Function;

// // add = (a:number, b:number, c?:(number | string))=> {
// //    console.log( a + b )
// // }
// // add(2,4)

// // addOne = (a:number, b:number, c?:(number | string)): void=> {
// //     console.log( a + b )
// //  }
// //  addOne(2,4)

// //  // function signature for

// //  let minus: (a:string, b:number) => void;

// //  minus = (greeting: string, age: number) =>{
// //     console.log(`${greeting} ${age}`);
// //  }
// // minus("get", 2)

// // let cal:(see:{bame:string, ba:string}) => void

// // cal = (pass:{bame:string, ba:string}) =>{
// //     console.log(pass.bame, pass.ba);
// // }
// // cal()

// // Events
// // const typr = document.querySelector("#type") as HTMLSelectElement
// // const btn = document.querySelector("button")!
// // console.log(btn)
// // btn.addEventListener("click", (e:Event) =>{
// //     e.preventDefault()
// //     // console.log(typr.value)
// //     console.log(typr.value)
// // })

// // Interface

// interface isPerson {
//     name:string,
//     age:number,
//     isEmployed:boolean
// }
// class Person {
//     public person:isPerson
  

//     constructor(person:isPerson){
//         this.person = person 
//     }
//     exe(){
//         return(`${this.person.name} and is ${this.person.isEmployed ? "is employed" : "not employed"}`)
//     }
// }
// let rak:isPerson = {
//     name: "John",
//     age: 40,
//     isEmployed: false
// }

// let sam = new Person(rak)


// console.log(sam.exe())