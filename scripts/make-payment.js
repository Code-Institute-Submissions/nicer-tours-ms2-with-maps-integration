$(document).ready(function() {
    document.getElementById("tour-chosen").innerText = sessionStorage.tour;
    document.getElementById("no-of-pax").innerText = sessionStorage.quantity;
    document.getElementById("date-chosen").innerText = sessionStorage.date;
    document.getElementById("option-chosen").innerText = sessionStorage.tourOption;
})

https://stackoverflow.com/a/45173647/14773450
$('form').submit(function (event) {
     alert("Many thanks. Your payment has been received and your tour is booked!")
     event.preventDefault();
 });
