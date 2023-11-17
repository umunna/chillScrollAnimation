new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.6, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });
    

        if (destination.index === 1) {
            const images = document.querySelectorAll(".image2");
            const description = document.querySelector(".description");
           // add time and fade in images
            tl.fromTo(images, 0.6, { x: '100%' }, { x: '-55%' })
            .fromTo(description, 0.5, {y: '50', opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(images[0], 1,  {opacity: 1 }, {opacity: 1})
            .fromTo(images[1], 1,  {opacity: 0 }, {opacity: 1})
            .fromTo(images[2], 1,  {opacity: 0 }, {opacity: 1});
        }
          //image3
        if (destination.index === 1) {
            const imagesT = document.querySelectorAll(".image3");
            const description = document.querySelector(".description");
           // add time and fade in images
            tl.fromTo(imagesT, 0.6, { x: '100%' }, { x: '-55%' })
            .fromTo(description, 0.5, {y: '50', opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(imagesT[0], 1,  {opacity: 1 }, {opacity: 1})
            .fromTo(imagesT[1], 1,  {opacity: 0 }, {opacity: 1})
            .fromTo(imagesT[2], 1,  {opacity: 0 }, {opacity: 1});
        }
         //image 4
        if (destination.index === 1) {
            const imagesF = document.querySelectorAll(".image4");
            const description = document.querySelector(".description");
           // add time and fade in images
            tl.fromTo(imagesF, 0.5, { x: '100%' }, { x: '-55%' })
            .fromTo(description, 0.5, {y: '50', opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(imagesF[0], 1,  {opacity: 1 }, {opacity: 1})
            .fromTo(imagesF[1], 1,  {opacity: 0 }, {opacity: 1})
            .fromTo(imagesF[2], 1,  {opacity: 0 }, {opacity: 1});
        }
    }
});

new fullpage('#fullpage', {
    afterResponsive: function(isResponsive){
        alert("Is responsive: " + isResponsive);
    }
});

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

