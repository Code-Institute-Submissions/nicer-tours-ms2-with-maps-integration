
let name;
$(".book-now-form-name").on("change", function() {
    name = this.value;
})

let email
$(".book-now-form-email").on("change", function() {
    email = this.value;
})

let tel
$(".book-now-form-tel").on("change", function() {
    tel = this.value;
})

let tour
$("#tour").on("change", function() {
    tour = this.value;
})

let date
$(".book-now-form-date").on("change", function() {
    date = this.value;
})

let quantity
$("#quantity").on("change", function() {
    quantity = this.value;
})

let code
$("#discount-code").on("change", function() {
    code = this.value;
})

let tourOption
$("#tour-type-option").on("change", function() {
    tourOption = this.value;
})

let tc
$("#t-and-c").on("change", function() {
    tc = this.value;
})

function recordDetailsForPayment() {
    let formDetails = sessionStorage;
    
    if (sessionStorage.getItem("name") === null) {
        sessionStorage.setItem("name", "");
    }

    if (sessionStorage.getItem("email") === null) {
        sessionStorage.setItem("email", "");
    }

    if (sessionStorage.getItem("tel") === null) {
        sessionStorage.setItem("tel", "");
    }

    if (sessionStorage.getItem("tour") === null) {
        sessionStorage.setItem("tour", "");
    }

    if (sessionStorage.getItem("date") === null) {
        sessionStorage.setItem("date", "");
    }

    if (sessionStorage.getItem("quantity") === null) {
        sessionStorage.setItem("quantity", "");
    }

    if (sessionStorage.getItem("code") === null) {
        sessionStorage.setItem("code", "");
    }

    if (sessionStorage.getItem("tourOption") === null) {
        sessionStorage.setItem("tourOption", "");
    }

    if (sessionStorage.getItem("tc") === null) {
        sessionStorage.setItem("tc", "");
    }

    var getName = name;
    sessionStorage.setItem("name", sessionStorage.getItem("name") + "\n" + getName);
    sessionStorage.getItem('name');
    
    var getEmail = email;
    sessionStorage.setItem("email", sessionStorage.getItem("email") + "\n" + getEmail);
    sessionStorage.getItem('email');

    var getTel = tel;
    sessionStorage.setItem("tel", sessionStorage.getItem("tel") + "\n" + getTel);
    sessionStorage.getItem('tel');

    var getTour = tour;
    sessionStorage.setItem("tour", sessionStorage.getItem("tour") + "\n" + getTour);
    sessionStorage.getItem('tour');

    var getDate = date
    sessionStorage.setItem("date", sessionStorage.getItem("date") + "\n" + getDate);
    sessionStorage.getItem('date');

    var getQuantity = quantity
    sessionStorage.setItem("quantity", sessionStorage.getItem("quantity") + "\n" + getQuantity);
    sessionStorage.getItem('quantity');

    var getCode = code
    sessionStorage.setItem("code", sessionStorage.getItem("code") + "\n" + getCode);
    sessionStorage.getItem('code');

    var getTourOption = tourOption
    sessionStorage.setItem("tourOption", sessionStorage.getItem("tourOption") + "\n" + getTourOption);
    sessionStorage.getItem('tourOption');

    var getTC = tc
    sessionStorage.setItem("tc", sessionStorage.getItem("tc") + "\n" + getTC);
    sessionStorage.getItem('tc');

    for (key in formDetails){
        console.log( key + ": " + formDetails[key]);
    }

    alert(`Please check these details carefully. If they are all OK, click "ok" and then click the "Proceed To Payment" button:

Name: ${name}
email: ${email}
Telephone: ${tel}
Tour: ${tour}
Date: ${date}
No. of people: ${quantity}
Discount Code: ${code}
Tour Type: ${tourOption}

IMPORTANT:
You also confirm you have read our Terms and Conditions`);
}


    