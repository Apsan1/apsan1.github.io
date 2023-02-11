function getimagelist() {
    var images = [];
    for (let i = 1; i < 36; i++) {
        image_name = "img/img" + i + ".jpg";
        images.push(image_name);
    }
    return images
}

function addImageToGallery(imageList) {
    var galleryTags = document.getElementsByClassName("gallery")
    for (let i = 0; i < galleryTags.length; i++) {
        var splitImages = imageList.splice(0, 9)
        for (let j = 0; j < splitImages.length; j++) {
            var galleryElement = galleryTags[i];
            var imageTag = `<a target="_blank" href="${splitImages[j]}">
                            <img src=${splitImages[j]}>
                            </a>`
            galleryElement.innerHTML += imageTag
        }
    }
}

function buildGalleryTag(count) {
    for (let i = 0; i < count; i++) {
        var elem = document.createElement("div");
        elem.setAttribute("class", "gallery");
        document.getElementById("gal").appendChild(elem);
    }
}

window.onload = function () {
    console.log('Window loaded')
    buildGalleryTag(4)
    var imagelist = getimagelist() //image [img1.jpg,img2.jpg....]
    console.log(imagelist)
    addImageToGallery(imagelist)
}