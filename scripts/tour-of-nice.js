let markers = [];
let locations = [];
let request = [];
let infowindowContent;
let infowindowTitle;
let service;
let placeName;
let infowindow = null;
let map;

//---------------------------------------------------------------------------------------------------- Initialize Map
function initMap() {
    
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: { lat: 43.70313, lng: 7.26608 },
        mapTypeControl: false,
        streetViewControl: false
    });

    service = new google.maps.places.PlacesService(map);
//---------------------------------------------------------------------------------------------------- Markers for each section of map
    /*let oldTownMarkers = locations.slice(0, 6);
    let castleHillMarkers = locations.slice(6, 9);
    let portMarkers = locations.slice(9, 12);
    let cimiezMarkers = locations.slice(12, 16);*/
//---------------------------------------------------------------------------------------------------- Markers
    //Promenade des Anglais marker
    let markerProm = {
        lat: 43.695316, 
        lng: 7.267793,
        //placeId: "Eh9Qcm9tLiBkZXMgQW5nbGFpcywgTmljZSwgRnJhbmNlIi4qLAoUChIJ0VoczFnQzRIR737WTal1fsoSFAoSCTEthWoQ0M0SEXCal_2lGQgE",
        title: `Promenade des Anglais`,
        link: `Promenade des Anglais<br><br><a onclick="move('prom')" href="../tour-of-nice.html#prom">Find Out More</a>`,
        request: {
            placeId: "Eh9Qcm9tLiBkZXMgQW5nbGFpcywgTmljZSwgRnJhbmNlIi4qLAoUChIJ0VoczFnQzRIR737WTal1fsoSFAoSCTEthWoQ0M0SEXCal_2lGQgE",
            fields: ["name", "rating", "reviews"]
        }
    }
    
    //Place Masséna marker
    let markerPlaceMassena = {
        lat: 43.697400, 
        lng: 7.270230,
        //placeId: "ChIJCWEKXaHazRIRv0jrGA8b3O8",
        title: `Place Masséna`,
        link: `Place Masséna<br><br><a onclick="move('placeMassena')"href="../tour-of-nice.html#placeMassena">Find Out More</a>`,
        request: {
            placeId: "ChIJCWEKXaHazRIRv0jrGA8b3O8",
            fields: ["name", "rating", "reviews"]
        }
    }
    
    //Opera House marker
    let markerOperaHouse = {
        lat: 43.69547, 
        lng: 7.27253,
        placeId: "ChIJOdYiS6LazRIRBQmeCxgnWs4",
        title: `L'Opéra de Nice Opera House`,
        link: `L'Opéra de Nice Opera House<br><br><a onclick="move('operaHouse')"href="../tour-of-nice.html#operaHouse">Find Out More</a>`,
        request: {
            placeId: "ChIJOdYiS6LazRIRBQmeCxgnWs4",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Flower Market marker
    let markerFlowerMarket = {
        lat: 43.69572, 
        lng: 7.27528,
        //placeId: "ChIJveRPXAXbzRIRcTlAN0CoOBE",
        title: `The Flower Market of the Old Town`,
        link: `The Flower Market of the Old Town<br><br><a onclick="move('flowerMarket')" href="../tour-of-nice.html#flowerMarket">Find Out More</a>`,
        request: {
            placeId: "ChIJveRPXAXbzRIRcTlAN0CoOBE",
            fields: ["name", "rating", "reviews"]
        }
    }

    //St Reparate Church marker
    let markerStReparateChurch = {
        lat: 43.697294, 
        lng: 7.275965,
        //placeId: "ChIJR3WTsbzazRIR0c2V-rSfWDo",
        title: `St. Réparate Church`,
        link: `St. Réparate Church<br><br><a onclick="move('stReparateChurch')" href="../tour-of-nice.html#stReparateChurch">Find Out More</a>`,
        request: {
            placeId: "ChIJR3WTsbzazRIR0c2V-rSfWDo",
            fields: ["name", "rating", "reviews"]
        }
    }


    //Castle Hill marker
    let markerCastleHill = {
        lat: 43.694835, 
        lng: 7.281103,
        //placeId: "ChIJ87pSBQHQzRIR7gulsDlUpa8",
        title: `Castle Hill`,
        link: `Castle Hill<br><br><a onclick="move('castleHill')" href="../tour-of-nice.html#castleHill">Find Out More</a>`,
        request: {
            placeId: "ChIJ87pSBQHQzRIR7gulsDlUpa8",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Rauba-Capeù Memorial marker
    let markerRaubaCapeu = {
        lat:43.693849, 
        lng: 7.281250,
        //placeId: "ChIJo5Bv7r3azRIRN6AR5Wkv66s",
        title: `WWI Memorial "Rauba-Capeù"`,
        link: `WWI Memorial "Rauba-Capeù"<br><br><a onclick="move('raubaCapeu')" href="../tour-of-nice.html#raubaCapeu">Find Out More</a>`,
        request: {
            placeId: "ChIJo5Bv7r3azRIRN6AR5Wkv66s",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Nice Port marker
    let markerPortLympia = {
        lat: 43.695379, 
        lng: 7.284777,
        //placeId: "ChIJ33og2r7azRIRKnGqChlyI5g",
        title: `Port de Nice Lympia`,
        link: `Port de Nice Lympia<br><br><a onclick="move('portLympia')" href="../tour-of-nice.html#portLympia">Find Out More</a>`,
        request: {
            placeId: "ChIJ33og2r7azRIRKnGqChlyI5g",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Nice View Point marker
    let markerBayOfAngelsView = {
        lat:43.689128, 
        lng: 7.296206,
        //placeId: "ChIJ8cQZ7ejazRIRnFrpzz1mn7c",
        title: `View over Nice and the Bay of Angels`,
        link: `View over Nice and the Bay of Angels
        <br>
        <br>
        <a onclick="move('bayOfAngelsView')" href="../tour-of-nice.html#bayOfAngelsView">Find Out More</a>`,
        request: {
            placeId: "ChIJ8cQZ7ejazRIRnFrpzz1mn7c",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Arènes de Cimiez marker
    let markerArenesDeCimiez = {
        lat:43.720492, 
        lng: 7.276909,
        //placeId: "ChIJX76sxU_FzRIR-L2d7gXKUGQ",
        title: `Arènes de Cimiez Garden`,
        link: `Arènes de Cimiez Garden<br><br><a onclick="move('arenesDeCimiez')" href="../tour-of-nice.html#arenesDeCimiez">Find Out More</a>`,
        request: {
            placeId: "ChIJX76sxU_FzRIR-L2d7gXKUGQ",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Matisse Museum marker
    let markerMatisseMuseum = {
        lat:43.71938, 
        lng: 7.27624,
        //placeId: "ChIJnz74K1DFzRIRiRaLt2c5MhA",
        title: `Matisse Museum`,
        link: `Matisse Museum<br><br><a id="infowindowLink" onclick="move('matisse')" href="../tour-of-nice.html#matisse">Find Out More</a>`,
        request: {
            placeId: "ChIJnz74K1DFzRIRiRaLt2c5MhA",
            fields: ["name", "rating", "reviews", "photos"]
        }
    }

    //Archaeology Museum marker
    let markerArchaeologyMuseum = {
        lat:43.71928, 
        lng: 7.27511,
        //placeId: "ChIJs1YSxFHFzRIRv7otGUG4rso",
        title: `Archaeology Museum`,
        link: `Archaeology Museum<br><br><a onclick="move('archaeology')" href="../tour-of-nice.html#archaeology">Find Out More</a>`,
        request: {
            placeId: "ChIJs1YSxFHFzRIRv7otGUG4rso",
            fields: ["name", "rating", "reviews"]
        }
    }
    
    //Cimiez Monastery marker
    let markerCimiezMonastery = {
        lat:43.71998, 
        lng: 7.27881,
        //placeId: "ChIJ1ef2pk_FzRIRhOkC-ZlEROI",
        title: `The Monastery of Cimiez`,
        link: `The Monastery of Cimiez<br><br><a onclick="move('cimiezMonastery')" href="../tour-of-nice.html#cimiezMonastery">Find Out More</a>`,
        request: {
            placeId: "ChIJ1ef2pk_FzRIRhOkC-ZlEROI",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Notre Dame marker
    let markerNotreDame = {
        lat:43.703672, 
        lng: 7.265758,
        //placeId: "ChIJxXBGAAjQzRIRooxQYPogkFs",
        title: `Notre-Dame de l’Assomption Basilica`,
        link: `Notre-Dame de l’Assomption Basilica<br><br><a onclick="move('notreDame')" href="../tour-of-nice.html#notreDame">Find Out More</a>`,
        request: {
            placeId: "ChIJxXBGAAjQzRIRooxQYPogkFs",
            fields: ["name", "rating", "reviews"]
        }
    }

    //Russian Cathedral marker
    let markerRussianCathedral = {
        lat:43.703810, 
        lng: 7.253920,
        //placeId: "ChIJnwGbfqDazRIR4rkavLt2r3U",
        title: `St. Nicholas Russian Orthodox Cathedral`,
        link: `St. Nicholas Russian Orthodox Cathedral<br><br><a onclick="move('russianCathedral')" href="../tour-of-nice.html#russianCathedral">Find Out More</a>`,
        request: {
            placeId: "ChIJnwGbfqDazRIR4rkavLt2r3U",
            fields: ["name", "rating", "reviews"]
        }
    }

    //---------------------------------------------------------------------------------------------------- Markers
    locations = 
        [
            markerProm,
            markerPlaceMassena,
            markerOperaHouse, 
            markerFlowerMarket,
            markerStReparateChurch,
            markerCastleHill,
            markerRaubaCapeu,
            markerPortLympia,
            markerBayOfAngelsView,
            markerArenesDeCimiez,
            markerMatisseMuseum, 
            markerArchaeologyMuseum,
            markerCimiezMonastery,
            markerNotreDame,
            markerRussianCathedral
        ];

//---------------------------------------------------------------------------------------------------- Markers
    for (let i = 0; i < locations.length; i++) {
        let request = {
            placeId: locations.placeId,
            fields: ["name", "reviews", "rating", "photos"],
        };
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map
        });
        
        let infowindow = new google.maps.InfoWindow({
            content: locations[i].link,
            title: locations[i].title,
            maxWidth: 160
        });
        if (window.innerWidth > 768) {
            infowindow.open(map, marker);
        }
        //infowindow.open(map, marker);

        //infowindowContent = infowindow.content;
        ///console.log(infowindowContent)
        /*let infowindowHTMLContentLink = document.getElementById("infowindowLink");
        infowindowHTMLContentLink.addEventListener("click", function() {
            for (let a = 0; a < infowindowContent.length; a++) {
                document.getElementById("general-title").append(infowindowTitle);
            };
        })*/
        
        infowindowTitle = infowindow.title;
        console.log(infowindowTitle)
        /*infowindow.content.addListener("click", function() {
            for (let a = 0; a < infowindowContent.length; a++) {
                document.getElementById("general-title").append(infowindowTitle);
            };
        })*/

        
        /* Many thanks due to Kevin Loughrey (Kevin_ci) for helping getting this to work! */
        google.maps.event.addListener(marker, "click", function () {
            service.getDetails(locations[i].request, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {

                    /*console.log(place)
                    placeName = place.name;
                    console.log(placeName)
                    document.getElementById("general-title").append(placeName)*/

                    let reviews = "";
                    let reviewer = "";
                    let reviewerRating = place.rating;
                    console.log(reviewerRating);

                    let photos;
                
                    for (let j = 0; j < place.reviews.length; j++) {
                        reviews += place.reviews[j].text + "<br>";
                        reviewer = place.reviews[j].author_name + "<br>";
                    }
                    /*for (let k = 0; k < place.photos.length; k++) {
                        photos += place.photos[k].getUrl + "<br>"
                    }*/
                    
                    infowindow.setContent("<div><strong>" +
                            place.name +
                            "</strong><br>" +
                            "Total Rating: " +
                            place.rating +
                            "<br>" +
                            reviews +
                            "<br>" +
                            reviewer + 
                            "</div>"
                        )
                    };
                    infowindow.open(map, this);
                });
            });
        };

    markers = locations.map(function(location, i) {
        let marker = new google.maps.Marker({
            position: location
        });
    });
    

//---------------------------------------------------------------------------------------------------- Marker Clustering
    /*let markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });*/
}

//---------------------------------------------------------------------------------------------------- jQuery
//-------------------------------------------------- Hide map on page load
    $(function() {
        $("#map-container").hide();
    })

//-------------------------------------------------- Show map on description buttons
    $(".btn-global-description").on("click", function() {
        $("#map-container").show();
    })

//-------------------------------------------------- Section (Buttons) Zooms
//Old Town Zoom
$(".btn-old-town").on("click", function () {
    $(".global-info").css("display", "none");
    $("#old-town").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(17);
        map.setCenter({ lat: 43.695961, lng: 7.271446 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.696547, lng: 7.271700 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.695961, lng: 7.271446 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.696391, lng: 7.271155 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.696391, lng: 7.271155 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Castle Hill Zoom
$(".btn-castle-hill").on("click", function () {
    $(".global-info").css("display", "none");
    $("#castle-hill").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.694306, lng: 7.281073 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(18);
        map.setCenter({ lat: 43.694306, lng: 7.281073 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.694321, lng: 7.281030 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.694321, lng: 7.281030 })
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(16);
        map.setCenter({ lat: 43.694321, lng: 7.281030 })
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Port Lympia Zoom
$(".btn-the-port").on("click", function () {
    $(".global-info").css("display", "none");
    $("#the-port").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.693313, lng: 7.290793 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.69359347880046, lng: 7.290618067475157 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.694499, lng: 7.290804 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.693256, lng: 7.290468 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.694901, lng: 7.290403 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Cimiez zoom
$(".btn-cimiez").on("click", function () {
    $(".global-info").css("display", "none");
    $("#cimiez").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.719948, lng: 7.276502 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(18);
        map.setCenter({ lat: 43.720333, lng: 7.277311 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.720230, lng: 7.276968 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.720093, lng: 7.276860 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(16);
        map.setCenter({ lat: 43.720371, lng: 7.276448 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Russian Church Zoom
$(".btn-russian-cathedral").on("click", function () {
    $(".global-info").css("display", "none");
    $("#russian-cathedral").css("display", "block");
    $(".poi-close-all").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.704697, lng: 7.259707 });
    }
})

//-------------------------------------------------- Buttons
// Close Info Box
    $(".poi-close").on("click", function() {
        $(this).parents(".attraction").hide();
    })

// Close all Info boxes and reset map zoom
    $(".poi-close-all").on("click", function() {
        $(".attraction").hide();
        $(".global-info").css("display", "none")
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 }),
        $("#map-container").get(0).scrollIntoView();
    })
// Back To Map
    $(".back-to-map").on("click", function() {
        $("#map-container").get(0).scrollIntoView();
    })

//---------------------------------------------------------------------------------------------------- open Map Elements
// from https://stackoverflow.com/a/42416400/14773450
let attractions = $(".map-information").children('div')
console.log(attractions)
function move(v) {
    attractions.filter(function() {
        $(this).appendTo(output).show();
        if (!$(this).hasClass(v) && (v)) {
            $(this).hide();
        }
    })
}



