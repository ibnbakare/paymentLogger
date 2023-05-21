import { ListTemplate } from './classess/ListTemplate.js';
import { Invoice } from './classess/invoice.js';
import { Payment } from './classess/payment.js';
let docOne;
let docTwo;
let combined = [];
docOne = new Invoice("sade", "paid", 300);
docTwo = new Payment("bakare", "seen", 900);
combined.push(docOne, docTwo);
console.log(combined);
//class
const invOne = new Invoice("mario", "go to market", 100);
const invTwo = new Invoice("ridhwan", "go to market", 300);
const arr = [];
// arr.push(invOne)
// arr.push(invTwo)
console.log(invOne);
console.log(arr);
arr.map(item => { console.log(item.amount, item.client); });
class Person {
    constructor(person) {
        this.person = person;
    }
    exe() {
        return (`${this.person.name} and is ${this.person.isEmployed ? "is employed" : "not employed"}`);
    }
}
let rak = {
    name: "John",
    age: 40,
    isEmployed: false
};
const type = document.querySelector("#type");
const details = document.querySelector("#details");
const toFrom = document.querySelector("#toFrom");
const amount = document.querySelector("#amount");
const addUl = document.querySelector(".item-list");
const btn = document.querySelector(".new-item-form");
const seen = document.createElement("p");
let sam = new Person(rak);
btn.addEventListener("submit", (e) => {
    e.preventDefault();
    let fillers;
    const final = new ListTemplate(addUl);
    // seen.innerText = "SEEN"
    // const seee = document.createElement("li")
    // seee.innerText = details.value
    // type.value === "payment" ? addUl.appendChild(seee):addUl.prepend(seee)
    // addUl.append(seen)
    if (type.value === "payment") {
        fillers = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        fillers = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(fillers);
    final.render(fillers, type.value, "end");
});
// const typr = document.querySelector("#type") as HTMLSelectElement
// //  const btn = document.querySelector("button")!
//  console.log(btn)
//  btn.addEventListener("click", (e:Event) => { 
// e.preventDefault()
//   let fillers:hasFormatter;
//   if(type.value === "payment"){
//     fillers = new Payment(toFrom.value,details.value,amount.valueAsNumber)
//     console.log(fillers)
//      console.log(toFrom.value)
//  })
