let calcBody = document.querySelector(".calc-body")
let calcHead = document.querySelector(".calc-head")
let mainbts = document.querySelector(".mainbtns")
let plus = document.querySelector(".plus")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")

let obj = [0,1,2,3,4,5,6,7,8,9]


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

const createBody = ()=>{
    obj.forEach((item, index)=>{
        let newbtn = document.createElement("div")
        newbtn.setAttribute("data-id", index)
        newbtn.innerText = index;
        newbtn.classList.add("icons")
        calcBody.appendChild(newbtn)
        newbtn.addEventListener("click", addNum)
    })
}

let first= [] ;
let a ;
let b; 
const addNum= (e)=>{
    calcHead.innerHtml
    let firstVal = ()=>{
        first.push ( e.target.getAttribute("data-id"));
        a = first.join();
         calcHead.innerHTML = first.join("");
         return a;
    }
    firstVal();
    plus.addEventListener("click", ()=>{
       first.length = 0;
       b = first.join();
       calcHead.innerHTML = first.join("");
       return b;
    })
     
}

createBody();
