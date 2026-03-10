document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault()

document.getElementById("msg").innerText =
"Appointment request submitted successfully!"

this.reset()

})