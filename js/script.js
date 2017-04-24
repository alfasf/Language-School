$(document).ready(function(){
	$(window).scroll(function(){
		var scrolltop = $(this).scrollTop();
           if(scrolltop >=20){
                $('#preheader,#LogoSchool').css('display','none');
           }
           else{
                $('#preheader,#LogoSchool').css('display','block');
           }

	});          
});
	
          