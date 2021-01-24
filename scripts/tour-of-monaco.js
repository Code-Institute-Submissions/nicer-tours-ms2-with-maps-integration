let markers = [];
let locations = [];
let request = [];
let infowindowContent;
let infowindowTitle;
let service;
let img;
let placeName;
let infowindow = null;
let map;

//---------------------------------------------------------------------------------------------------- Initialize Map
function initMap() {
    
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        mapTypeControl: false,
        streetViewControl: false
    });

    service = new google.maps.places.PlacesService(map);
//---------------------------------------------------------------------------------------------------- Markers
    //Eze Village marker
    let markerEzeVillage = {
        lat: 43.728071, 
        lng: 7.361423,
        title: `Eze Village`,
        description: `<h3 class="poi-sub-heading"><i>La Prom</i>: France's most iconic seaside boulevard.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Promenade_des_Anglais -->
                    <p class="poi-text">Starting in the second half of the 18th century, the English aristocracy took to spending the winter in Nice, 
                    enjoying the panorama along the coast. In 1820, when a particularly harsh winter further north brought an influx of beggars to Nice, 
                    some of the English proposed that they could work on the construction of a walkway (chemin de promenade) along the sea. It was funded 
                    by the Reverend Lewis Way and members of Holy Trinity Anglican Church.</p>
                    <p class="poi-text">The city of Nice, intrigued by the prospect of a pleasant promenade, greatly increased the scope of the work. 
                    The Promenade was first called the Camin deis Anglés (the English Way) by the Niçois in their native dialect. After the annexation of Nice 
                    by France in 1860 it was rechristened <i>La Promenade des Anglais</i>.</p>
                    <p class="poi-text">If <i>La Prom</i> (as the locals call it) is not France's most famous street, it is certainly second only to the <i>Champs Elysée</i> 
                    in Paris.</p>`,
        request: {
            placeId: "ChIJ041rEmbDzRIRDv-yg_yyS6g",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Parfumerie Fragonard marker
    let markerFragonard = {
        lat: 43.729799, 
        lng: 7.363225,
        title: `Parfumerie Fragonard`,
        description: `<h3 class="poi-sub-heading">Nice's primary city square.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Place_Mass%C3%A9na -->
                    <p class="poi-text">Named for André Masséna. Its layout was designed by Joseph Vernier in 1843-1844.</p>
                    <p class="poi-text">The Place Masséna is the main square of the city. Before the Paillon River was covered over, 
                    the <i>Pont-Neuf</i> was the only practicable way between the old town and the modern one. The square was thus divided 
                    into two parts (North and South) in 1824. With the demolition of the Masséna Casino in 1979, <i>Place Masséna</i> became 
                    more spacious and less dense and is now bordered by red ochre buildings of Italian architecture.</p>
                    <p class="poi-text">The recent rebuilding of the tramline gave the square back to the pedestrians, restoring its status as a real 
                    Mediterranean square. It is lined with palm trees and stone pines, instead of being the rectangular roundabout of sorts it had 
                    become over the years. Since its construction, <i>Place Masséna</i> has always been the spot for great public events. 
                    It is used for concerts, and particularly during the summer festivals, the <i>Corso carnavalesque</i> (carnival parade) in February, 
                    the military procession of 14 July (Bastille Day) or other traditional celebrations and banquets.</p>`,
        request: {
            placeId: "ChIJyRrwPGbDzRIRX0TKPUar-e8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Monaco Panorama marker
    let markerPanoramaMonaco = {
        lat: 43.731520, 
        lng: 7.402095,
        title: `The Dog's Head Moutain`,
        description: `<h3 class="poi-sub-heading">From a little wooden theatre to a grand dame of the <i>Italianate</i> style</h3>
                    <!-- Text by self and https://www.opera-nice.org/en/the-theater/historic -->
                    <p class="poi-text">The Marchioness Alli-Maccarani acquired permission to turn her former residence into a theatre from Amadeus III, 
                    King of Sardinia, under who's jurisdiction the County of Nice fell. Thus the little <i>Théâtre Maccarani</i>, named after its owners, 
                    was built at the site of the present-day opera house in the 18th century.</p>
                    <p class="poi-text">Built entirely from wood in 1776, the northern façade looked out over the city while its southern façade gave out onto the ramparts 
                    of the <i>Quai du Midi</i>, today's <i>Quai des États-Unis</i>.</p>
                    <p class="poi-text">Razed to the ground by a fire in 1881, the new opera house, <i>l'Opéra de Nice</i> rose from its ashes in 1883</p>
                    <p class="poi-text">Today, the <i>Opéra de Nice</i> is the principal opera venue in Nice, France, and houses the <i>Ballet Nice Méditerrannée</i> 
                    and the Nice Philharmonic Orchestra. It offers three types of performances: operas, ballets and classical music concerts.</p>`,
        request: {
            placeId: "ChIJNZdV_uTCzRIROTHOifsip3I",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Oceanographic Museum marker
    let markerOceanographicMuseum = {
        lat: 43.731458, 
        lng: 7.425484,
        title: `Oceaographic Museum, Monaco`,
        description: `<h3 class="poi-sub-heading">Discover the heart of <i>Vieux Nice</i></h3>
                    <!-- Text by self -->
                    <p class="poi-text">The old town of Nice with its world-famous flower market - once the trading point for 35 
                    tonnes of flowers per day! These flowers fed the perfume and candy industry of the region.</p>
                    <p class="poi-text">Try the local specialities in the <i>Provençal</i> market: <strong><i>socca</i></strong>, the traditional 
                    dish of the needy, made from chick peas, olive oil and water; <strong><i>niçois olives</i></strong>, the small, 
                    stoned olives which are the real pizza olives...</p>
                    <p class="poi-text">Discover the house where the painter Matisse stayed when he came to Nice to try to capture the light of the 
                    city in his paintings.</p>
                    <br>
                    <p class="image-credit"><strong>Image:</strong> Cours Saleya: Dalbera, via Wikimedia Commons</p>`,
        request: {
            placeId: "ChIJU2WkJZDCzRIRbGhKwmhB-cI",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Monaco Cathedral marker
    let markerMonacoCathedral = {
        lat: 43.731272, 
        lng:7.422480,
        title: `Saint Nicholas Cathedral, Monaco`,
        description: `<h3 class="poi-sub-heading">Seat of the Diocese of Nice and named for Saint Reparata.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Nice_Cathedral -->
                    <p class="poi-text">The original cathedral on the site, called St Mary of the Castle, was consecrated in 1049.In 1060, relics 
                    belonging to Saint Reparata arrived in Nice. By 1075, a chapel dedicated to St Reparata was constructed at the foot of the now dstroyed 
                    castle of Nice (see Castle Hill).</p>
                    <p class="poi-text">During the latter half of the 12th century, the chapel became a priory of the Abbey of Saint-Pons. 
                    1246 marked the official establishment of the priory as a parish church. The first church on the site was built in the early 13th century 
                    on land belonging to the Abbey of St Pons and became a parish church in 1246.</p>
                    <p class="poi-text">Originally rectangular and oriented to the North, the cathedral was rebuilt on the model of Santa Susanna in Rome, 
                    i.e. on a Latin cross ground plan oriented to the east, with a cupola, clad in coloured tiles varnished in the Genoese style, over the crossing. 
                    The building is in the Baroque architectural tradition.</p>`,
        request: {
            placeId: "ChIJXxH-HpLCzRIRIZabyjTbjNQ",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }


    //Monaco Palace marker
    let markerMonacoPalace = {
        lat: 43.731694, 
        lng: 7.419830,
        title: `Palais Princier, Monaco`,
        description: `<h3 class="poi-sub-heading">Castle Hill with its spectacular views over <i>Vieux Nice</i> (the old town) and <i>La Prom</i>.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Castle_of_Nice -->
                    <p class="poi-text">The Castle of Nice was a citadel used for military purposes. Built at the top of a hill, it stood overlooking the bay of 
                    Nice from the 11th century to the 18th century. It was besieged several times, especially in 1543 and in 1691, before it was taken by French 
                    troops in 1705 and finally destroyed in 1706 by command of Louis XIV.</p>
                    <p class="poi-text">Nowadays, Castle Hill is used as a park. It's the most famous public garden in Nice, and a "must see" place for the 
                    numerous tourists who visit the city. It offers many amazing panoramas, and provides a beautiful view all day long from sunrise to sundown, 
                    highlighting various landscapes depending on where one looks: the Harbor at sunrise, the <i>Promenade des Anglais</i> at sundown. That's why Castle Hill 
                    is called "the cradle of the sun".</p>`,
        request: {
            placeId: "ChIJK8yrdpLCzRIRIcD7wv9f-U8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Casino marker
    let markerCasino = {
        lat: 43.738916, 
        lng: 7.428046,
        title: `Casino de Monte-Carlo`,
        description: `<h3 class="poi-sub-heading">The <strong>"Hat Thief"</strong> memorial to Nice's fallen soldiers.</h3>
                    <!-- Text from https://en.nicetourisme.com/nice/74-quai-rauba-capeu and myself -->
                    <p class="poi-text">At the foot of Castle Hill, the Promenade becomes the <i>Quai des États-Unis</i> along the old town, then 
                    <i>Rauba Capeu</i>, which offers one of the finest vistas on the Mediterranean Sea and the beautiful blue and ochre nuances along the Prom.</p>
                    <p class="poi-text">The memorial is named in the <i>niçois</i> dialect. It's translation is "the hat thief" as is so named as it is built upon the windiest 
                    spot in Nice. At the time of its construction, it was very much the <i>Belle Epoque</i> era, with the ladies wearing bonnets and the gentlemen hats.</p>
                    <p class="poi-text">Often, as they walked the corner from the port to the Prom, the wind would whip up and steal their hats... thus the name of the memorial.</p>
                    <p class="poi-text">Only in France would you find such a romantic name for such a serious monument!</p>`,
        request: {
            placeId: "ChIJZQJu5IfCzRIR4_SMWQznbqY",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Hotel de Paris marker
    let markerHotelDeParis = {
        lat: 43.738823, 
        lng: 7.426947,
        title: `Hotel de Paris Monte-Carlo`,
        description: `<h3 class="poi-sub-heading">That <strong><i>most</i></strong> Mediterranean of ports</h3>
                    <!-- Text from https://en.nicetourisme.com/by-boat and self -->
                    <p class="poi-text">The Port of Nice, surrounded by 18th-century buildings in the Genoese style, is actually named Port Lympia. 
                    The architectural complex seems inspired by the Italian Renaissance and influenced by the baroque urban planning of Turin.</p>
                    <p class="poi-text">With over 530 berths, 24 of which are reserved for yachts over 25m long (one of which for many years was the home 
                    berth of <i>Octopus</i>, a 126m yacht owned by the late Paul Allen, one of the founders of Microsoft).<p>
                    <p class="poi-text">Once the estuary of the Lympia spring, the river was diverted when construction of the port commenced in 1700.</p>`,
        request: {
            placeId: "ChIJFY1s1ofCzRIRtwOFQihi098",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Café de Paris marker
    let markerCafeDeParis = {
        lat: 43.739749, 
        lng: 7.428005,
        title: `Casino Café de Paris`,
        description: `<h3 class="poi-sub-heading">Simply breathtaking!</h3>
                    <!-- Text from self -->
                    <p class="poi-text">Offering unrivalled views over the Bay of Angels, the viewpoint of the <i>Belvedére du Mont Boron</i> is a view 
                    that should be on everyone's bucket list!</p>
                    <p class="poi-text">The colours, the light, the bay, the city... all combine to take your breath away.</p>
                    <p class="poi-text">Words cannot describe this view. It has to be seen to be believed!</p>`,
        request: {
            placeId: "ChIJq78T54fCzRIRIC-tVNSO32g",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //---------------------------------------------------------------------------------------------------- Markers
    locations = 
        [
            markerEzeVillage,
            markerFragonard,
            markerPanoramaMonaco, 
            markerOceanographicMuseum,
            markerMonacoCathedral,
            markerMonacoPalace,
            markerCasino,
            markerHotelDeParis,
            markerCafeDeParis,
        ];

//---------------------------------------------------------------------------------------------------- Markers
    for (let i = 0; i < locations.length; i++) {
        
        let request = {
            placeId: locations.placeId,
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"],
        };
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map
        });
        
        let infowindow = new google.maps.InfoWindow({
            content: locations[i].title,
            maxWidth: 160
        });
        if (window.innerWidth > 768) {
            infowindow.open(map, marker);
        }

        /* Many thanks due to Kevin Loughrey (Kevin_ci) for helping getting this to work! */
        google.maps.event.addListener(marker, "click", function () {
            $("#reviews").hide().html("");
            service.getDetails(locations[i].request, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    $(".global-info").get(0).scrollIntoView();
                    document.getElementById("attraction").innerHTML = `<div class="row">
                        <div class="col-12 order-1 poi-title">
                            <h2 id="poi-title-name"></h2>
                        </div>
                        <div class="col-12 order-2" id="attraction-image"></div>
                        <div class="col-12 order-12 buttons-and-links">
                            <div class="row">
                                <div class="col-lg-4 col-sm-6 order-xl-1 order-1 reviews" style="text-align:left">
                                    <button class="btn btn-light btn-block reviews" onclick="seeReviews()">See Reviews</button>
                                </div>
                                <div class="col-lg-4 col-sm-6 order-xl-2 order-2 more-info">
                                </div>
                                <div class="col-lg-4 col-sm-12 order-xl-3 order-3 back-to-map" style="text-align:right">
                                    <button class="btn btn-light btn-block back-to-map" onclick="backToMap()">Back To Map</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

                    
                    let placeId = place.placeId
                    let placeAddress = place.formatted_address
                    let placeName = place.name;
                    console.log(placeName);
                    document.getElementById("poi-title-name").append(placeName)

                    if (place.hasOwnProperty("photos") === false){
                        console.log("No photos");
                        img = document.createElement("img");
                        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/47/Cours_Saleya_-_Chapelle_de_la_Mis%C3%A9ricorde_-_Nice.jpeg");
                        img.setAttribute("class", "img")
                        document.getElementById("attraction-image").appendChild(img);
                    } else {
                        let photoUrl = place.photos[0].getUrl();
                        img = document.createElement("img");
                        img.setAttribute("src", photoUrl);
                        img.setAttribute("class", "img")
                        document.getElementById("attraction-image").appendChild(img);
                    };

                    if (place.hasOwnProperty("reviews") === false){
                        console.log("No photos");
                        document.getElementById("reviews").innerHTML += `<p style="margin-bottom:0">Sorry, there are no Google reviews available for this location.`;
                    } else {
                        let placeReviews = place.reviews;
                        placeReviews.forEach(function(item) {
                            document.getElementById("reviews").innerHTML += `<p style="margin-bottom:0">${item.text}</p>
                            <p style="text-align:right"><strong>${item.author_name}: </strong> 
                            <span style="color:red; font-size:x-large">${item.rating}</span>/5</p><hr>`;
                        });
                    }

                    let placeDescription = locations[i].description;
                    document.getElementById("attraction-image").innerHTML += `<div style="margin-bottom:0">${placeDescription}</div>`;

                    let placeWebsite = place.website;
                    console.log(placeWebsite);
                    if (place.hasOwnProperty("website") == true) {
                        console.log(placeWebsite);
                        $(".more-info").append(`<a class="btn btn-light btn-block more-info" role="button" href="${placeWebsite}" target="_blank">Find Out More</a>`)

                    } else if (place.hasOwnProperty("website") == false){
                        $(".more-info").append(`<a class="btn btn-light btn-block more-info" role="button" href="https://www.google.com/" target="_blank">Find Out More</a>`)
                    }
                };
            });
        });
    }

    //Racetrack Route
    /*const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
        document.getElementById("racetrack-route").addEventListener("click", () => {
            calculateAndDisplayRoute(directionsService, directionsRenderer);
        });    
    }

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const waypts = [];
    const checkboxArray = document.getElementById("waypoints");

    for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
            waypts.push({
                location: checkboxArray[i].value,
                stopover: true,
            });
        }
    }
    directionsService.route(
        {
        origin: document.getElementById("start").value,
        destination: document.getElementById("end").value,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(response);
            const route = response.routes[0];
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );*/
}


//---------------------------------------------------------------------------------------------------- jQuery
//-------------------------------------------------- Hide map on page load
    $(function() {
        $("#instructions-for-map").hide()
        $("#map-container").hide();
        $("#reviews").hide();
        $("#racetrack-course").hide();
        $("#racetrack").hide();
    })

//-------------------------------------------------- Show map on description buttons
    $(".btn-global-description").on("click", function() {
        $("#instructions-for-map").show()
        $("#map-container").show();
        $("#reviews").hide();
        $("#racetrack-course").hide();
        $("#racetrack").hide();
    })

//-------------------------------------------------- Show MC F1 on button click
    $(".btn-racetrack").on("click", function() {
        $("#racetrack-course").show();
        $("#racetrack").show();
        $("#instructions-for-map").hide()
        $("#map-container").hide();
        $("#reviews").hide();
        $(".global-info").hide()
    })

//-------------------------------------------------- Section (Buttons) Zooms
//Eze Zoom
$(".btn-eze").on("click", function () {
    $(".global-info").css("display", "none");
    $("#eze").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(17);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.728422, lng: 7.361454 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(16);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Panorama Monaco Zoom
$(".btn-panorama-monaco").on("click", function () {
    $(".global-info").css("display", "none");
    $("#panorama-monaco").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(14);
        map.setCenter({ lat: 43.730561, lng: 7.402835 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.730561, lng: 7.402835 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.730561, lng: 7.402835 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(13);
        map.setCenter({ lat: 43.730561, lng: 7.402835 })
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(13);
        map.setCenter({ lat: 43.730561, lng: 7.402835 })
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Monaco Rock Zoom
$(".btn-the-rock").on("click", function () {
    $(".global-info").css("display", "none");
    $("#the-rock").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Racetrack zoom
$("#racetrack-route").on("click", function () {

    $(".racetrack-course").css("display", "block");
    /*$("#racetrack").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.736605, lng: 7.427937 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.736605, lng: 7.427937 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.736605, lng: 7.427937 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.736605, lng: 7.427937 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(14);
        map.setCenter({ lat: 43.736605, lng: 7.427937 });
    }*/
    $(".btn-global-description").get(0).scrollIntoView();
})

//Casino Zoom
$(".btn-casino").on("click", function () {
    $(".global-info").css("display", "none");
    $("#casino").css("display", "block");
    $(".poi-close-all").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(18);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(17);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    }
})

//---------------------------------------------------------------------------------------------------- Buttons
//Go back to top of map on click
    function backToMap() {
        $("#reviews").hide();
        $(".btn-global-description").get(0).scrollIntoView();
    }

// See reviews
    function seeReviews() {
        $("#reviews").show();
    }




