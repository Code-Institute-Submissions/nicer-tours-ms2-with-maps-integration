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
        center: { lat: 43.70313, lng: 7.26608 },
        mapTypeControl: false,
        streetViewControl: false
    });

    service = new google.maps.places.PlacesService(map);
//---------------------------------------------------------------------------------------------------- Markers
    //Promenade des Anglais marker
    let markerProm = {
        lat: 43.695316, 
        lng: 7.267793,
        title: `Promenade des Anglais`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJyRztG1fRzRIRBeFRpvLFAW4",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Place Masséna marker
    let markerPlaceMassena = {
        lat: 43.697400, 
        lng: 7.270230,
        title: `Place Masséna`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJCWEKXaHazRIRv0jrGA8b3O8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Opera House marker
    let markerOperaHouse = {
        lat: 43.69547, 
        lng: 7.27253,
        title: `L'Opéra de Nice Opera House`,
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
            placeId: "ChIJOdYiS6LazRIRBQmeCxgnWs4",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Flower Market marker
    let markerFlowerMarket = {
        lat: 43.69572, 
        lng: 7.27528,
        title: `The Flower Market of the Old Town`,
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
            placeId: "EiBDb3VycyBTYWxleWEsIDA2MzAwIE5pY2UsIEZyYW5jZSIuKiwKFAoSCTtmtyCj2s0SEb6A4T90An3BEhQKEgkxLYVqENDNEhFwmpf9pRkIBA",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //St Reparate Church marker
    let markerStReparateChurch = {
        lat: 43.697294, 
        lng: 7.275965,
        title: `St. Réparate Church`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJR3WTsbzazRIR0c2V-rSfWDo",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }


    //Castle Hill marker
    let markerCastleHill = {
        lat: 43.694835, 
        lng: 7.281103,
        title: `Castle Hill`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJ87pSBQHQzRIR7gulsDlUpa8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Rauba-Capeù Memorial marker
    let markerRaubaCapeu = {
        lat:43.693849, 
        lng: 7.281250,
        title: `WWI Memorial "Rauba-Capeù"`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJo5Bv7r3azRIRN6AR5Wkv66s",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Nice Port marker
    let markerPortLympia = {
        lat: 43.695379, 
        lng: 7.284777,
        title: `Port de Nice Lympia`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJ33og2r7azRIRKnGqChlyI5g",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Nice View Point marker
    let markerBayOfAngelsView = {
        lat:43.689128, 
        lng: 7.296206,
        title: `View over Nice and the Bay of Angels`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJ-4PtWujazRIRacv7jz-WmUA",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Arènes de Cimiez marker
    let markerArenesDeCimiez = {
        lat:43.720492, 
        lng: 7.276909,
        title: `Arènes de Cimiez Garden`,
        description: `<h3 class="poi-sub-heading">Hear the echoes of the great Jazz Stars as you stroll through the gardens.</h3>
                    <!-- Text from https://en.nicetourisme.com/nice/94-jardin-des-arenes-de-cimiez -->
                    <p class="poi-text">Across from the Monastery of Cimiez, this garden is a vast olive grove, with thousands of 
                    centuries-old trees; the lawns are easily accessible to everyone, which makes this a favourite haunt for family 
                    outings.</p>
                    <p class="poi-text">Site of festivals such as the May Day festival, and previously home to the Nice Jazz Festival, take time to stroll 
                    in the olive lined boulevards named after the Jazz Greats who have played here.</p`,
        request: {
            placeId: "ChIJX76sxU_FzRIR-L2d7gXKUGQ",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Matisse Museum marker
    let markerMatisseMuseum = {
        lat:43.71938, 
        lng: 7.27624,
        title: `Matisse Museum`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJnz74K1DFzRIRiRaLt2c5MhA",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Archaeology Museum marker
    let markerArchaeologyMuseum = {
        lat:43.71928, 
        lng: 7.27511,
        title: `Archaeology Museum`,
        description: `<h3 class="poi-sub-heading">A treasure trove of artefacts dating from the Bronze to the Middle Ages.</h3>
                    <!-- Text from https://frenchriviera.travel/archaeological-museum-nice/ -->
                    <p class="poi-text">The most valuable items found over the years in Cimiez and near Nice have been collected 
                    together in the archaeological museum in Cimiez. Some of these were excavated during archaeological research, 
                    while others were found in the wrecks of ancient ships sunk near the Côte d’Azur. From 1960, the museum 
                    has allowed you to see this historic heritage, and even touch and try some of the exhibits, such as a fragment 
                    of Roman armor.</p>
                    <p class="poi-text">It is worth noting that the museum stands on the location of the ancient Roman city of Cemenelum. In addition 
                    to the exhibition in the building, you can also admire the ruins of the ancient bath-house from the third century. 
                    The most impressive remains are of the frigidarium, a room that contained a pool of cold water.</p>`,
        request: {
            placeId: "ChIJs1YSxFHFzRIRv7otGUG4rso",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Cimiez Monastery marker
    let markerCimiezMonastery = {
        lat:43.71998, 
        lng: 7.27881,
        title: `The Monastery of Cimiez`,
        description: `<h3 class="poi-sub-heading">Brother Marc and the history of San Francisco.</h3>
                    <!-- Text from https://fr.wikipedia.org/wiki/Monast%C3%A8re_de_Cimiez-->
                    <p class="poi-text">The monastery of Cimiez was founded in the VIII<sup>th</sup> century by the Benedictine Order, 
                    and was rebuilt by the monks of the Abbey of Saint-Pons. It brings together the Church of Our Lady of the Assumption 
                    (XV<sup>th</sup> century) and the Franciscan museum that traces the Franciscan way of life in Nice from the XIII<sup>th</sup> century.</p>
                    <p class="poi-text">The most famous of the Franciscans of Nice is Brother Marc who became <strong><i>fray Marcos de Niza</i></strong> 
                    and gave, it is said, the name of the founder of his order to the site of the future city of San Francisco (California).</p>
                    <p class="poi-text">Since 1546 , it has been occupied by the Franciscans.</p>
                    <p class="poi-text">While here, be sure also to pay your respects to Henri Matisse, who is buried in the cemetary.</p>`,
        request: {
            placeId: "ChIJ1ef2pk_FzRIRhOkC-ZlEROI",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Notre Dame marker
    let markerNotreDame = {
        lat:43.703672, 
        lng: 7.265758,
        title: `Notre-Dame de l’Assomption Basilica`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJxXBGAAjQzRIRooxQYPogkFs",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Russian Cathedral marker
    let markerRussianCathedral = {
        lat:43.703810, 
        lng: 7.253920,
        title: `St. Nicholas Russian Orthodox Cathedral`,
        description: `<h3 class="poi-sub-heading">The <i>Musée Matisse</i> is one of the must-see museums for any visitor to Nice.</h3>
                    <!-- Text from http://www.nicetrotter.fr/art-musee-matisse-de-nice-cimiez-125.html and http://www.musee-matisse-nice.org/ -->
                    <p class="poi-text">Inaugurated in 1963 on the second floor of the Villa des Arènes, situated within the 
                    archeological site in Cimiez, the Musée Matisse holds the artist's and his heirs' gifts to the 
                    City of Nice.</p>
                    <p class="poi-text">The museum's permanent collection includes nearly 70 paintings and cut-out <i>gouaches</i>, more than 200 
                    drawings, engravings, almost all of the artist's sculptures, illustrated books, around a hundred 
                    photographs and objects that belonged to the painter.</p>
                    <p class="poi-text">The Musée Matisse is part of a vast patrimonial complex of the Cimiez site that includes the Roman 
                    arenas and ruins, a garden with hundred-year old olive trees, as well as the Cimiez monastery.</p>`,
        request: {
            placeId: "ChIJnwGbfqDazRIR4rkavLt2r3U",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
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
                    $("#attraction").get(0).scrollIntoView();
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

        markers = locations.map(function(location, i) {
            let marker = new google.maps.Marker({
                position: location
            });
        });
    }
}

//---------------------------------------------------------------------------------------------------- jQuery
//-------------------------------------------------- Hide map on page load
    $(function() {
        $("#instructions-for-map").hide()
        $("#map-container").hide();
        $("#reviews").hide();
    })

//-------------------------------------------------- Show map on description buttons
    $(".btn-global-description").on("click", function() {
        $("#instructions-for-map").show()
        $("#map-container").show();
        $("#reviews").hide();
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




