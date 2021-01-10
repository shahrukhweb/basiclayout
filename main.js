// hamburger

const bars=document.querySelector('.bars');
const cross=document.querySelector('.cross');
const menu=document.querySelector('.menu');


bars.addEventListener('click',function(){
   menu.classList.add('active')
})
cross.addEventListener('click',function(){
	menu.classList.remove('active')
})



// navbar when scroll

$(document).ready(function(){
	$(window).scroll(function(){
		if(scrollY>20){
			$(".navbar").addClass('sticky')
		}else{
			$(".navbar").removeClass('sticky')
		}
		if(scrollY>500){
			$(".scroll-up-btn").addClass("show")
		}else{
			$(".scroll-up-btn").removeClass("show")
		}
	})

	$(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop:0})
	})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        650:{
            items:2
        },
        768:{
        	items:3
        },
        1000:{
            items:4
        }
    }
})

})