document.addEventListener('DOMContentLoaded', function () {

    //This grabs the forwars button and waits for it to be clicked
    var forward = document.getElementById('forward');
    forward.onclick = function () {
        sideScroll(document.getElementById('scrollable'),'right',10,323,17);
    };
  
    //This grabs the forwars button and waits for it to be clicked
    var back = document.getElementById('back');
    back.onclick = function () {
        sideScroll(document.getElementById('scrollable'),'left',10,323,17);
    };
  
    //This function moves the container by the distance (270px)
    function sideScroll(element,direction,speed,distance,step){
     scrollAmount = 0;
  
     //This function also moves the container by calling same function over and over again
     //It works by calling the function every speed increment (10ms)
     var slideTimer = setInterval(function(){
          //These scroll the container by the step value (10px) and choose the direction(left or right)
          if(direction == 'left'){
            element.scrollLeft -= step;
         } else {
             element.scrollLeft += step;
         }
  
         //This keeps track of how many px have been moved
          scrollAmount += step;
  
          //This stops setInterval after the number of px moved 
          //matches the distance that needed to be scrolled
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
    }
  
  });