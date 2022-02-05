let calcBody = document.querySelector(".calc-body")
let calcHead = document.querySelector(".calc-head")
let mainbts = document.querySelector(".mainbtns")
let plus = document.querySelector(".plus")
let obj = [0,1,2,3,4,5,6,7,8,9]
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")
let maths = [
    { 
      mulitiply(a,b){
          return a*b
      },
      divide(a,b){
        return a/b;
      },
      add(a,b){
        return a+b 
      },
      subtract(a,b){
         return a-b
      }
    }
] 
const createBody = ()=>{
    obj.forEach((item, index)=>{
        let newbtn = document.createElement("div")
        newbtn.setAttribute("data-id", index)
        newbtn.innerText = index;
        newbtn.classList.add("icons")
        calcBody.appendChild(newbtn)
        newbtn.addEventListener("click", firstVal)
    })
}


let a = "";
let b = ""; 


let secondVal = (a)=>{
    let clear = ()=>{
        calcHead.innerText= "";
    }
   plus.addEventListener("click", clear )
   console.log(calcHead.innerText)
}

let firstVal = (e)=>{
        a += e.target.getAttribute("data-id");
        calcHead.innerText = Number(a);
       secondVal(a)
 }

createBody();
