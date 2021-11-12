"use strict"
// Добавляем классы _pc и _touch на разных устройствах===================================================
const isMobile = {
	Android: function(){
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function(){
		return navigator.userAgent.match(/IEMobile/i);
	},
	any:function(){
		return(
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length>0) {
		for(let index = 0; index<menuArrows.length;index++){
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e){
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
}else{
	document.body.classList.add('_pc');
}
//===================================================================================================

// Burger menu Jquery==========================================================
/*
$(document).ready(function(){
	$('.icon-menu').click(function(event){
		$('.icon-menu,.menu__body').toggleClass('_active');
		$('body').toggleClass('_lock');
	});
});
*/
//=======================================================================

// Меню бургер на чистом JS =======================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
//====================================================================================

// slick slider ============================================================
$(document).ready(function(){
	$('.project__gallary').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:2,
		speed:300,
		easing:'ease',
		touchThreshold:10,
		waitForAnimate:false,
		centerMode:true,
		variableWidth:true,
		rows:2,
		responsive:[
			{
				breakpoint:767,
				settings: {
					slidesToShow:1,
					rows:1,
				}
			},
			{
				breakpoint:992,
				settings: {
					slidesToShow:2,
				}
			}
		]

	});

});
//=========================================================================


//Spoiler ============================================================
$(document).ready(function(){
	$('.footer__title').click(function(event){
		$(this).toggleClass('_show').next().slideToggle(300);
	});
});
//=========================================================================


//ibg photo ======================================================================================
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
  }
}
ibg();
//=====================================================================================================

// Прокрутка при клике ====================================================================

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length>0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
//===========================================================================================
// Tabs ==============================================================
/*
$('.tabs__item').click(function(event){
	$(this).addClass('_open').siblings().removeClass('_open')
	$(this).closest('.tabs').find('.tabs__text').removeClass('_open').eq($(this).index()).addClass('_open');
});
*/
//===============================================================