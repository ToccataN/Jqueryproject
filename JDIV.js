
	
  var main = function(){  
        var n =prompt("select a number");

      if (1<=n && n<=130)  {      
        
        var square= $(".container").width()/n -2;
       for (var i =1;i<=n-1;i++){
       	    for (var j=1;j<=n;j++){
       	    	$(".container").append("<div class='div1'></div>"); 
       	    }
 
        $(".container").append("<div class='div2'></div>");
            
      }
      $(".div1").css("width",square);
      $(".div1").css("height",square);
        

        $(".div1").hover(function(){
             $(this).fadeTo(100,1,function(){
                 $(this).css("background-color","silver");

             });


      }); 
     } 
        else {
          window.alert("You're nuts!");

        }
       
    };
$(document).ready(main);