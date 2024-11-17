
// change sa section
const links = document.querySelectorAll('.dashSidebar a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            sections.forEach(section => section.style.display = 'none');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
        });
    });

// show and hide return date

    document.querySelector('#planTrip').style.display = 'block';

    function toggleReturnDate() {
        const roundTrip = document.querySelector('input[name="trip"][value="round"]').checked;
        const returnDateDiv = document.getElementById("returnDate");
        
        if (roundTrip) {
            returnDateDiv.style.display = "block";
        } else {
            returnDateDiv.style.display = "none";
        }
    }

    // show dashboard
    function showDashboard() {
        const dashboardSection = document.getElementById("dashboard");
        const planTripSection = document.getElementById("planTrip"); // Assuming "planTrip" is the ID of the section you want to hide.
        const roundTrip = document.querySelector('input[name="trip"][value="round"]').checked;
    
        planTripSection.style.display = "none";
    
        dashboardSection.style.display = "block";
    
        const oneWayCards = document.querySelector(".oneWayCards");
        const roundTripCards = document.querySelector(".roundTripCards");
    
        if (roundTrip) {
            oneWayCards.style.display = "none";
            roundTripCards.style.display = "block";
        } else {
            oneWayCards.style.display = "block";
            roundTripCards.style.display = "none";
        }
    
        dashboardSection.scrollIntoView({ behavior: "smooth" });
    }
    
// ig pislit sa flight na available mo redirect sa infos sa passenger
    function selectFlightCard() {
        const dashboardSection = document.getElementById("dashboard");
        const profileSection = document.getElementById("profile");
    
        dashboardSection.style.display = "none";
        profileSection.style.display = "block";
    
        profileSection.scrollIntoView({ behavior: "smooth" });
    }
// proceed ni to booking summary
function goToMenu() {

    document.getElementById("profile").style.display = "none";
    
    document.getElementById("menu").style.display = "block";

    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}