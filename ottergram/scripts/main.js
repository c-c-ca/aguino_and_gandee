const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const TINY_EFFECT_CLASS = 'is-tiny';
const ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
    })
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}


function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

initializeEvents();

// Challenges

// Chapter 6: Silver Challenge: Link Hijack
//
// document.querySelectorAll('a').forEach(elt =>
//     elt.addEventListener('click', event => event.preventDefault()));


// Chapter 6: Gold Challenge: Random Otters

// const THUMBNAIL_IMAGE_URL = 'data-image-url';
// const TACOCAT_URL = 'https://d3qdvvkm3r2z1i.cloudfront.net/media/catalog/product/cache/1/thumbnail/85e4522595efc69f496374d01ef2bf13/t/a/tacocat_newthumb.png';
//
// function randomOtter() {
//     let thumbnails = getThumbnailsArray();
//     let image_urls = thumbnails.map(thumb => thumb.getAttribute(THUMBNAIL_IMAGE_URL));
//     let tacocat;
//     function setTacoCat() {
//         if (tacocat) {
//             tacocat.removeEventListener('click', setTacoCat);
//             let idx = thumbnails.findIndex(thumb => thumb == tacocat);
//             tacocat.setAttribute(THUMBNAIL_IMAGE_URL, image_urls[idx]);
//         }
//         tacocat = thumbnails[Math.floor(Math.random() * thumbnails.length)];
//         tacocat.setAttribute(THUMBNAIL_IMAGE_URL, TACOCAT_URL);
//         tacocat.addEventListener('click', setTacoCat)
//     }
//     setTacoCat();
// }
//
// randomOtter();
