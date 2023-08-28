$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }

      // scroll spy 

      
    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      )

    })

});







let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});




document.addEventListener("DOMContentLoaded", function() {
            const video_thumbs = document.querySelectorAll(".thumb-video");
            video_thumbs.forEach((video_thumb) => {
                video_thumb.addEventListener("mouseover", function(){
                    this.style.opacity=1;
                    this.play();
                    this.playbackRate = 2.0;
                });

                video_thumb.addEventListener("mouseleave", function(){
                    this.style.opacity=0;
                    this.pause();
                });
            });

            const video_modalScreens = document.querySelectorAll(".video-modal-screen");
            const modal_closeBtns = document.querySelectorAll(".vid-modal-close-btn");

            var videoModal = function(modalClick) {
                video_modalScreens[modalClick].classList.add("active");
            }

            const video_cards = document.querySelectorAll(".video-card-body");
            video_cards.forEach((video_card, i) => {
                video_card.addEventListener("click", () => {
                    videoModal(i);
                });
            });

            modal_closeBtns.forEach((modal_closeBtn) => {
                modal_closeBtn.addEventListener("click", () => {
                    video_modalScreens.forEach((video_modalScreen) => {
                        video_modalScreen.classList.remove("active");
                    });
                });
            });


            modal_closeBtns.forEach((modal_closeBtn) => {
                modal_closeBtn.addEventListener("click", () => {
                    video_modalScreens.forEach((video_modalScreen) => {
                        video_modalScreen.classList.remove("active");
                    });
                });
            });

            // Function to close the active video modal
            const closeVideoModal = () => {
                video_modalScreens.forEach((video_modalScreen) => {
                    video_modalScreen.classList.remove("active");
                });
            };

            // Add click event listener to the background to close the pop-up
            video_modalScreens.forEach((modalScreen) => {
                modalScreen.addEventListener("click", (event) => {
                    if (event.target === modalScreen) {
                        closeVideoModal();
                    }
                });
            });
        });