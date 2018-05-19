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


$(document).ready(function() {
  $(".toggle").click(function() {
    var elem = $(".toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle").text("Read Less");
      $(".text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle").text("Read More");
      $(".text").slideUp();
    }
  });
});

