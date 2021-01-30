$(document).ready(function() {
    document.getElementById("tour-chosen").innerText = sessionStorage.tour;
    document.getElementById("no-of-pax").innerText = sessionStorage.quantity;
    document.getElementById("date-chosen").innerText = sessionStorage.date;
    document.getElementById("option-chosen").innerText = sessionStorage.tourOption;
    document.getElementById("code-chosen").innerText = sessionStorage.code;


    // From https://stackoverflow.com/a/45173647/14773450
    $('form').submit(function (event) {
        alert("Many thanks. Your payment has been received and your tour is booked!");
        event.preventDefault();
    });
    
    let price = sessionStorage.tour.split(" ");
    let priceWithoutEuro = price[1];
    let priceAlone = priceWithoutEuro.slice(0, -1);
    let priceOfTour = parseInt(priceAlone);
    
    let tourChosen = sessionStorage.tour;

    let pax = parseInt(sessionStorage.quantity);
    
    let totalCost = "";
    let discountApplied = "";
    let discountCode = sessionStorage.getItem("code");
    
    let tourOptionCode = sessionStorage.getItem("tourOption");
    
    if ((discountCode === "NICER10MONACO") && (tourOptionCode === "Flexibility") && 
        ((tourChosen === "Monaco-Half-Day: 79€ pp") || (tourChosen === "Monaco-Full-Day: 119€ pp"))) {
            discountApplied = (priceOfTour * pax) * 0.9;
            document.getElementById("total-cost").innerText = discountApplied.toFixed(2);
        } else {
            totalCost = priceOfTour * pax;
            document.getElementById("total-cost").innerText = totalCost;
        }
    
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
