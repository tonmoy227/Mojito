(function ($) {
	"use strict";
    const container = document.querySelector(".what-we-do-section");
    const progress = document.querySelector(".what-to-do-progress-list");
    const progressBarActive = document.querySelector(".what-to-do-progress-bar-active");
    const progressBarEmpty = document.querySelector(".what-to-do-progress-bar-empty");

    (function($){
        $(document).ready(function(){
            const items = document.querySelectorAll(".card:not(.slider-img)");
            const progressItems = document.querySelectorAll(".what-to-do-progress-item");
            const imgItems = document.querySelectorAll(".slider-img");
            const pageItems = document.querySelectorAll(".page-item");
            let currentSlide = 0;
            let scrollCounter           = $('.scroll-counter');
            let scrollCounterSpan       = scrollCounter.find('span');
            let scrollCounterHeight     = scrollCounter.height();

        // on init
            var totalCounter    = (items.length < 10) ? '0'+items.length : items.length;
            var pgCounter       = $("#page-counter");

            pgCounter.find('.total').html(totalCounter);

            scrollCounter.height(scrollCounter.find('span.active').height());
            scrollCounter.bind("mousewheel", function() {
                return false;
            });

        // Set custom index
            items.forEach((card, index) => {
                card.style.setProperty('--custom-index', index);
            });
            progressItems.forEach((item, index) => {
                item.style.setProperty('--custom-index', index);
            });
            imgItems.forEach((card, index) => {
                card.style.setProperty('--custom-index', index);
            });

            $(".slider-nav div").on("click", function(e) {
                e.preventDefault();

                if ($(this).hasClass("prev")) {
                    currentSlide--;
                } else {
                    currentSlide++;
                }

                if (currentSlide < 0) {
                    currentSlide = items.length - 1;
                } else if (currentSlide >= items.length) {
                    currentSlide = 0;
                }
                handleSlide(currentSlide);

                return false;
            });

            $(".card-deck.slider-split .card").on("click", function(e) {
                let cardIndex = $(this).data('index');
                currentSlide = cardIndex-1;
                handleSlide(cardIndex-1);
            });

            $(".what-to-do-progress-item").on("click", function(e) {
                let cardIndex = $(this).data('index');
                currentSlide = cardIndex-1;
                handleSlide(cardIndex-1);
            });

            const handleSlide = (elementIndex) => {
            //console.log("handle slide");

                $(".card:not(slider-img)").removeClass("show-card");
                $(".slider-img").removeClass("show-img");
                $(".what-to-do-progress-item").removeClass("what-to-do-progress-active");

                items.forEach((card, index) => {
                    if (index > 0 && index <= elementIndex) {
                        card.classList.add("show-card");
                    }
                });

                imgItems.forEach((img, index) => {
                    if (index > 0 && index <= elementIndex) {
                        img.classList.add("show-img");
                    }
                });

                if (progressItems[elementIndex]) {
                    progressItems[elementIndex].classList.add("what-to-do-progress-active");
                }

                updateProgress(elementIndex);
            };

            const updateProgress = (currentIndex) => {
            // For progress bar
                const selectedItemPercent = (currentIndex + 1) / items.length;
                if (currentIndex + 1 <= progressItems.length) {
                    progressBarActive.style.height = `${selectedItemPercent * 100}%`;
                }
                progressBarEmpty.style.height = `100%`;

            // For page item
                $('span.page-item').removeClass('active');
                var counter = $('span.page-item[data-index="' + currentIndex + '"]');
                if (counter) {
                    counter.addClass('active');
                    autoScrollToActiveElement(scrollCounter, scrollCounterHeight);
                }
            };

            $(window).on('resize', function() {
                scrollCounter.height(scrollCounter.find('span.active').height());
                autoScrollToActiveElement(scrollCounter, scrollCounterHeight);
            });

            function autoScrollToActiveElement(scrollCounter, scrollCounterHeight) {
                const activeElement     = scrollCounter.find('span.active');
                const containerTop      = scrollCounter.offset().top;
                const containerHeight   = scrollCounter.height();
                const activeTop         = activeElement.offset().top;
                const activeHeight      = activeElement.height();
                const scrollTop         = activeTop - containerTop + scrollCounter.scrollTop() - (containerHeight / 2) + (activeHeight / 2);
                scrollCounter.animate({
                    scrollTop: scrollTop
                }, 500);
            }
        });
})(jQuery);

})(jQuery);