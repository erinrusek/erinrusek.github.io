const name = document.getElementById('ctime')
const {x ,y , height , width} = name.getBoundingClientRect()

document.addEventListener('mousemove' , (info)=>{
    const mouseX = info.clientX , mouseY= info.clientY ;
    const shadow = { x : x-mouseX + width/2  , y :y-mouseY + height/2 } ;
    console.log(shadow)
    const xval = Math.abs(shadow.x) , yval = Math.abs(shadow.y) ;
    name.style.textShadow = `${shadow.x}px ${shadow.y}px ${Math.max(Math.max(xval,yval)-200 , 1)}px`
})




// CREDIT TO FRIENDLYDEVELOPER --> YOUTUBE!!



