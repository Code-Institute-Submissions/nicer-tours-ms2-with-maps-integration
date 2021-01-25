$(".payment-recd").on("click", function() {
    alert("Many thanks. Your payment has been received and your tour is booked!")
})
let name;
let nameValue;
$(".book-now-form-name").on("change", function() {
    name = this.value;
    console.log(name)
})

let email
$(".book-now-form-email").on("change", function() {
    email = this.value;
    console.log(email)
})

let tel
$(".book-now-form-tel").on("change", function() {
    tel = this.value;
    console.log(tel)
})

let tour
$("#tour").on("change", function() {
    tour = this.value;
    console.log(tour)
})

let date
$(".book-now-form-date").on("change", function() {
    date = this.value;
    console.log(date)
})

let quantity
$("#quantity").on("change", function() {
    quantity = this.value;
    console.log(quantity)
})

let code
$("#discount-code").on("change", function() {
    code = this.value;
    console.log(code)
})

let flexibility
$("#flexibility").on("change", function() {
    flexibility = this.value;
    console.log(flexibility);
})

let tc
$("#t-and-c").on("change", function() {
    tc = this.value;
    console.log(tc);
})

$(".btn-go-to-payment").on("click", function() {
    alert(`Please check these details carefully. If they are all OK, click "ok" and then click the "Proceed To Payment" button:

Name: ${name}
email: ${email}
Telephone: ${tel}
Tour: ${tour}
Date: ${date}
No. of people: ${quantity}
Discount Code: ${code}
Tour Option (if undefined, you have chosen the GUaranteed Departure Option): ${flexibility}

IMPORTANT:
You also confirm you have read our Terms and Conditions`)
})

/*let a = sessionStorage.setItem("name", sessionStorage.getItem("name") + nameValue)
console.log(a)*/

function recordDetailsForPayment() {
    if (sessionStorage.getItem("name") === null) {
            sessionStorage.setItem("name", "");
        }

    var getName = name;
    console.log(getName);
    sessionStorage.setItem("name", sessionStorage.getItem("name") + "\n" + getName);
    sessionStorage.getItem('name');
    
    console.log(sessionStorage)
    var getEmail = email;
    console.log(getEmail);
    var getTel = tel;
    console.log(getTel);

}



//------------------------------------------------------------------------------------------------------- Close all Info boxes and reset map zoom
    //SessionStorage to add item to Payment
    // Thanks to mentor Aaron for guidance
    /*function addToItin() {
        var getValue = $('#search').val();

        if (sessionStorage.getItem("place") === null) {
            sessionStorage.setItem("place", "");
        }
        
        sessionStorage.setItem("place", sessionStorage.getItem("place") + "\n" + getValue)

        sessionStorage.getItem('place');
        let placeAddedToItinerary = sessionStorage.getItem('place');
        alert(`You have added 
    ${placeAddedToItinerary} 
to your itinerary`)
        document.getElementById("message").innerHTML += placeAddedToItinerary;
        $(".btn-cta-send-itinerary").css("display", "block");
        $(".btn-cta-remove-itinerary").css("display", "block");
        $(".btn-cta-remove-itinerary").on("click", function() {
            sessionStorage.clear();
            alert("Your itinerary has been emptied");
            $(".btn-cta-send-itinerary").css("display", "none");
            $(".btn-cta-remove-itinerary").css("display", "none");
            })
        }*/


    