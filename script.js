
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully.');

    var currentPage = document.body.id;
    console.log('Current page:', currentPage);

    var body = document.querySelector('body');
    console.log('Body element:', body);

    var bgColor;

    switch (currentPage) {
        case 'home-page':
            bgColor = '#f2f2f2'; // Example color for the home page
            activateLink('home-link');
            break;
        case 'about-page':
            bgColor = '#e6e6e6'; // Example color for the about page
            activateLink('about-link');
            break;
        case 'services-page':
            bgColor = '#d9d9d9'; // Example color for the services page
            activateLink('services-link');
            break;
        case 'portfolio-page':
            bgColor = '#cccccc'; // Example color for the portfolio page
            activateLink('portfolio-link');
            break;
        case 'contact-page':
            bgColor = '#bbbbbb'; // Example color for the contact page
            activateLink('contact-link');
            break;
        default:
            bgColor = '#ffffff'; // Default color
    }

    console.log('Background color:', bgColor);

    body.style.backgroundColor = bgColor;

    function activateLink(linkId) {
        var link = document.getElementById(linkId);
        link.classList.add('active');
    }
});



