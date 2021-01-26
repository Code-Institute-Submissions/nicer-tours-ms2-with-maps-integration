function sendMail(contactForm) {
    emailjs.send("service_u36nneq", "template_liu9ion", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_form": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        }, function(error) {
            console.log("FAILED", error);
        });
}