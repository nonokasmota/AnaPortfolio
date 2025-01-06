const imageIndexes = {
  image1: 0,
  image2: 0
};

const imageSets = {
  image1: ['./images/1723329380008.jpg', './images/Background.jpg'], // Add your image paths here
  image2: ['./images/another-image1.jpg', './images/another-image2.jpg'] // Add your image paths here
};

let scroll = 0;

var body = document.body,
    html = document.documentElement;

var MaxHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

function nextImage(imageId) {
  const imgElement = document.getElementById(imageId);
  imgElement.classList.add('fade-out');
  setTimeout(() => {
    imageIndexes[imageId] = (imageIndexes[imageId] + 1) % imageSets[imageId].length;
    imgElement.src = imageSets[imageId][imageIndexes[imageId]];
    imgElement.classList.remove('fade-out');
  }, 300); 
}

function previousImage(imageId) {
  const imgElement = document.getElementById(imageId);
  imgElement.classList.add('fade-out');
  setTimeout(() => {
    imageIndexes[imageId] = (imageIndexes[imageId] - 1 + imageSets[imageId].length) % imageSets[imageId].length;
    imgElement.src = imageSets[imageId][imageIndexes[imageId]];
    imgElement.classList.remove('fade-out');
  }, 300); 
}


window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
});
