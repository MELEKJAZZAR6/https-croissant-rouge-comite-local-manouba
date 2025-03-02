// Exemple de script pour gérer les formulaires
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre inscription !');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Votre message a été envoyé !');
});

AOS.init({
    duration: 1000, // Durée de l'animation en ms
    once: true,     // L'animation ne se joue qu'une fois
});
$('.carousel').carousel()
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})

