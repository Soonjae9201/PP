$(document).ready(function(){
    // alert('ddd')
    // 팝업 부분
    $('.close').click(function(){
        $('.popup_video').hide();
        $('.small-box').fadeIn(1500);
    })
    $('.open').click(function(){
        $('.popup_video').show();
    })

    $('.clip img').mouseenter(function(){
        $(this).attr('src',$(this).data('video'))
        $('.clip, img').width('500').height('400')
    })
    $('.clip img').mouseleave(function(){
        $(this).attr('src',$(this).data('image'))
        $('.clip, img').width('50').height('40')
    })
    $('.clip img').click(function(){
        $('.popup_video').show();
    })

    $('.pro-popup.html').click(function(){
        $()
    })


    $('nav i').click(function(){
        $('.test').slideToggle();
    })



    // 마우스 영역

    var $box = $(".box"),
    inter = 30,
    speed = 0;

    function moveBox(e) {
    //TweenMax.killTweensOf();
    $box.each(function (index, val) {
        TweenLite.to($(this), 0.05, {
        css: { left: e.pageX, top: e.pageY },
        delay: 0 + index / 750
        });
    });
    }

    $(window).on("mousemove", moveBox);

    $box.each(function (index, val) {
    index = index + 1;
    TweenMax.set($(this), {
        autoAlpha: 1,
        delay: 0
    });
    });
    TweenMax.set($(".text:nth-child(30)"), {
    autoAlpha: 1,
    delay: 0
    });





    // 풀페이지 영역

    $('#fullpage').fullpage({
        anchors: ['p1','p2', 'p3', 'p4', 'p5'],
       //options here
        autoScrolling:true,  //기본값 true
        scrollHorizontally: true,
        sectionsColor: ['#aaa','#bbb','#ccc','black','#eee', "#fff"],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['Home','Profile','Portfolio','Contect','ETC'],
        slidesNavigation: true,
        keyboardScrolling: true,
    })  // 키보드 눌렀을 때 스크롤 (기본값 true)
})


const items = document.querySelectorAll('.gallery-collection li')
const close = document.querySelector('button.x')
const popUp = document.querySelector('.pop-up')

items.forEach((el,index) => {
    el.addEventListener('mouseenter',()=>{
        el.querySelector('video').play();

    })
    // el.addEventListener()
    el.onmouseleave =()  =>{
        el.querySelector('video').pause();
        el.querySelector('video').currentTime ='0';
    }
    el.addEventListener('click',(e) =>{
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videoSrc = e.currentTarget.querySelector('video').getAttribute('src')
    
        popUp.querySelector('.txt h2').innerText = title
        popUp.querySelector('.txt p').innerText = text
        popUp.querySelector('video').setAttribute('src', videoSrc)
        popUp.classList.add('active')

        popUp.querySelector('video').play()

    })

})

close.onclick=()=>{
    popUp.classList.remove('active')
    popUp.querySelector('video').pause()

}


