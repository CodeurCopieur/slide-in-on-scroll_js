function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if(!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const allImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  allImages.forEach(image => {
    //à mi-chemin de l'image
    const slideAt = (window.scrollY + window.innerHeight) - image.height / 2;
    //bas de l'image
    const imageBottom = image.offsetTop +  image.height;

    /* condition :
      
    */
    const isHalf = slideAt > image.offsetTop;
    const isNotScrolledPast =  window.scrollY < imageBottom;

    if(isHalf && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }

  })
}

window.addEventListener('scroll', debounce(checkSlide))

console.log(allImages);