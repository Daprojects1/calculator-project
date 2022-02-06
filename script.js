let calcBody = document.querySelector(".calc-body")
let calcHead = document.querySelector(".calc-head")
let mainbts = document.querySelector(".mainbtns")
let plus = document.querySelector("#add")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")
let numbers = document.querySelector(".otherBody")



class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    multiply(){
        return this.a*this.b
    }
    divide(){
        return this.a/this.b;
      }
      add(){
        return this.a+this.b 
      }
      subtract(){
        return this.a-this.b;
     }
}

let m = [];
let c = [];
let a = "";
let b = [];
let counter = 0;
const showFirstVal = (e)=>{
  let mainVal = ()=>{
      c.push(e.target.getAttribute("data-id"))
      calcHead.innerHTML= c.join("");
      a = c.join("")
  }
 mainVal();
}


let secondVal =(e)=>{
  calcHead.innerHTML=""
  c.length =0;
   b.shift()
  b.push(a)
}

 plus.addEventListener("click", (e)=>{
   secondVal(e);
   
 })

// const equalEd = ()=>{

// }

const numbs = ()=>{
for (let i =0; i < numbers.children.length; i++){
    numbers.children[i].setAttribute("data-id", i)
     numbers.children[i].addEventListener("click", showFirstVal)
}
}

numbs();


// const createBody = ()=>{
//     obj.forEach((item, index)=>{
//         let newbtn = document.createElement("div")
//     
//         newbtn.innerText = index;
//         newbtn.classList.add("icons")
//         calcBody.appendChild(newbtn)
//         newbtn.addEventListener("click", addNum)
//     })
// }


// let first= [];
// let a ;
// let b; 
// let counter = 1;

// const addNum= (e)=>{
//     let firstVal = ()=>{
//         if (counter > 0 && counter % 2 !== 0){
//             first.push ( e.target.getAttribute("data-id"));
//             a = first.join("");
//              calcHead.innerHTML = a;
//             return a;
//         } 
//         }
//         if (counter > 0 && counter % 2 === 0){
//             first.push(e.target.getAttribute("data-id"))
//             b = first.join("");
//             calcHead.innerHTML = b;
//             return b;
//         }       
//     firstVal();     
// }


// let equal = (a,b)=>{
//     console.log(g)
//     equals.addEventListener("click",()=>{
//      let m = new Calculator(Numa,Numb)
//      calcHead.innerHTML =m.add();
//     })
    
// }
// let c =   ()=>{
//     plus.addEventListener("click", ()=>{
//         first.length = 0;
//         counter++
//      })
// }

// c();
// equal();
// createBody();
