const links = document.querySelectorAll('.dashSidebar a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            sections.forEach(section => section.style.display = 'none');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
        });
    });

    document.querySelector('#planTrip').style.display = 'block';