const aboutPic = document.querySelectorAll('.aboutImg');
aboutPic.forEach(pic => pic.addEventListener('mouseover', function () {
    pic.style.filter = "grayscale(100%)"
}));

aboutPic.forEach(pic => pic.addEventListener('mouseout', function (event) {
    pic.style.filter = "grayscale(0%)"
}));

const links = document.querySelectorAll('a');
links.forEach(link => link.addEventListener('click', function () {
    link.style.filter = "blur(5px)"
}));

const bucketList = document.querySelectorAll('.bl');
bucketList.forEach(bl => bl.addEventListener('mouseover', function () {
    bl.style.filter = "blur(3px)"
}));

bucketList.forEach(bl => bl.addEventListener('mouseout', function (event) {
    bl.style.filter = "blur(0px)";
}));

const slide = document.querySelectorAll('.row');
window.addEventListener('load', function () {
    slide.forEach((slide, index) => {
        if (index % 2) {
            slide.classList.add("slideFromLeft");
        } else {
            slide.classList.add("slideFromRight");
        }

    })
})