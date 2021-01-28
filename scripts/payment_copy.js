let personName;
$(".book-now-form-name").on("change", function() {
    personName = this.value;
});

let email;
$(".book-now-form-email").on("change", function() {
    email = this.value;
});

let tel;
$(".book-now-form-tel").on("change", function() {
    tel = this.value;
});

let tour;
$("#tour").on("change", function() {
    tour = this.value;
});

let date;
$(".book-now-form-date").on("change", function() {
    date = this.value;
});

let quantity;
$("#quantity").on("change", function() {
    quantity = this.value;
});

let code;
$("#discount-code").on("change", function() {
    code = this.value;
});

let tourOption;
$("#tour-type-option").on("change", function() {
    tourOption = this.value;
});

let tc;
$("#t-and-c").on("change", function() {
    tc = this.value;
});

$(".btn-go-to-payment").on("click", function() {
    //debugger;
    $(".required").each(function() {
        //if (!document.querySelector("#booking-form").validate()) {
        if ($('#booking-form').is(':invalid') != 0) {
        //if (!$("#booking-form").val()) {
            doThis();
            return false;

        } else {
            doThat();
            return false;
        }
    });

    function doThis() {
        alert("Please fill in all the fields");
        //console.log("hi")
    }

    function doThat() {
        //console.log("bye")
        function ask(question, yes, no){
            if (confirm(question)) {
                yes();
            } else {
                no();
            }
        }


        function yes() {
            
            if (sessionStorage.getItem("personName") === null) {
                sessionStorage.setItem("personName", "");
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

            var getName = personName;
            sessionStorage.setItem("personName", sessionStorage.getItem("personName") + getName);
            sessionStorage.getItem('personName');
            
            var getEmail = email;
            sessionStorage.setItem("email", sessionStorage.getItem("email") + getEmail);
            sessionStorage.getItem('email');

            var getTel = tel;
            sessionStorage.setItem("tel", sessionStorage.getItem("tel") + getTel);
            sessionStorage.getItem('tel');

            var getTour = tour;
            sessionStorage.setItem("tour", sessionStorage.getItem("tour") + getTour);
            sessionStorage.getItem('tour');

            var getDate = date;
            sessionStorage.setItem("date", sessionStorage.getItem("date") + getDate);
            sessionStorage.getItem('date');

            var getQuantity = quantity;
            sessionStorage.setItem("quantity", sessionStorage.getItem("quantity") + getQuantity);
            sessionStorage.getItem('quantity');

            var getCode = code;
            if (getCode === undefined) {
                sessionStorage.setItem("code", "No Discount Code");
                sessionStorage.getItem("code");
            } else {
                sessionStorage.setItem("code", sessionStorage.getItem("code") + getCode);
                sessionStorage.getItem('code');
            }

            var getTourOption = tourOption;
            sessionStorage.setItem("tourOption", sessionStorage.getItem("tourOption") + getTourOption);
            sessionStorage.getItem('tourOption');

            var getTC = tc;
            sessionStorage.setItem("tc", sessionStorage.getItem("tc") + getTC);
            sessionStorage.getItem('tc');
            
            window.open("payment.html", "_self");

        }

        function no() {
            sessionStorage.clear();
        }
        
        ask(`Clicking "ok" will send you to the payment page. Before clicking, please check these details carefully.

            Name: ${personName}
            email: ${email}
            Telephone: ${tel}
            Tour: ${tour}
            Date: ${date}
            No. of people: ${quantity}
            Discount Code: ${code}
            Tour Type: ${tourOption}

            IMPORTANT:
            You also confirm you have read our Terms and Conditions`, yes, no);

        return false;
    }
});
/*$(".btn-go-to-payment").on("click", function() {
    $(".required").each(function() {
      
        if (($(this).val() == "") || ($(this).val() === undefined)) {
            alert("Please fill in all the fields");
            return false;
        }     
        return true;

        if (($(this).val() != "") || ($(this).val() != undefined)) {
            dothis()
            return false;
        }
    });
    return true;

    let personName;
    $(".book-now-form-name").on("change", function() {
        personName = this.value;
    });

    let email;
    $(".book-now-form-email").on("change", function() {
        email = this.value;
    });

    let tel;
    $(".book-now-form-tel").on("change", function() {
        tel = this.value;
    });

    let tour;
    $("#tour").on("change", function() {
        tour = this.value;
    });

    let date;
    $(".book-now-form-date").on("change", function() {
        date = this.value;
    });

    let quantity;
    $("#quantity").on("change", function() {
        quantity = this.value;
    });

    let code;
    $("#discount-code").on("change", function() {
        code = this.value;
    });

    let tourOption;
    $("#tour-type-option").on("change", function() {
        tourOption = this.value;
    });

    let tc;
    $("#t-and-c").on("change", function() {
        tc = this.value;
    });

    function ask(question, yes, no){
        if (confirm(question)) {
            yes();
        } else {
            no();
        }
    }


    function yes() {
        
        if (sessionStorage.getItem("personName") === null) {
            sessionStorage.setItem("personName", "");
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

        var getName = personName;
        sessionStorage.setItem("personName", sessionStorage.getItem("personName") + getName);
        sessionStorage.getItem('personName');
        
        var getEmail = email;
        sessionStorage.setItem("email", sessionStorage.getItem("email") + getEmail);
        sessionStorage.getItem('email');

        var getTel = tel;
        sessionStorage.setItem("tel", sessionStorage.getItem("tel") + getTel);
        sessionStorage.getItem('tel');

        var getTour = tour;
        sessionStorage.setItem("tour", sessionStorage.getItem("tour") + getTour);
        sessionStorage.getItem('tour');

        var getDate = date;
        sessionStorage.setItem("date", sessionStorage.getItem("date") + getDate);
        sessionStorage.getItem('date');

        var getQuantity = quantity;
        sessionStorage.setItem("quantity", sessionStorage.getItem("quantity") + getQuantity);
        sessionStorage.getItem('quantity');

        var getCode = code;
        if (getCode === undefined) {
            sessionStorage.setItem("code", "No Discount Code");
            sessionStorage.getItem("code");
        } else {
        sessionStorage.setItem("code", sessionStorage.getItem("code") + getCode);
        sessionStorage.getItem('code');
        }

        var getTourOption = tourOption;
        sessionStorage.setItem("tourOption", sessionStorage.getItem("tourOption") + getTourOption);
        sessionStorage.getItem('tourOption');

        var getTC = tc;
        sessionStorage.setItem("tc", sessionStorage.getItem("tc") + getTC);
        sessionStorage.getItem('tc');
        
        window.open("payment.html", "_self");

    }

    function no() {
        sessionStorage.clear();
    }
    
    ask(`Clicking "ok" will send you to the payment page. Before clicking, please check these details carefully.

        Name: ${personName}
        email: ${email}
        Telephone: ${tel}
        Tour: ${tour}
        Date: ${date}
        No. of people: ${quantity}
        Discount Code: ${code}
        Tour Type: ${tourOption}

        IMPORTANT:
        You also confirm you have read our Terms and Conditions`, yes, no);
});*/


/*let personName;
$(".book-now-form-name").on("change", function() {
    personName = this.value;
});

let email;
$(".book-now-form-email").on("change", function() {
    email = this.value;
});

let tel;
$(".book-now-form-tel").on("change", function() {
    tel = this.value;
});

let tour;
$("#tour").on("change", function() {
    tour = this.value;
});

let date;
$(".book-now-form-date").on("change", function() {
    date = this.value;
});

let quantity;
$("#quantity").on("change", function() {
    quantity = this.value;
});

let code;
$("#discount-code").on("change", function() {
    code = this.value;
});

let tourOption;
$("#tour-type-option").on("change", function() {
    tourOption = this.value;
});

let tc;
$("#t-and-c").on("change", function() {
    tc = this.value;
});
$(".btn-go-to-payment").on("click", function() {
    $('.required').each(function(){
            if (($(this).val() == "" ) || ($(this).val() === undefined )){
                alert("Please fill in all the fields");
                return false;
            } 
            //return true;
            if (($(this).val() != "") || ($(this).val() === undefined)) {
                //alert("true");
                function ask(question, yes, no){
                    if (confirm(question)) {
                        yes();
                    } else {
                        no();
                    }
                }
            ask(`Clicking "ok" will send you to the payment page. Before clicking, please check these details carefully.

    Name: ${personName}
    email: ${email}
    Telephone: ${tel}
    Tour: ${tour}
    Date: ${date}
    No. of people: ${quantity}
    Discount Code: ${code}
    Tour Type: ${tourOption}

    IMPORTANT:
    You also confirm you have read our Terms and Conditions`, yes, no)            
            return false;
        }
        return true
    });

    function yes() {
    
    if (sessionStorage.getItem("personName") === null) {
        sessionStorage.setItem("personName", "");
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

    var getName = personName;
    sessionStorage.setItem("personName", sessionStorage.getItem("personName") + getName);
    sessionStorage.getItem('personName');
    
    var getEmail = email;
    sessionStorage.setItem("email", sessionStorage.getItem("email") + getEmail);
    sessionStorage.getItem('email');

    var getTel = tel;
    sessionStorage.setItem("tel", sessionStorage.getItem("tel") + getTel);
    sessionStorage.getItem('tel');

    var getTour = tour;
    sessionStorage.setItem("tour", sessionStorage.getItem("tour") + getTour);
    sessionStorage.getItem('tour');

    var getDate = date;
    sessionStorage.setItem("date", sessionStorage.getItem("date") + getDate);
    sessionStorage.getItem('date');

    var getQuantity = quantity;
    sessionStorage.setItem("quantity", sessionStorage.getItem("quantity") + getQuantity);
    sessionStorage.getItem('quantity');

    var getCode = code;
    if (getCode === undefined) {
        sessionStorage.setItem("code", "No Discount Code");
        sessionStorage.getItem("code")
    } else {
    sessionStorage.setItem("code", sessionStorage.getItem("code") + getCode);
    sessionStorage.getItem('code');
    }

    var getTourOption = tourOption;
    sessionStorage.setItem("tourOption", sessionStorage.getItem("tourOption") + getTourOption);
    sessionStorage.getItem('tourOption');

    var getTC = tc;
    sessionStorage.setItem("tc", sessionStorage.getItem("tc") + getTC);
    sessionStorage.getItem('tc');
    
    window.open("payment.html", "_self");

    }

    function no() {
        sessionStorage.clear();
    }
});*/

//---------------------------------------------------------------------
/*let personName;
$(".book-now-form-name").on("change", function() {
    personName = this.value;
});

let email;
$(".book-now-form-email").on("change", function() {
    email = this.value;
});

let tel;
$(".book-now-form-tel").on("change", function() {
    tel = this.value;
});

let tour;
$("#tour").on("change", function() {
    tour = this.value;
});

let date;
$(".book-now-form-date").on("change", function() {
    date = this.value;
});

let quantity;
$("#quantity").on("change", function() {
    quantity = this.value;
});

let code;
$("#discount-code").on("change", function() {
    code = this.value;
});

let tourOption;
$("#tour-type-option").on("change", function() {
    tourOption = this.value;
});

let tc;
$("#t-and-c").on("change", function() {
    tc = this.value;
});*/


//$(".btn-go-to-payment").on("click", function() {
    //Make sure all fields are filled before proceeding to payment page
    // From https://stackoverflow.com/a/39633577/14773450
    /*$('input').each(function() {
        if ($(this).val() != '') {
            console.log('all inputs filled');
        }
        else{
            console.log('theres an empty input');
            return false
        }
    });*/

    // My try
    /*if ($('input:required').each(function() {
        ($(this).val() != '')}) === true) {
            console.log('all inputs filled');
        } else {
            alert("Please fill in the required fields");
            console.log('theres an empty input');
            return false
        }*/
    
    //if ($("input:required").length == 0) {
    //if ($("form#booking-form input[required]")) {
        /*function ask(question, yes, no){
            if (confirm(question)) {
                yes();
            } else {
                no();
            }
        }*/
    /*} else (
        alert("Please fill in the boxes")
    )*/

    /*$('button').on('click', function() {
        $('input:invalid').css('background-color','red');
        $('input:valid').css('background-color','green');
    });*/

    // From https://stackoverflow.com/a/47532256/14773450
    /*$('.required').each(function(){
        if( $(this).val() == "" ){
            alert("Please fill in all the fields");
            return false;
        } else {
            //alert("true");
            function ask(question, yes, no){
                if (confirm(question)) {
                    yes();
                } else {
                    no();
                }
            }
            return false;
        }
    });
    /*function ask(question, yes, no){
            if (confirm(question)) {
                yes();
            } else {
                no();
            }
        }*/
    /*if (true) {
        console.log("true");
    }*/
    //alert(y);
    /*return true;
    if (x==true) {
        alert('ok')
    }*/
    


    /*function yes() {
    
    if (sessionStorage.getItem("personName") === null) {
        sessionStorage.setItem("personName", "");
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

    var getName = personName;
    sessionStorage.setItem("personName", sessionStorage.getItem("personName") + getName);
    sessionStorage.getItem('personName');
    
    var getEmail = email;
    sessionStorage.setItem("email", sessionStorage.getItem("email") + getEmail);
    sessionStorage.getItem('email');

    var getTel = tel;
    sessionStorage.setItem("tel", sessionStorage.getItem("tel") + getTel);
    sessionStorage.getItem('tel');

    var getTour = tour;
    sessionStorage.setItem("tour", sessionStorage.getItem("tour") + getTour);
    sessionStorage.getItem('tour');

    var getDate = date;
    sessionStorage.setItem("date", sessionStorage.getItem("date") + getDate);
    sessionStorage.getItem('date');

    var getQuantity = quantity;
    sessionStorage.setItem("quantity", sessionStorage.getItem("quantity") + getQuantity);
    sessionStorage.getItem('quantity');

    var getCode = code;
    if (getCode === undefined) {
        sessionStorage.setItem("code", "No Discount Code");
        sessionStorage.getItem("code")
    } else {
    sessionStorage.setItem("code", sessionStorage.getItem("code") + getCode);
    sessionStorage.getItem('code');
    }

    var getTourOption = tourOption;
    sessionStorage.setItem("tourOption", sessionStorage.getItem("tourOption") + getTourOption);
    sessionStorage.getItem('tourOption');

    var getTC = tc;
    sessionStorage.setItem("tc", sessionStorage.getItem("tc") + getTC);
    sessionStorage.getItem('tc');
    
    window.open("payment.html", "_self");

    }

    function no() {
        sessionStorage.clear();
    }
    
    /*ask(`Clicking "ok" will send you to the payment page. Before clicking, please check these details carefully.

Name: ${personName}
email: ${email}
Telephone: ${tel}
Tour: ${tour}
Date: ${date}
No. of people: ${quantity}
Discount Code: ${code}
Tour Type: ${tourOption}

IMPORTANT:
You also confirm you have read our Terms and Conditions`, yes, no);*/
//});