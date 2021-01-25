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
    //Red Carpet marker
    let markerRedCarpet = {
        lat: 43.551022, 
        lng: 7.017962,
        title: `The Red Carpet in Cannes`,
        description: `<h3 class="poi-sub-heading">Selfies and selfies... just like the stars!</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Palais_des_Festivals_et_des_Congr%C3%A8s -->
                    <p class="poi-text">The <i>Palais des Festivals et des Congrès</i> (Palace of Festivals and Conferences) is the venue for the Cannes Film Festival, the Cannes 
                    Lions International Festival of Creativity and the NRJ Music Award.</p>

                    <p class="poi-text">The first <i>Palais des Festivals et des Congrès</i> was built in 1949 to host the Cannes Film Festival. The original building was located 
                    on the boulevard of <i>Promenade de la Croisette</i> on the present site of the JW Marriott Cannes. That building hosted the 4th and 6th Eurovision Song Contests 
                    in 1959 and 1961.</p>

                    <p class="poi-text">In response to the growing success of the Film Festival and the advent of the first business conventions, such as the MIPTV Media Market since 
                    1965, the City of Cannes decided to build a new Palais in 1979. The new building, a six-story building designed in the Modernist style by the architects Sir Hubert 
                    Bennett and François Druet, was constructed on the site of the municipal Casino. It opened in December 1982 and was expanded in 1999 with the construction of the 
                    <i>Espace Riviera</i>, a new space of 10,000 square meters.</p>`,
        request: {
            placeId: "ChIJuzM38JGBzhIRecDMS2ZUua8",
            fields: ["reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Juan les Pins Jazz marker
    let markerJazzAtJuan = {
        lat: 43.566970, 
        lng: 7.115160,
        title: `Juan les Pins`,
        description: `<h3 class="poi-sub-heading">🎶 "You talk like Marlene Dietrich..." 🎶</h3>
                    <!-- Text from https://www.fragonard.com/en/about-fragonard -->
                    <p class="poi-text">Situated west of the town of Antibes on the western slope of the ridge, halfway to the old fishery village of Golfe-Juan 
                    (where Napoleon landed in 1815), it had been an area with many stone pine trees (<i>pins</i> in French), where the inhabitants of Antibes used 
                    to go for a promenade, for a picnic in the shadow of the stone pine trees or to collect tree branches and cones for their stoves.</p>

                    <p class="poi-text">The village was given the name Juan-les-Pins on 12 March 1882. The spelling Juan, used instead of the customary French spelling, 
                    Jean, derives from the local Occitan dialect. Other names discussed for the town include Héliopolis, Antibes-les-Pins and Albany-les-Pins (after the 
                    Duke of Albany, the fourth son of Queen Victoria).</p>

                    <p class="poi-text">Peter Sarstedt famously mentions Juan-les-Pins in his 1969 UK number one hit, "<strong>Where Do You Go To (My Lovely)</strong>"; a 
                    portrait of a girl who becomes a member of the Euro jet-set. The song mentions that the girl spends her summer vacations in Juan-les-Pins.</p>`,
        request: {
            placeId: "ChIJu8ReKIt_zhIR1lcaVZ9u7Bw",
            fields: ["photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Eden Roc marker
    let markerEdenRoc = {
        lat: 43.549169, 
        lng: 7.121597,
        title: `Hôtel du Cap Eden Roc`,
        description: `<h3 class="poi-sub-heading">Only the best...</h3>
                    <!-- Text by self and https://en.wikipedia.org/wiki/Hotel_du_Cap -->
                    <p class="poi-text">The <i>Hôtel du Cap-Eden-Roc</i> is a resort hotel in Antibes on the French Riviera. Built in 1869 as a private mansion, 
                    it opened as a hotel in 1887.</p>

                    <p class="poi-text">The founder of France's Le Figaro newspaper, Hippolyte de Villemessant, built the <i>Villa Soleil</i> in 1869 for writers seeking 
                    inspiration. In 1887, Italian hotelier Antoine Sella bought the property, and opened the <i>Grand Hôtel du Cap</i> in 1889. In 1914, the <i>Eden Roc pavillon</i> 
                    was built 400 yards away from the main hotel. Gerald and Sara Murphy, a young American couple who had expatriated to France in the 1920s, once rented the hotel 
                    for an entire summer, a unique event for the era as the French Riviera was not a summer destination at the time, but a winter escape for the wealthy. 
                    With the Murphys came many writers and artists of the Lost Generation, including F. Scott Fitzgerald and Ernest Hemingway. Fitzgerald immortalized it as the 
                    <i>Hôtel des Etrangers</i> in <strong>Tender Is the Night</strong>. Marc Chagall made sketches in one of the shady beachside cabanas after their construction 
                    in the 1960s.[1] The Kennedy family summered here in 1938 when John F. Kennedy was 21 years old. Guests included Marlene Dietrich, Orson Welles, the Duke and 
                    Duchess of Windsor, Winston Churchill and Charles De Gaulle. Elizabeth Taylor and Richard Burton conducted an affair and honeymooned there. The hotel 
                    has traditionally been a particular favourite of film stars, especially during the annual Cannes Film Festival.</p>

                    <p class="poi-text">Famously, for many years the hotel did not accept credit cards. Cash only was accepted, though most guests wired money ahead of their stay.</p>`,
        request: {
            placeId: "ChIJgUQSbb1_zhIRaXQjX38vUD8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Marché d'Antibes marker
    let markerMarketAntibes = {
        lat: 43.581322, 
        lng: 7.127588,
        title: `Marché Provençal d'Antibes`,
        description: `<h3 class="poi-sub-heading">Only the most authentic produce of the region.</h3>
                    <!-- Text by self and https://www.antibesjuanlespins.com/en/must-see-must-do/the-markets -->
                    <p class="poi-text">Every day is a warm celebration. The Provençal market sets out each morning its rich stalls, a festival of fragrances and accents, 
                    and offers an infinite diversity of fresh regional produce: delicatessen and cheese from the mountains, specialities, spices and bouquets of cut or 
                    dried flowers, the fruit of men's labour and nature's generosity.</p>

                    <p class="poi-text">Jacques the cheesemonger, Dominique the florist, Denis the fisherman, Michel, Marina and Marielle the market gardeners, Tony and his 
                    Corsican products... Immortal characters, each of them! They are all in place every morning (except Mondays from 1st September to 31st May), in the covered 
                    hall, cours Masséna, from 6am to 1pm (1.45pm in July & August)</p>

                    <p class="poi-text">While in the afternoon, painters, sculptors of all kinds, ceramists and others artists exhibit their work in the shade of the market hall, 
                    From September to mid-June, every Friday, Saturday and Sunday from 3 pm. From mid-June to the end of September, every day except Mondays</p>`,
        request: {
            placeId: "ChIJ2ehIqHHVzRIRHAKd30wbdAU",
            fields: ["reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Port Vauban marker
    let markerBillionairesQuay = {
        lat: 43.585697, 
        lng:7.129433,
        title: `Port Vauban, Antibes`,
        description: `<h3 class="poi-sub-heading">Pay your respects to Grace Kelly, Princess of Monaco.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Port_Vauban -->
                    <p class="poi-text"><i>Port Vauban</i> is a French yachting harbor located in Antibes on the French Riviera. Originally a natural 
                    harbour in use since before the Roman Empire, the port was fortified by Sébastien Le Prestre, Seigneur de Vauban, later Marquis de Vauban, 
                    King Louis XIV's military engineer.</p>

                    <p class="poi-text">The oort now serves as the home of the Yacht Club d'Antibes and is the largest marina (in terms of total tonnage of the 
                    boats and yachts moored there) in the Mediterranean Sea. Some of the world's largest and most lavishly appointed yachts have <i>Port Vauban</i> 
                    as their home port, including Russian oil businessman Roman Abramovich's 86 m <strong>Ecstasea</strong> and his gift to fellow Russian businessman Eugene Shvidler 
                    (<strong>Le Grand Bleu</strong>). Co-founder of Microsoft Paul Allen's yacht Octopus was a regular visitor to the harbor.</p>

                    <p class="poi-text">In the early part of the 20th century, Port Vauban also accommodated numerous seaplanes and a seaplane manufacturer.</p>
                    
                    <p class="poi-text">As of 2012, typical rates for a berth in Port Vauban are between €1m to €1.4m. Perhaps this is why <i>Port Vauban</i> has been nicknamed 
                    "The Billionaire's Quay"!</p>`,
        request: {
            placeId: "ChIJGVCg6XLVzRIRi7g-OZ9HNj0",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }


    //Colombe d'Or marker
    let markerColombedOr = {
        lat: 43.698967, 
        lng: 7.121971,
        title: `Colombe d'Or Hotel`,
        description: `<h3 class="poi-sub-heading"><i>"La Provence a un trésor; c'est une Colombe d'Or"</i>: César.</h3>
                    <!-- Text from http://www.la-colombe-dor.com/history.html -->
                    <p class="poi-text">The <i>Colombe d’Or</i> started life in 1920 as “<i>Chez Robinson</i>”, a café bar with an open air-terrace where people 
                    would dance at weekends. It soon attracted characters from the neighbourhood, which gave the idea to Paul with the support of his wife Baptistine “Titine”, 
                    to extend and reopen as the Colombe d’Or, an inn of 3 rooms. The friendly atmosphere together with Paul’s deep interest in the arts brought the 
                    visit of many artists and the walls were soon covered by paintings, which often were exchanged for a stay or a few meals.</p>

                    <p class="poi-text">In 1940 the south became the “free zone” and a whole variety of thinkers and artists moved to the <i>Cote d’Azur</i> turning the 
                    <i>Colombe d’Or</i> into one of their places to meet. Jacques Prevert for instance, on the set of Carnet’s “<strong>Devils Envoys</strong>” lodged at 
                    the hotel and somehow never left, he moved to the village and became Paul’s close friend. The careful expansion continued with the facade being 
                    assembled with stones from an old castle in Aix-en-Provence and the architect Jacques Couelle designing a fireplace with the hand imprints of the 
                    people who helped to build it.</p>

                    <p class="poi-text">The end of the war saw the arrival of the international crowd and the new friendships between Paul’s son Francis and new visitors: Yves Montand, 
                    Lino Ventura, Serge Reggiani. Francis married Yvonne a young women of Danish origin and together they followed in Paul’s steps, commissioning amongst 
                    other things a colourful ceramic by Fernand Leger for the terrace. The fifties were the time of Miro, Braque, Chagall, followed by the time of Calder, 
                    Cesar and all the others, it is also, in 1951, the story of Montand and Simone Signoret and their wedding in Saint-Paul.</p>

                    <p class="poi-text">The art collection has grown years after years until today; the latest work installed is a large ceramic by the Irish artist Sean Scully for the swimming pool 
                    area.</p>
                    
                    <p class="poi-text>And the Roux family continues to take care of the <i>Colombe d’Or</i>.</p>`,
        request: {
            placeId: "ChIJte-o8r3TzRIRctSqoeqmU38",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Folon Chapel marker
    let markerFolonChapel = {
        lat: 43.697077, 
        lng: 7.122446,
        title: `"Folon Chapel"`,
        description: `<h3 class="poi-sub-heading">“Creating something spiritual, trying to understand the deep meaning of a place, is a real joy”: Folon.</h3>
                    <!-- Text from http://static.apidae-tourisme.com/filestore/objets-touristiques/documents/202/131/4948938.pdf -->
                    <p class="poi-text">Jean-Michel Folon died in 2005; decorating the <i>chapelle des Pénitents Blancs</i> was one of his last projects. Visiting this chapel, 
                    one discovers admirable works designed by the Belgian artist: a mosaic, stained glass windows, sculptures and paintings, all embellishing the walls and the 
                    ceiling of the chapel.</p>

                    <p class="poi-text">One also gets to know an artist who developed a bond with Saint-Paul de Vence over thirty years. The close links that Folon nurtured with 
                    the craftsmen, his work on the stained glass and sculptures, his fascination with light, are all keys that enable us to decode his world and his definition of 
                    art.</p> 
                    <p class="poi-text">Folon’s thoroughly modern project is embraced by a building that is several centuries old. Your visit is also a journey of discovery featuring 
                    the brotherhood of the <i>Pénitents Blancs</i> of Saint-Paul de Vence; the walls that today host the works of Jean-Michel Folon housed the brotherhood for almost 
                    three centuries.</p>`,
        request: {
            placeId: "ChIJtX_8iu7SzRIR5cSlLriQfF0",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Hotel de Paris marker
    let markerFontaine = {
        lat: 43.696588, 
        lng: 7.122063,
        title: `La Place de la Grande Fontaine`,
        description: `<h3 class="poi-sub-heading">""The fountain's silvery murmur plays on": Verlaine.</h3>
                    <!-- Text from https://www.saint-pauldevence.com/en/history/ and self -->
                    <p class="poi-text">The fountain at the heart of the village fills St-Paul's medieval vaults with music.</p>

                    <p class="poi-text">Redesigned in the 17th and again in the 19th century, this square has always been the busiest spot in the village. From dawn until 
                    dusk villagers would come to fetch water, donkeys and mules would drink, and washerwomen would scrub and beat their laundry in the washhouse. The square 
                    also hosted the weekly market in the 17th century.<p>

                    <p class="image-credit"><strong>Image:</strong> 
                    <a href="https://upload.wikimedia.org/wikipedia/commons/d/db/Saint_Paul_de_Vence_sa_fontaine_-_Jean-Charles_GUILLO.jpg" target="_blank">Jean-Charles GUILLO, Public domain, via Wikimedia Commons</p>`,
        request: {
            placeId: "ChIJAbdAzcXTzRIRkxjuaaECH1U",
            fields: ["name", "reviews", "rating", "website", "place_id", "formatted_address"]
        }, 
        img: new URL("https://upload.wikimedia.org/wikipedia/commons/d/db/Saint_Paul_de_Vence_sa_fontaine_-_Jean-Charles_GUILLO.jpg")
    }

    //Café de Paris marker
    let markerRamparts = {
        lat: 43.696088, 
        lng: 7.122934,
        title: `The Ramparts`,
        description: `<h3 class="poi-sub-heading">A mediaeval stronghold.</h3>
                    <!-- Text from https://www.saint-pauldevence.com/en/fiches/monuments/town-wall-16th-c/ -->
                    <p class="poi-text">Saint-Paul de Vence's bastioned fortifications hug the contours of the rocky spur on which the village stands. Curtain walls and bastions 
                    were constructed on the order of François I in the 1540s, forming a one-kilometre perimeter that has undergone only slight modifications since the 16th century. 
                    They were designed by Jean de Saint-Rémy, Commander of the Artillery and an expert in fortifications. His name first cropped up in the 1530s, when François I 
                    sent him on missions in the south of the kingdom - Marseille, Antibes, Arles and Beaucaire</p>

                    <p class="poi-text">Interestingly, the ramparts in Saint-Paul de Vence were among the very first bastioned fortifications erected in France to have been 
                    designed by a French architect.</p>

                    <p class="poi-text">Constructing the ramparts completely changed the physiognomy of the village, as several dozen houses had to be demolished in the process. 
                    The archives state that almost 450 inhabitants were forced to leave Saint-Paul de Vence. The hamlets they founded later became the communes of La Colle-sur-Loup 
                    and Roquefort-les-Pins.</p>
                    
                    <p class="poi-text">In 1872, after the Mayor of the time had sold the walls for ballast, the commune bought back the bastioned walls of Saint-Paul de Vence. 
                    They were declared a Listed Historical Monument in 1945. Today, they are the jewel in the village's historical crown.</p>`,
        request: {
            placeId: "ChIJQekRjCnTzRIRp6L7Xma0DD8",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Grand Prix de Monaco Monte-Carlo
    let markerChagall = {
        lat: 43.694862, 
        lng: 7.123162,
        title: `Tomb of Marc Chagall (No. 152)`,
        description: `<h3 class="poi-sub-heading">From Vitebsk to St-Paul-de-Vence</h3>
                    <!-- Text from https://www.saint-pauldevence.com/en/history/celebrities/marc-chagall-vitebsk-saint-paul-de-vence/ -->
                    <p class="poi-text">Marc Chagall travelled the world his whole life long. Exile and exploration took him from the banks of the Vivna to the shores of the 
                    Mediterranean, from the western wall in Jerusalem to the ramparts of Saint-Paul de Vence.</p>

                    <p class="poi-text">Born in Vitebsk, in Belarus in July, 7th 1887 into a traditional Jewish family. His father worked in a herring depot and his mother ran a 
                    modest grocery store. In 1907, Marc Chagall moved to Saint- Petersburg, where he enrolled in several academies before working in the studio of Léon Bakst. In 
                    1910 he made his first trip to Paris. Marc Chagall was granted French citizenship in 1937. During WWII, he and his family went into exile in the United States. 
                    In 1948, Chagall returned to Paris before moving to the French Riviera in 1949.</p>

                    <p class="poi-text">In 1949, Chagall bought a house in Vence close to the Matisse chapel. At the time, the French Riviera was an incredible <i>cebtre d'arts</i> 
                    frequented by many artists such as Matisse, Picasso, Magnelli, Léger. In 1962, Chagall decorated one of the chapels of the <i>Notre Dame de la Nativité</i> cathedral. 
                    He made a colourful mosaic featuring Moses saved from the waters. From the end of the 1950’s, he participated to the project of creation of the Maeght Foundation 
                    that opened in 1964 in Saint-Paul de Vence.</p>
                    
                    <p class="poi-text">It was in 1966 that Marc and Bella Chagall settled in a house they had had built in Saint-Paul de Vence’s countryside. It’s name was 
                    “<i>La Colline</i>”, and it is situated at <i>Chemin des Gardettes</i> (private property nowdays). That house was especially conceived for work : even though 
                    Chagall was almost 80, he was very in demand and regularly commissioned : the stained-glass windows for the Reims cathedral (Champagne, France), tapestries for 
                    the Knesset in Jerusalem, stained-glass windows for the Art Intitute of Chicago. He also fashioned ceramics at the Madoura Studio in Vallauris… In Saint-Paul de 
                    Vence, you could see Marc Chagall at the <i>Colombe d’Or</i> or at the <i>Café de la Place</i>, with his friends. Among them, Aimé et Marguerite Maeght who were 
                    Chagall’s neighbours. The works of Marc Chagall occupy a huge place in the collection of the Maeght Fondation: “<strong>The lovers</strong>” in the garden and 
                    “<strong>La vie</strong>”, a monumental painting.</p>
                    
                    <p class="poi-text">Marc Chagall passed away in March, 28th, 1985. He rests in the cemetery of Saint-Paul de Vence, overlooking the Mediterranean sea.</p>`,
        request: {
            placeId: "ChIJWY1go-_SzRIRDkb7U7XLmLw",
            fields: ["reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //---------------------------------------------------------------------------------------------------- Markers
    locations = 
        [
            markerRedCarpet,
            markerJazzAtJuan,
            markerEdenRoc, 
            markerMarketAntibes,
            markerBillionairesQuay,
            markerColombedOr,
            markerFolonChapel,
            markerFontaine,
            markerRamparts,
            markerChagall
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
            $("#attraction").get(0).scrollIntoView();
            service.getDetails(locations[i].request, (place, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
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
                    
                    if (placeName === undefined) {
                        document.getElementById("poi-title-name").append(locations[i].title)
                    } else {
                        document.getElementById("poi-title-name").append(placeName)
                    }

                    if (place.hasOwnProperty("photos") === false){
                        console.log("No photos");
                        let photoURL = locations[i].img;
                        imgURL = document.createElement("img");
                        imgURL.setAttribute("src", photoURL);
                        imgURL.setAttribute("class", "img")
                        document.getElementById("attraction-image").appendChild(imgURL);
                    } else {
                        let photoUrl = place.photos[0].getUrl();
                        img = document.createElement("img");
                        img.setAttribute("src", photoUrl);
                        img.setAttribute("class", "img")
                        document.getElementById("attraction-image").appendChild(img);
                    };

                    if (place.hasOwnProperty("reviews") === false){
                        console.log("No reviews");
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
    })

//-------------------------------------------------- Show map on description buttons
    $(".btn-global-description").on("click", function() {
        $("#instructions-for-map").show()
        $("#map-container").show();
        $("#reviews").hide();
    })

//-------------------------------------------------- Section (Buttons) Zooms
//Cannes Zoom
$(".btn-red-carpet").on("click", function () {
    $("#map-container").css("height", "500px");
    $("#map-canvas").css("height", "500px");
    $(".global-info").css("display", "none");
    $("#red-carpet").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(15);
        map.setCenter({ lat: 43.550983, lng: 7.017951 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.550983, lng: 7.017951 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.550983, lng: 7.017951 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.550983, lng: 7.017951 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.550983, lng: 7.017951 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Coastal Drive Zoom
$(".btn-coastal-drive").on("click", function () {
    $("#map-container").css("height", "800px");
    $("#map-canvas").css("height", "800px");
    $(".global-info").css("display", "none");
    $("#coastal-drive").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(14);
        map.setCenter({ lat: 43.572476, lng: 7.119458 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.572476, lng: 7.119458 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.572476, lng: 7.119458 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.572476, lng: 7.119458 })
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(14);
        map.setCenter({ lat: 43.572476, lng: 7.119458 })
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//St Paul Zoom
$(".btn-st-paul-de-vence").on("click", function () {
    $("#map-container").css("height", "800px");
    $("#map-canvas").css("height", "800px");
    $(".global-info").css("display", "none");
    $("#st-paul-de-vence").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(17);
        map.setCenter({ lat: 43.696978, lng: 7.122033 });
    };
    if ((document.documentElement.clientWidth >= 1024) && (document.documentElement.clientWidth < 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.696978, lng: 7.122033 });
    };
    if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth < 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.696978, lng: 7.122033 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth < 768)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.696978, lng: 7.122033 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(17);
        map.setCenter({ lat: 43.696978, lng: 7.122033 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
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




