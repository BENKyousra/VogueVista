
function searchItems() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase(); // Convertir la saisie en minuscules pour la correspondance
    var items = document.querySelectorAll(".item"); // Sélectionner tous les éléments à filtrer

    // Boucler sur tous les éléments et cacher ceux qui ne correspondent pas à la recherche
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
            item.style.display = ""; // L'élément correspond, donc on l'affiche
        } else {
            item.style.display = "none"; // L'élément ne correspond pas, donc on le cache
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menubt');
    const sideMenu = document.querySelector('.side-menu');
    const content = document.querySelector('.content');

    menuBtn.addEventListener('click', function () {
        sideMenu.classList.toggle('activ');
        content.classList.toggle('activ');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');
    const dots = document.querySelectorAll('.dot');
    const prevImage = document.querySelector('.prev-image');
    const nextImage = document.querySelector('.next-image');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach(image => image.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        images[index].classList.add('active');
        dots[index].classList.add('active');

        // Gérer l'affichage des images précédentes et suivantes
        const prevIndex = (index - 1 + images.length) % images.length;
        const nextIndex = (index + 1) % images.length;
        prevImage.style.backgroundImage = `url('${images[prevIndex].src}')`;
        nextImage.style.backgroundImage = `url('${images[nextIndex].src}')`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    prevImage.addEventListener('click', showPrevImage);
    nextImage.addEventListener('click', showNextImage);

    // Afficher la première image au chargement de la page
    showImage(currentIndex);

    // Diaporama automatique
    setInterval(showNextImage, 3000);
});
