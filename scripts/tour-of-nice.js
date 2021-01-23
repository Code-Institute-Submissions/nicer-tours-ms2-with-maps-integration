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
            placeId: "ChIJyRztG1fRzRIRBeFRpvLFAW4",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Place Masséna marker
    let markerPlaceMassena = {
        lat: 43.697400, 
        lng: 7.270230,
        title: `Place Masséna`,
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
            placeId: "ChIJR3WTsbzazRIR0c2V-rSfWDo",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }


    //Castle Hill marker
    let markerCastleHill = {
        lat: 43.694835, 
        lng: 7.281103,
        title: `Castle Hill`,
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
            placeId: "ChIJ87pSBQHQzRIR7gulsDlUpa8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Rauba-Capeù Memorial marker
    let markerRaubaCapeu = {
        lat:43.693849, 
        lng: 7.281250,
        title: `WWI Memorial "Rauba-Capeù"`,
        description: `<h3 class="poi-sub-heading">The <strong>"Hat Thief"</strong> memorial to Nice's fallen soldiers.</h3>
                    <!-- Text from https://en.nicetourisme.com/nice/74-quai-rauba-capeu and myself -->
                    <p class="poi-text">At the foot of Castle Hill, the Promenade becomes the <i>Quai des États-Unis</i> along the old town, then 
                    <i>Rauba Capeu</i>, which offers one of the finest vistas on the Mediterranean Sea and the beautiful blue and ochre nuances along the Prom.</p>
                    <p class="poi-text">The memorial is named in the <i>niçois</i> dialect. It's translation is "the hat thief" as is so named as it is built upon the windiest 
                    spot in Nice. At the time of its construction, it was very much the <i>Belle Epoque</i> era, with the ladies wearing bonnets and the gentlemen hats.</p>
                    <p class="poi-text">Often, as they walked the corner from the port to the Prom, the wind would whip up and steal their hats... thus the name of the memorial.</p>
                    <p class="poi-text">Only in France would you find such a romantic name for such a serious monument!</p>`,
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
        description: `<h3 class="poi-sub-heading">That <strong><i>most</i></strong> Mediterranean of ports</h3>
                    <!-- Text from https://en.nicetourisme.com/by-boat and self -->
                    <p class="poi-text">The Port of Nice, surrounded by 18th-century buildings in the Genoese style, is actually named Port Lympia. 
                    The architectural complex seems inspired by the Italian Renaissance and influenced by the baroque urban planning of Turin.</p>
                    <p class="poi-text">With over 530 berths, 24 of which are reserved for yachts over 25m long (one of which for many years was the home 
                    berth of <i>Octopus</i>, a 126m yacht owned by the late Paul Allen, one of the founders of Microsoft).<p>
                    <p class="poi-text">Once the estuary of the Lympia spring, the river was diverted when construction of the port commenced in 1700.</p>`,
        request: {
            placeId: "ChIJ33og2r7azRIRKnGqChlyI5g",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Nice View Point marker
    let markerBayOfAngelsView = {
        lat:43.689128, 
        lng: 7.296206,
        title: `Belvedére du Mont Boron`,
        description: `<h3 class="poi-sub-heading">Simply breathtaking!</h3>
                    <!-- Text from self -->
                    <p class="poi-text">Offering unrivalled views over the Bay of Angels, the viewpoint of the <i>Belvedére du Mont Boron</i> is a view 
                    that should be on everyone's bucket list!</p>
                    <p class="poi-text">The colours, the light, the bay, the city... all combine to take your breath away.</p>
                    <p class="poi-text">Words cannot describe this view. It has to be seen to be believed!</p>`,
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
        description: `<h3 class="poi-sub-heading">Neo-Gothic church famous for its large rose window, and colourful stained-glass windows.</h3>
                    <!-- Text from https://www.iberia.com/es/destination-guide/nice/basilique-notre-dame-de-lassomption/ -->
                    <p class="poi-text">The similarity between this building and the Cathedral of Notre- Dame in Paris is more than obvious, 
                    but that doesn't stop it from standing as a real symbol of Nice. In fact, this basilica is the largest in the city, and it's even 
                    bigger than the city's cathedral.</p>
                    <p class="poi-text">Built in a neo-Gothic style, it was erected during 1868, according to the design by Louis Lenormand. 
                    The two square towers that support the facade measure 31 metres tall, and between these is a beautiful rose window that shows scenes of the 
                    Assumption of Mary (of whom it's named after).</p>
                    <p class="poi-text">The absence of a large number of sculptures at the main entrance is curious, but the lack of funds during its construction 
                    forced it to be decorated in a much more modest fashion. However, its lack of spires is a deliberate architectural choice!</p>`,
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
        description: `<h3 class="poi-sub-heading">The largest Eastern Orthodox cathedral in Western Europe.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Russian_Orthodox_Cathedral,_Nice and self -->
                    <p class="poi-text">Beginning in the mid-19th century, Russian nobility visited Nice and the French Riviera, following the 
                    fashion established decades earlier by the English upper class and nobility. In 1864, immediately after the railway reached Nice, 
                    Tsar Alexander II visited by train and was attracted by the pleasant climate. Thus began an association between Russians and the 
                    French Riviera that continues to this day.</p>
                    <p class="poi-text">The cathedral, consecrated in December 1912 in memory of Nicholas Alexandrovich, Tsarevich of Russia, who died in 
                    Nice, was meant to serve the large Russian community that had settled in Nice by the end of the 19th century, as well as devout visitors 
                    from the Imperial Court. Tsar Nicholas II funded the construction work.</p>
                    <p class="poi-text">After 1917, Communist persecution of religion in Russia led some Russian Orthodox dioceses abroad to form jurisdictions 
                    not affiliated with Moscow. One of these, the Paris-based exarchate, later assumed control of the Nice Cathedral.</p>
                    <p class="poi-text">Since 2013, the cathedral has been the property of the Russian Federation. Effectively, as you visit the cathedral and its park, 
                    you are in Russia!</p>`,
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
        map.setCenter({ lat: 43.692594, lng: 7.290852 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.692594, lng: 7.290852 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.692008, lng: 7.290724 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.693256, lng: 7.290468 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(14);
        map.setCenter({ lat: 43.692460, lng: 7.289742 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Cimiez zoom
$(".btn-cimiez").on("click", function () {
    $(".global-info").css("display", "none");
    $("#cimiez").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.720127, lng: 7.276652 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(18);
        map.setCenter({ lat: 43.720127, lng: 7.276652 });
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




