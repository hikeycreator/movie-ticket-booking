function selectMovie(movieName) {
  document.getElementById('selectedMovie').value = movieName;
  window.location.href = "#booking";
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const movie = document.getElementById('selectedMovie').value;
  const date = this.date.value;
  const time = this.time.value;
  const seats = this.seats.value;

  const ticketDetails = `
    Movie: ${movie} <br>
    Date: ${date} <br>
    Time: ${time} <br>
    Seats: ${seats}
  `;

  document.getElementById('ticketDetails').innerHTML = ticketDetails;
  document.getElementById('ticketPopup').style.display = 'flex';
});

function closePopup() {
  document.getElementById('ticketPopup').style.display = 'none';
}
