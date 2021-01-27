function refresh() {
        alert(`Please note that refreshing this page empties your booking settings`)
    }

$(document).ready(function() {
    document.getElementById("tour-chosen").innerText = sessionStorage.tour;
    document.getElementById("no-of-pax").innerText = sessionStorage.quantity;
    document.getElementById("date-chosen").innerText = sessionStorage.date;
    document.getElementById("option-chosen").innerText = sessionStorage.tourOption;


    // From https://stackoverflow.com/a/45173647/14773450
    $('form').submit(function (event) {
        alert("Many thanks. Your payment has been received and your tour is booked!");
        event.preventDefault();
    });
    

    let price = sessionStorage.tour.split(" ");
    let priceWithoutEuro = price[1];
    let priceAlone = priceWithoutEuro.slice(0, -1);
    let priceOfTour = parseInt(priceAlone);

    let pax = parseInt(sessionStorage.quantity);

    const totalCost = priceOfTour * pax;
    document.getElementById("total-cost").innerText = totalCost;

    window.onunload = function() {
        sessionStorage.removeItem("personName");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("tel");
        sessionStorage.removeItem("tour");
        sessionStorage.removeItem("date");
        sessionStorage.removeItem("quantity");
        sessionStorage.removeItem("code");
        sessionStorage.removeItem("tourOption");
        sessionStorage.removeItem("tc");
    };
});
