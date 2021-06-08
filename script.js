$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")

        }
    });
    //toggle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    
    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Programmer","Developer","Blogger","Designer","Freelancer","tutor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing2",{
        strings: ["programmer","Developer","Blogger","Designer","Freelancer","tutor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});