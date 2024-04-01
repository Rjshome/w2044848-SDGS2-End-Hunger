function changeFontArial() {
    // For this function, I did not know how to apply a change to all elements using
    // getElementsByClassName. I could not find a reference in the course material.
    // I asked ChatGPT to help me debug and was provided with a sample similar to
    // the sample in this website:  https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
        // const collection = document.getElementsByClassName("example");
        // for (let i = 0; i < collection.length; i++) {
            // collection[i].style.backgroundColor = "red";
        // }
    // I now understand this code and would be able to explain the following function:
    let class_items = document.getElementsByClassName("changeable_font");
    
    for (let i = 0; i < class_items.length; i++) {
        class_items[i].style.fontSize = "22px";
    }
}

function changeFontCambria() {
    // This function is similar to the one above.
    let class_items = document.getElementsByClassName("changeable_font");

    for (let i = 0; i < class_items.length; i++) {
        class_items[i].style.fontSize = "18px";
    }
}

function changeGalleryRandom() {
    // I learned about the Random function from this website: https://www.w3schools.com/JS/js_random.asp
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        changeGalleryBlue();
    } else if (random == 1) {
        changeGalleryGrey();
    } else {
        changeGalleryDarkBlue();
    }
}

function changeGalleryBlue() {
    document.getElementById("large_gallery_display").style.backgroundColor = "rgb(25,55,80)";
}

function changeGalleryGrey() {
    document.getElementById("large_gallery_display").style.backgroundColor = "rgb(75,75,75)";
}

function changeGalleryDarkBlue() {
    document.getElementById("large_gallery_display").style.backgroundColor = "rgb(10,40,60)";
}

function mouseoverOutline(source) {
    source.style.border = "3px solid rgb(75,75,75)";
}

function onmouseoutRemoveOutline(source) {
    source.style.border = "none";
}

function changeToBigImage(source, alternative){
    document.getElementById("full_image").src = source;
    document.getElementById("full_image").alt = alternative;
}

function changeDescription(index){
    const description = ["<h3 class = 'changeable_font'>Gallery 1 - Fruits</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of carrots and a tomato (orange background).</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 2 - Bread</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of bread and wheat (brown background).</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 3 - Meals</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of a plate with chicken, broccoli and rice (grey background).</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 4 - Chalkboard</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of a chalkboard stating 'End Hunger.'</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 5 - Fruits</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of carrots and a tomato (red background).</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 6 - Bread</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of bread and wheat (yellow background).</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 7 - Meals</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of a plate with chicken, broccoli and rice (purple background).</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>", 
    "<h3 class = 'changeable_font'>Gallery 8 - Whiteboard</h3><p class = 'changeable_font'>United Nations Sustainability Goal Zero Hunger, with an image of a whiteboard stating 'End Hunger.'</p> <p class = 'changeable_font'>Images created by w2044848. Free to distribute.</p>"];
    document.getElementById("description").innerHTML = description[index];
}

function changeVisibility(){
    let large_gallery_display = document.getElementById("large_gallery_display");

    if (large_gallery_display.style.display === "none") {
        large_gallery_display.style.display = "flex";
    // The following else statement is redundant, but the function would not run without it:
    } else {
        large_gallery_display.style.display = "flex"
    }
}

function changeVisibilityOff(){
    let large_gallery_display = document.getElementById("large_gallery_display");

    if (large_gallery_display.style.display === "flex") {
        large_gallery_display.style.display = "none";
    } 
}



