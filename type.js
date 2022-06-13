const outputHeading = document.querySelector("div.content h1");
const outputParagraph = document.querySelector("div.box_1 p");



const typefaceInput = document.querySelector("div.controller select[name ='typefaces']");

typefaceInput.addEventListener("input", function(){
  outputHeading.style.fontFamily = this.value;
  outputParagraph.style.fontFamily = this.value;
  
})



//Font size
const fontsizeInput = document.querySelector("div.controller input[name ='fontsize']");
const fontsizeLabel = document.querySelector("div.controller span.fontsize-label");

fontsizeInput.addEventListener("input", function(){

  console.log(this.value);
  outputHeading.style.fontSize = this.value +"px";

  fontsizeLabel.innerHTML = `${this.value}px`;

})

//Line height
const lineheightInput = document.querySelector("div.controller input[name ='lineheight']");
const lineheightLabel = document.querySelector("div.controller span.lineheight-label");

lineheightInput.addEventListener("input", function(){

  console.log(this.value);
  outputHeading.style.lineHeight = this.value;
  lineheightLabel.innerHTML = this.value;

})



const P_typefaceInput = document.querySelector("div.main select[name ='typefaces']");

 console.log(typefaceInput);

P_typefaceInput.addEventListener("input", function(){

  outputHeading.style.fontFamily = this.value;
})



//Font size
const P_fontsizeInput = document.querySelector("div.main input[name ='fontsize']");
const P_fontsizeLabel = document.querySelector("div.main span.fontsize-label");

P_fontsizeInput.addEventListener("input", function(){

  console.log(this.value);
  outputParagraph.style.fontSize = this.value +"px";

  P_fontsizeLabel.innerHTML = `${this.value}px`;

})

//Line height
const P_lineheightInput = document.querySelector("div.main input[name ='lineheight']");
const P_lineheightLabel = document.querySelector("div.main span.lineheight-label");

P_lineheightInput.addEventListener("input", function(){

  console.log(this.value);
  outputParagraph.style.lineHeight = this.value;
  P_lineheightLabel.innerHTML = this.value;

})


const colorInputs = document.querySelectorAll("div.colors div");
const button = document.querySelector("div.content h1");
const ticket = document.querySelector("div.content .text01");


colorInputs[0].addEventListener("click", function(){
  let textColor = this.style.color;
  let backgroundColor = this.style.backgroundColor;
  button.style.color = textColor;
})




colorInputs.forEach(colorInput => {

  colorInput.addEventListener("click", function(){
    let backgroundColor = this.style.backgroundColor;
    let textColor = this.style.color;
  
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
    ticket.style.color = backgroundColor;


    
    colorInputs.forEach(colorInput =>{
      colorInput.classList.remove("selected");      
    })
    colorInput.classList.add("selected");

  })
})


