
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tickets = document.getElementById("tickets").value;
  const location = document.getElementById("location").value;
  const destination = document.getElementById("destination").value;
  
  
  const message = `اريد ان احجز تذاكر سفر عن طريق قوباص:%0AName: ${name}%0AEmail: ${email}%0ATickets: ${tickets} %0Alocation: ${location}
  %0Adestination: ${destination}`;
  
  const whatsappURL = `https://wa.me/+249920192637?text=${message}`;
  window.open(whatsappURL, "_blank");
});

