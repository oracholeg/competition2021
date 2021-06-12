$(document).ready(function() {

	$('#pod1-1-img').click(function(event) {
		$('.pod1-1-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod1-1-info, .body').removeClass('active');
	});



	$('#pod1-2-img').click(function(event) {
		$('.pod1-2-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod1-2-info, .body').removeClass('active');
	});



	$('#pod1-3-img').click(function(event) {
		$('.pod1-3-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod1-3-info, .body').removeClass('active');
	});




	$('#pod2-1-img').click(function(event) {
		$('.pod2-1-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod2-1-info, .body').removeClass('active');
	});




	$('#pod2-2-img').click(function(event) {
		$('.pod2-2-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod2-2-info, .body').removeClass('active');
	});




	$('#pod2-3-img').click(function(event) {
		$('.pod2-3-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod2-3-info, .body').removeClass('active');
	});



	$('#pod3-1-img').click(function(event) {
		$('.pod3-1-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod3-1-info, .body').removeClass('active');
	});




	$('#pod3-2-img').click(function(event) {
		$('.pod3-2-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod3-2-info, .body').removeClass('active');
	});



	$('#pod3-3-img').click(function(event) {
		$('.pod3-3-info, .body').addClass('active');
	});

	$('.fas.fa-times').click(function() {
		$('.pod3-3-info, .body').removeClass('active');
	});





	// Якорь

	const anchors = document.querySelectorAll('a[href^="#"]')
	const headerHeight = document.querySelector('#header').clientHeight

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



	window.addEventListener('load', event => {
    let box = document.querySelector('.banner')
    // ratio - процент видимости элемента
    let prevRatio = 0.2

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            let curRatio = entry.intersectionRatio
            
            // при прокрутке цвет меняется от светло-синего до светло-красного
            // мы хотим наблюдать эффект при прокрутке страницы в обе стороны (вниз и вверх)
           // поэтому наблюдение за элементом не прекращается
            curRatio > prevRatio ? entry.target.style.background = `rgba(255, 120, 0,${curRatio})` : entry.target.style.background = `rgba(190,40,40,${curRatio})`

            prevRatio = curRatio
        })
    }, {
        threshold: buildThresholdList()
    })

    observer.observe(box)
    
    // функция построения шкалы пересечения
    // шкала представляет собой массив из 20 элементов, определяющих цвет контейнера
    function buildThresholdList() {
        let thresholds = []
        let steps = 40

        for (let i = 1.0; i <= steps; i++) {
            let ratio = i / steps
            thresholds.push(ratio)
        }
        return thresholds
    }
})




//   $(document).ready(function() {
//   $(window).on('scroll', () => {
//      var blockPosition = $('.banner').offset().top,
//          windowScrollPosition = $(window).scrollTop();
    
//     if( blockPosition <= windowScrollPosition ) {
//       $('.banner').addClass('active');
//     } else {
//       $('.banner').removeClass('active');
//     }
//   });
// });
	


});