let calcBody = document.querySelector(".calc-body")
let calcHead = document.querySelector(".calc-head")
let mainbts = document.querySelector(".mainbtns")
let plus = document.querySelector("#add")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")
let numbers = document.querySelector(".otherBody")
let divide = document.querySelector("#divide")
let multiply = document.querySelector("#multiply")

class Calculator {
    constructor(){
        this.a = "";
        this.b = "";
        this.counter=0;
        this.total=0;
    }
    loop=()=>{
      for (let i =0; i < numbers.children.length; i++){
        numbers.children[i].setAttribute("data-id", i)
         numbers.children[i].addEventListener("click", this.showVal);
          }
          this.add();
          this.divide();
          this.multiply();
          this.clear();
    }
    showVal =(e)=>{
      // value 1
      if( this.counter === 0){
        this.a+=e.target.getAttribute("data-id")
        calcHead.innerHTML= this.a;
       } 
      //  value 2
       else if ( this.counter === 1){
        this.b+=e.target.getAttribute("data-id")
        calcHead.innerHTML= this.b;
       }
    }
    reset=()=>{
        calcHead.innerHTML="";
         this.counter = 1;
    }
    multiply(){
        
    }
    divide(){
      let mainEv = ()=>{
        this.reset();
        let func = ()=>{
         calcHead.innerHTML="";
         this.total = Number(this.a)/Number(this.b);
         calcHead.innerHTML= this.total;
         console.log(this.total)
         console.log(this.a)
         console.log(this.b)
         this.a = this.total.toString();
         this.b = "";
         calcHead.innerHTML = this.a;
         divide.removeEventListener("click", mainEv)
        }
        equals.addEventListener("click", func)
      }
       divide.addEventListener("click", mainEv)
       
      }
      add=()=>{
        let mainEv = ()=>{
          this.reset();
          let func = ()=>{
           calcHead.innerHTML="";
           this.total = Number(this.a)+Number(this.b);
           calcHead.innerHTML= this.total;
           this.a = this.total.toString();
           this.b = "";
           calcHead.innerHTML = this.a;
           plus.removeEventListener("click", mainEv)
          }
          equals.addEventListener("click", func)
        }
         plus.addEventListener("click", mainEv)
         
         
      }
      subtract(){
        return this.a-this.b;
     }
     clear(){
        clear.addEventListener("click", ()=>{
          calcHead.innerHTML= "";
          this.counter=0;
          this.total=0;
          this.a="";
          this.b="";
        })
     }
}




let c = new Calculator()
c.loop();

