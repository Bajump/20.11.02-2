$(document).ready(function(){
	var button_status = 1;
	$(".my-button").on("click",function(){
		if(button_status == 0) {
			$(".black").css("opacity", "1")
			button_status = 1;
		} else if
			(button_status == 1) {
			$(".black").css("opacity", "0")
			button_status = 0;
		}
	})

	$(".my-button").on("click",function(){
		$(".sound")[0].play();
	})
	$(".pause").on("click",function(){
		$(".sound")[0].pause();
	})
})