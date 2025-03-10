document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("app").style.display = "block";
    }, 2000);
});

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    
    document.getElementById("confirmation").innerHTML = `Cita reservada para <strong>${name}</strong> el <strong>${date}</strong> a las <strong>${time}</strong>`;
    document.getElementById("confirmation").classList.remove("hidden");
});