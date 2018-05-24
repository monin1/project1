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

/* button1*/
$(document).ready(function() {
  $(".toggle1").click(function() {
    var elem = $(".toggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $(".toggle1").text("Read Less");
      $(".text1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".toggle1").text("Read More");
      $(".text1").slideUp();
    }
  });
});
	/* backtotop */
	// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
} //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top



//  Validating the contact us form  

function validateForm() {  

    var x = document.forms["inputForm"]["email"].value; 
	var y = document.forms["inputForm"]["name"].value; 
	var z = document.forms["inputForm"]["lname"].value;
	
    var n = x.indexOf("@"); 
    var m = x.lastIndexOf(".");
	
	
	if(y =="" && x == "" && z == ""){ 
		alert("Please fill out all the field");
		$("#name").focus();
		$("#name").css({"background-color": "white"});
		return false;
	}
	else if(y ==""){ 
		alert("The name field cannot be left blanc. Please provide a name");
		$("#name").focus();
		return false;
	}
	else if(z ==""){
		alert("Please select Last name");
		$("#lname").focus();
		return false;
	}
	else if(x ==""){ 
		alert("Please type a Email address in the email field");
		$("#email").focus();
	
		return false;
	}
	else if(n<1 || m<n+2 || m+2>= x.length){
		alert("Not a valid email address. plesae type valid email address");
		$("#email").focus();
		return false;
	}
	else if (document.getElementById('feedback').value == ''){
		alert("Can you please leave us a message in the textarea");
		document.getElementById('feedback').focus();
		return false;
	}
	
	else{
		alert("Your feedback has been submited. We may contact you soon for more information. Thank you !!! ");
		$("#name,#email,#lname").css({"background-color": "white"});
		return true;
	} 
}



function validateForm2() {
		
            var isAllValid = true;
            $('.errorgName').hide();
            $('#gName').empty();
            $('.container').removeClass('has-errorgName');
			
			if ($('#gName').val().trim() == "") {
                $('#gName').focus();
                $('#gName').siblings('.errorgName').show();
                $('#gName').parents('.container').addClass('has-errorgName');
                isAllValid = false;
            }
			else if ($('#gName').val().trim().length <= 1) {
                $('#gName').focus();
                $('#gName').siblings('.errorgName2').show();
                $('#gName').parents('.container').addClass('has-errorgName2');
                isAllValid = false;
            }
			
			if ($('#userPass').val().trim() == "") {
                $('#userPass').focus();
                $('#userPass').siblings('.erroropassword').show();
                $('#userPass').parents('.container').addClass('has-erroropassword');
                isAllValid = false;
            }
			else if ($('#userPass').val().trim().length <= 7) {
                $('#userPass').focus();
                $('#userPass').siblings('.erroropassword3').show();
                $('#userPass').parents('.container').addClass('has-erroropassword3');
                isAllValid = false;
            }
			 
            return isAllValid;
 }
 
 
 
 $(document).ready(function(){	
$("#gName").focusout(function(){
  if($(this).val() === ""){
    $(".errorgName").show();
  }else{
    $(".errorgName").hide();
  }
});

$("#gName").focusin(function(){
  $(".errorgName").hide();
});
});

// Error for event title size

$(document).ready(function(){	
$("#eventTitle").focusout(function(){
  if($(this).val() === ""){
    $(".errortitle2").hide();
  }else{
    $(".errortitle2").hide();
  }
});

$("#eventTitle").focusin(function(){
  $(".errortitle2").hide();
});
});


 // error for password

$(document).ready(function(){	
$("#userPass").focusout(function(){
  if($(this).val() === ""){
    $(".erroropassword").show();
  }else{
    $(".erroropassword").hide();
  }
});

$("#userPass").focusin(function(){
  $(".erroropassword").hide();
});
});

// error for passord length check

$(document).ready(function(){	
$("#userPass").focusout(function(){
  if($(this).val() === ""){
    $(".erroropassword3").hide();
  }else{
    $(".erroropassword3").hide();
  }
});

$("#userPass").focusin(function(){
  $(".erroropassword3").hide();
});
});
