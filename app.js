function _(selector) {
    return document.querySelector(selector)
}

function setup(){


  let App=_('.app')
  let width=App.clientWidth
 let canvas = createCanvas(width, 590);
 canvas.parent("canvas-wrapper");
 background(255);  

  }
  function mouseDragged(){
      let type = _("#pen-pencil").checked ?"pencil":"brush";
      let size =Number(_("#size").value)
      let colors = _("#color").value;
      console.log(colors)
      fill(colors)
      stroke(colors)
      strokeWeight(size)
      if(type == "brush")
        ellipse(mouseX, mouseY, size, size);
      else
        line(pmouseX, pmouseY, mouseX, mouseY);
       
  }
  _(".delete").addEventListener("click",function(){
      background(255)
  })
  _(".save").addEventListener("click",function(){
    saveCanvas(canvas,"myPic","png")
})

 handleResize=()=>{
   let App=_('.app')
   let width=App.clientWidth
  let canvas = createCanvas(width, 590);
  canvas.parent("canvas-wrapper");
  background(255);
 }
 _(".setting-wrap").addEventListener("click", function(){
        _(".option_wrap").classList.toggle('active')
 })