$(function() {
	var $ul = $("#resume ul")
	var n = 0
	var top = 0
	
	var time1 = setInterval(function() {
		
		n -= 100
		if(n<=-600) n=0
		
		top = n + "px"
		$ul.css("top",top)
		
	},1000)
	
//	$("#resume").mouseover(function() {
//		alert(111)
//		clearInterval(time1)
//	})
//	$("#resume").mouseout(function() {
//		clearInterval(time1)
//		alert(222)
//		
//		time1 = setInterval(function() {
//		
//		n -= 100
//		if(n<=-600) n=0
//		
//		top = n + "px"
//		$ul.css("top",top)
//		
//	},1000)
//	})
	
	
	var $left = $("#photo #box")
	var currentLfet = $left.css("left")
	//alert(currentLfet)     0px
	
	var time2 = setInterval(function() {
		currentLfet = parseInt(currentLfet) - 10 + "px"
		
		if(parseInt(currentLfet) < -2760)
		currentLfet = 0 + "px"
		
		$left.css("left",currentLfet)
		
	},50)
	
	
	$("#photo").mousemove(function() {
		clearInterval(time2)
	})
	$("#photo").mouseleave(function() {
		time2 = setInterval(function() {
		currentLfet = parseInt(currentLfet) - 10 + "px"
		
		if(parseInt(currentLfet) < -2760)
		currentLfet = 0 + "px"
		
		$left.css("left",currentLfet)
		
	},50)
	})
	
	
	$(".xintu").click(function() {
		$(".yuantu").fadeToggle(1000)
		
	})
	
	var vi = document.getElementById("vid1")
	var au = document.getElementsByTagName("audio")[0];
	
	var time1 = setInterval(function() {
		
		if(vi.paused) {
			au.play();
		}
		
		else au.pause();
		
		
	},10)
	
})
