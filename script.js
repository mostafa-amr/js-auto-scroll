var child
var x= 50
var y 
var z =0
var interval
function newchid(){
    y=0;
child=window.open('tsts.html','','width=700,height =300');
// child.document.body.style.backgroundColor ='red' ;
// child.focus()
startInterval()

}



function startInterval(){
    interval = setInterval(function(){
        y+=x;
           scrolld(); 
    },250)    
            

    
    }
    function scrolld(){
        z=((child.document.body.scrollHeight-child.window.innerHeight)+60)
        // console.log(z)
        if(y>=z){
            
                clearInterval(interval);
                child.close()
            }
            else {
             child.scrollBy(0,x)
             console.log(y)
            }
    }
    function closee(){
        clearInterval(interval);
            child.close()
    }