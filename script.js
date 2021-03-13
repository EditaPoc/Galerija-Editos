class PhotoElement {
    constructor(url, description) {
        this.url = url;
        this.description = description;
    }
}

const UI = {
    arrowLeft: document.querySelector(".arrow.left"),
    arrowRight: document.querySelector(".arrow.right"),
    galleryItem: document.querySelector(".galleryItem"),
    index: document.querySelector(".index"),
    description: document.querySelector(".description"),
    slideGallery: document.querySelector(".slideGallery"),
    // Mėginimas gauti rezultatą, bet būdas ne tas
    train:document.querySelector(".train"),
    glasses:document.querySelector(".glasses"),
    cold:document.querySelector(".cold"),
};

const context = {
    photos: photos = [],
    currentPhotoIndex: 0,
};
 
// let  galleryItem = UI.slideGallery.innerHTML; Mėginimas susieti????
 

function initGallery() {
    photos.push(new PhotoElement("https://www.gismeteo.lt/static/news/img/src/10087/dede31ed.jpg", "Rudeninė kelionė"));
    photos.push(new PhotoElement("http://www.juokai.lt/public/files/posts/images/3419/spalvingos-rudens-nuotraukos-002_1.jpg", "Žvilgsnis į rudenį"));
    photos.push(new PhotoElement("https://www.efoto.lt/files/images/30402/rudee_2.preview.jpg", "Pirmoji šalna"));
    photos.push(new PhotoElement("http://www.ltvirtove.lt/foto/gamta/ruduo/rudens_spalvos_83.jpg", "Tekantis Ruduo"));
    photos.push(new PhotoElement("http://fotokudra.lt/files/I654847.jpg", "Pasidabinęs auksu"));
    photos.push(new PhotoElement("http://www.ltvirtove.lt/foto/gamta/ruduo/rudens_spalvos_77.jpg", "Kelias"));
    photos.push(new PhotoElement("https://p0.pikist.com/photos/190/531/trees-clolorful-aerial-view-plant-forest-nature-fall-autumn.jpg", "Ruduo iš aukštai"));

    showPhotoByIndex(context.currentPhotoIndex);
}


function showPhotoByIndex(photoIndex) {
    const photo = context.photos[photoIndex];

    UI.index.innerHTML = `${photoIndex + 1} / ${context.photos.length}`
    UI.description.innerHTML = photo.description;

    UI.galleryItem.src = photo.url;
}

UI.arrowRight.addEventListener("click", () => {
    context.currentPhotoIndex++;

    if (context.currentPhotoIndex > context.photos.length - 1)
        context.currentPhotoIndex = 0;

    showPhotoByIndex(context.currentPhotoIndex);
});

UI.arrowLeft.addEventListener("click", () => {
    context.currentPhotoIndex--;

    if (context.currentPhotoIndex < 0)
        context.currentPhotoIndex = context.photos.length - 1;

    showPhotoByIndex(context.currentPhotoIndex);
});

initGallery()

// turėtų būti kitas būdas? Kaip susieti su js nuotraukų indexu arba pernaudoti initGallery
UI.train.addEventListener("click", () => {

    // pasitikrinu, veikia. Kas toliau?
    console.log("ant nuotraukos paspausta");

    context.currentPhotoIndex = 0;
    showPhotoByIndex(context.currentPhotoIndex);
});
UI.glasses.addEventListener("click", () => {
    console.log("ant nuotraukos paspausta");
    context.currentPhotoIndex = 1;
    showPhotoByIndex(context.currentPhotoIndex);
});
UI.cold.addEventListener("click", () => {
    console.log("ant nuotraukos paspausta");
    context.currentPhotoIndex = 2;
    showPhotoByIndex(context.currentPhotoIndex);
});
UI.train.addEventListener("click", () => {
    console.log("ant nuotraukos paspausta");
    context.currentPhotoIndex = 0;
    showPhotoByIndex(context.currentPhotoIndex);
});
