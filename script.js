let calcHead = document.querySelector(".calc-head")
let plus = document.querySelector("#add")
let equals = document.querySelector(".equals")
let clear = document.querySelector(".clear")
let numbers = document.querySelector(".otherBody")
let divide = document.querySelector("#divide")
let multiply = document.querySelector("#multiply")
let subtract = document.querySelector("#subtract")

class Calculator {
    constructor(){
        this.a = "";
        this.b = "";
        this.counter=0;
        this.total=0;
        this.ev;
        this.functionBtns = [multiply, divide, subtract, plus];
    };
    loop=()=>{
      for (let i =0; i < numbers.children.length; i++){
        numbers.children[i].setAttribute("data-id", i)
         numbers.children[i].addEventListener("click", this.getVals);
          }
          this.btnsFunc();
          clear.addEventListener("click", this.clear)
    };
    btnsFunc=()=>{
      this.functionBtns.map((item)=>{
          return item.addEventListener("click", this.reset)
      })
    };
    getVals =(e)=>{
      if(this.counter === 0){
         this.grabA(e);
       }else if (this.counter === 1){
       this.grabB(e);
       }
    };
    // val 1
    grabA=(e)=>{
      this.a+=e.target.getAttribute("data-id")
      calcHead.innerHTML= this.a;
    }
    // val 2
    grabB=(e)=>{
      this.b+=e.target.getAttribute("data-id")
      calcHead.innerHTML= this.b;
      this.check()
    }
    // counter to show which value to get, val 1 or val 2 && also this event is from the btnsFunc && initializes this.ev. 
    reset=(e)=>{
      this.ev = e.target.getAttribute("id");
      calcHead.innerHTML="";
      this.counter = 1;
    }
    subtract=()=>{
      this.total = Number(this.a)-Number(this.b)
   }
    multiply=()=>{
      this.total = Number(this.a)*Number(this.b);
    }
    divide=()=>{
      this.total = Number(this.a)/Number(this.b);
      }
    add=()=>{
      this.total = Number(this.a)+Number(this.b);
    }
      check=()=>{
        equals.addEventListener("click", this.equals)
      }
      equals=()=>{
        if (this.ev === "add"){
          this.add();
        } else if ( this.ev === "divide"){
          this.divide();
        } else if (this.ev === "multiply"){
          this.multiply();
        } else if (this.ev === "subtract"){
          this.subtract();
        }
        calcHead.innerHTML= this.total;
        this.a = this.total;
        this.b = "";
      }
     clear=()=>{
          calcHead.innerHTML= "";
          this.counter=0;
          this.total=0;
          this.a="";
          this.b="";
     }
}

let calc = new Calculator()
calc.loop();

