var menu = false;
$(".fa-list.modify").click(function(){
	if(menu == false){
		$(".nav").fadeIn();
		menu = true;
	}else{
		$(".nav").fadeOut();
		menu = false;
	}
})

$(document).ready(function () {
    $("li").click(function () {
        $('li > ul').not($(this).children("ul").slideToggle()).hide();
    });
});
