function drawCircle(container,id,progress,parent){
  var paper = Snap(container);
  var prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
  var lineL = prog.getTotalLength();
  var oneUnit = lineL/100;
  var myID = 'circle-graph-'+id;
  
  
  function countCircle(parent,start,progress){
    var textContainer = $(parent).find('.circle-percentage');
    var time = 1300;
    //var intervalTime = Math.abs(time / progress);
    
    var i = start;
    var old = i;
    var timerID = setInterval(function () {
	      i = Math.floor((Math.random()*100)+1)
	      textContainer.text(i+"%");
	      var toOffset = lineL - oneUnit * i;
			  prog.attr({
			    'stroke-dashoffset':lineL,
			    'stroke-dasharray':lineL,
			    'id':myID
			  });
			  
			  var animTime = 1300/*i / 100*/
			  
			  if(i>old){
			  	prog.attr({ "stroke-dashoffset": lineL - oneUnit*old });
			  	prog.animate({
				    'stroke-dashoffset':toOffset
				  },animTime,mina.easein);
				  console.log("INC");
			  }else{
			  	prog.attr({ "stroke-dashoffset": lineL - oneUnit*old });
			  	prog.animate({
				    'stroke-dashoffset':toOffset
				  },animTime,mina.easein);
				  console.log("DEC");
			  }
				old = i;   
    	}, 2000);
    }         
  }
  countCircle(parent,0,progress);
}
