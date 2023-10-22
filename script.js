Shery.imageEffect("#back",{style:5,config:{
    onMouse:{value:1}//when mouse is on the page
    ,masker:{value:true},//this will makes animation run
    infiniteGooey:{value:true}//infinite goeey makes pics vibrate when cursor are on it  
} ,gooey:true})
var elems=document.querySelectorAll(".elem")
elems.forEach(function(elem) {
var h1s=elem.querySelectorAll("h1")
var index=0 

//now for stop clicking during animating
var animating=false

document.querySelector("#main").addEventListener("click",function () {
    if (!animating) {
        animating=true

        gsap.to(h1s[index],{
            top:"-=100%",
            ease:Expo.easeInOut,
            duration:1,
            onComplete:function() {
            gsap.set(this._targets[0],{top:"100%"})
            animating=false
            },
           
            //this._targets[0] is used to get first h1 that goes top
                })
               index===h1s.length-1?(index=0) :index++
               //this code is to all done thier part go to top
                gsap.to(h1s[index],{
                    top:"-=100%",
                    ease:Expo.easeInOut,
                    duration:1
                        })
    }
})
    
})