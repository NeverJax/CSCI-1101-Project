let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    //Increments current "itemActive" in order to move on to next movie
    itemActive = itemActive + 1;
    //Doesn't allow user to move to a slide that doesn't exist and rather takes them back to first movie
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    //calls on "showSlider" function
    showSlider();
}
//event prev click
// similar to next click function but decrements "itemActive" to take them to previous movie and resets to last movie if a previous slide doesn't exist
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
//function that displays new movie including images and details
function showSlider() {
    // Remove active class from the previous item
    //similar to swapping in CSS, it creates new temporary variable to transfer 'active' status
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Add active class to the new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // Clear the auto slide interval and restart it
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

function setPositionThumbnail() {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        console.log(`Thumbnail ${index} clicked`);  // Debugging line
        itemActive = index;
        showSlider();
    });
});
