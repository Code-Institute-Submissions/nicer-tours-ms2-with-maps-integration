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
        description: `<h3 class="poi-sub-heading">From Nietzsche to Disney....</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/%C3%88ze -->
                    <p class="poi-text">This small mediaeval village is famous for its beauty and charm. Its many shops, art galleries, hotels and restaurants attract a 
                    large number of tourists and honeymooners. As a result, Èze has become dubbed by some a <i>village-musée</i>, a "museum village", as few residents of 
                    local origin live here. From Èze there are gorgeous views of the Mediterranean Sea. </p>
                    <p class="poi-text">Eze is famous worldwide for the view of the sea from its hill top. Its <i>Jardin botanique d'Èze</i> (botanic garden) is known for its 
                    collection of cacti and succulents, as well as its panoramic views. Walt Disney spent a significant amount of time in Èze, as did the philosopher, 
                    Friedrich Nietzsche.</p>
                    <p class="poi-text">Although the village dates back 2000 years, the oldest building standing today in the village is the <i>Chapelle de la Sainte Croix</i> which 
                    dates back to 1306. Members of the lay order of the White Penitents of Èze, in charge of giving assistance to plague victims, would hold their meetings there. 
                    The shape of the bell-turret is an indication that the village once belonged to the Republic of Genoa.</p>`,
        request: {
            placeId: "ChIJ041rEmbDzRIRDv-yg_yyS6g",
            fields: ["reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Parfumerie Fragonard marker
    let markerFragonard = {
        lat: 43.729799, 
        lng: 7.363225,
        title: `Parfumerie Fragonard`,
        description: `<h3 class="poi-sub-heading">A passionate dedication...</h3>
                    <!-- Text from https://www.fragonard.com/en/about-fragonard -->
                    <p class="poi-text">It was shortly before the First World War that Eugène Fuchs, an entrepreneur at heart who had already 
                    been seduced by the magic of perfume, decided to set up his own perfumery based on the novel concept of selling perfumery 
                    products directly to the tourists who were beginning to discover the French Rivera’s charms. Parfumerie Fragonard was opened 
                    in 1926. Eugène Fuchs chose to name it after the famous Grasse-born painter, Jean-Honoré Fragonard (1732-1806), as a tribute 
                    to both the town of Grasse and to the refinement of 18th-century arts. Similarly, the choice of name expressed his desire to 
                    run his business in accordance with traditions.</p>
                    <p class="poi-text">This spirit has been loyally perpetuated by the three succeeding generations who have run and are still 
                    running the company. At their instigation new production plants and sales outlets have opened in Grasse, Eze and also Paris.</p>
                    <p class="poi-text">It was under the tenure of Jean-Francois Costa that the Parfumerie Fragonard went through a rapid expansion 
                    and modernization. As an avid art collector, during the 1970’s he amassed a large and unique collection of antique perfume related 
                    items that has both enriched the Fragonard and given the town of Grasse a new cultural dimension.</p>
                    <p class="poi-text">Today, Jean-François Costa's daughters, Agnès and Françoise preside over the perfumery's destiny, and are as 
                    concerned as the preceding generations with continuing to build the company while adapting it to current market needs and desires.</p>`,
        request: {
            placeId: "ChIJyRrwPGbDzRIRX0TKPUar-e8",
            fields: ["reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }
    
    //Monaco Panorama marker
    let markerPanoramaMonaco = {
        lat: 43.731520, 
        lng: 7.402095,
        title: `The Dog's Head Moutain`,
        description: `<h3 class="poi-sub-heading">To see is to believe... </h3>
                    <!-- Text by self and https://en.wikipedia.org/wiki/T%C3%AAte_de_Chien -->
                    <p class="poi-text">The <i>Tête de Chien</i> (Dog's Head) is a 550 m (1,804 ft) high rock promontory near the village of La Turbie in the Alpes-Maritimes 
                    department of France. It overlooks the Principality of Monaco, and is the highest point on the Grande Corniche road.</p>
                    <p class="poi-text">The American diplomat Samuel S. Cox, in his 1870 travel book Search for Winter Sunbeams in the Riviera, Corsica, Algiers and Spain 
                    wrote that the <i>Tête de Chien</i> more resembled a tortoise than a dog's head, and believed that its name was a corruption of '<i><strong>Tête de Camp</strong></i>', 
                    as it was where Caesar stationed his troops after the conquest of Gaul. Vere Herbert, the heroine of Ouida's 1880 novel Moths is described as living under the 
                    <i>Tête de Chien</i>, "...within a few miles of the brilliant Hell [that is Monaco].</p>
                    <p class="poi-text">In 1944, Leopold Bohm, a German defence company commander, was stationed on the <i>Tête de Chien</i> and saw a low flying airplane crash into 
                    the sea, which had been pursued by two other planes.Bohm's observation was on the day of the disappearance of the aviator Antoine de Saint-Exupéry (author of The 
                    Little Prince), and it has been speculated that Bohm saw the final flight of Saint-Exupéry.</p>
                    <p class="poi-text">Here is the only place in the world where you can see an entire country (Monaco) while standing on Earth!</p>`,
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
        description: `<h3 class="poi-sub-heading">Towering 85m out of the sea... Home of the Yellow Submarine</h3>
                    <!-- Text by self and https://en.wikipedia.org/wiki/Oceanographic_Museum_of_Monaco -->
                    <p class="poi-text">The Oceanographic Museum was inaugurated in 1910 by Monaco's modernist reformer, Prince Albert I. Jacques-Yves 
                    Cousteau was director from 1957 to 1988, whose submarine which inspired The Beatles is on display at the entrance to the museum.</p>
                    <p class="poi-text">The museum is home to exhibitions and collections of various species of sea fauna (starfish, seahorses, turtles, 
                    jellyfish, crabs, lobsters, rays, sharks, sea urchins, sea cucumbers, eels, cuttlefish etc.). The museum's holdings also include a great 
                    variety of sea related objects, including model ships, sea animal skeletons, tools, weapons etc., as well as a collection of material culture 
                    and ritual objects made from, or integrating materials such as pearls, molluscs and nacre</p>
                    <p class="poi-text">At the first floor, A Sailor’s Career showcases the work of Prince Albert I. It includes the laboratory from <i>l’Hirondelle</i>, 
                    the first of Prince Albert's research yachts. Observations made there led to an understanding of the phenomenon of anaphylaxis, for which 
                    Dr Charles Richet received the Nobel Prize in Physiology or Medicine in 1913.</p>
                    <p class="poi-text">An aquarium in the basement of the museum presents a wide array of flora and fauna. Four thousand species of fish and over 
                    200 families of invertebrates can be seen. The aquarium also features a presentation of Mediterranean and tropical marine ecosystems</p>`,
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
        description: `<h3 class="poi-sub-heading">Pay your respects to Grace Kelly, Princess of Monaco.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Cathedral_of_Our_Lady_Immaculate -->
                    <p class="poi-text">The <i>Cathédrale de Notre-Dame-Immaculée</i> (Cathedral of Our Lady Immaculate) or Saint Nicholas Cathedral 
                    is the cathedral of the Roman Catholic Archdiocese of Monaco, where many of the Grimaldis were buried, including Grace Kelly and — more 
                    recently — Prince Rainier III.</p>
                    <p class="poi-text">The cathedral was built in 1875–1903 and consecrated in 1911, and is on the site of the first parish church in 
                    Monaco built in 1252 and dedicated to Saint Nicholas. Of note are the retable (circa 1500) to the right of the transept, the Great 
                    Altar and the Episcopal throne in white Carrara marble.</p>
                    <p class="poi-text">Pontifical services take place on the major religious festivals, such as the Feast of Sainte Dévote (27 January) 
                    and the national holiday (19 November). On feast days and during religious music concerts, one can hear the magnificent four-keyboard 
                    organ, inaugurated in 1976. From September until June, “<i>Les Petits Chanteurs de Monaco</i>” and the singers of the Cathedral Choir 
                    School sing during Mass every Sunday at 10:00am. Mass is also celebrated here each year on 6 December, when primary children gather 
                    for a joyful remembrance of St. Nicholas' life.</p>`,
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
        description: `<h3 class="poi-sub-heading">700 years of rule.</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Prince%27s_Palace_of_Monaco -->
                    <p class="poi-text">The  <i>Palais princier de Monaco</i> (Prince's Palace of Monaco) is the official residence of the Sovereign Prince 
                    of Monaco. Built in 1191 as a Genoese fortress, during its long and often dramatic history it has been bombarded and besieged by many 
                    foreign powers. Since the end of the 13th century, it has been the stronghold and home of the Grimaldi family who first captured it in 
                    1297. The Grimaldi ruled the area first as feudal lords, and from the 17th century as sovereign princes, but their power was often 
                    derived from fragile agreements with their larger and stronger neighbours.</p>
                    <p class="poi-text">While other European sovereigns were building luxurious, modern Renaissance and Baroque palaces, politics and common 
                    sense demanded that the palace of the Monegasque rulers be fortified. This unique requirement, at such a late stage in history, has made 
                    the palace at Monaco one of the most unusual in Europe. Indeed, when its fortifications were finally relaxed during the late 18th century, 
                    it was seized by the French and stripped of its treasures, and fell into decline, while the Grimaldi were exiled for over 20 years.</p>
                    <p>The Grimaldis' occupation of their palace is also unusual because, unlike other European ruling families, the absence of alternative 
                    palaces and land shortages have resulted in their use of the same residence for more than seven centuries. Thus, their fortunes and politics 
                    are directly reflected in the evolution of the palace. Whereas the Romanovs, Bourbons, and Habsburgs could, and frequently did, build completely 
                    new palaces, the most the Grimaldi could achieve when enjoying good fortune, or desirous of change, was to build a new tower or wing, or, as 
                    they did more frequently, rebuild an existing part of the palace. Thus, the Prince's Palace reflects the history not only of Monaco, but of the 
                    family which in 1997 celebrated 700 years of rule from the same palace.</p>
                    <p>During the 19th and early 20th centuries, the palace and its owners became symbols of the slightly risqué glamour and decadence that were 
                    associated with Monte Carlo and the French Riviera. Glamour and theatricality became reality when the American film star Grace Kelly became 
                    a chatelaine of the palace in 1956. In the 21st century, the palace remains the residence of the current Prince of Monaco.</p>`,
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
        description: `<h3 class="poi-sub-heading">From ruin to riches...</h3>
                    <!-- Text from https://en.wikipedia.org/wiki/Monte_Carlo_Casino -->
                    <p class="poi-text">The idea of opening a gambling casino in Monaco belongs to Princess Caroline, a shrewd, business-minded spouse of Prince Florestan. 
                    Revenues from the proposed venture were supposed to save the House of Grimaldi from bankruptcy. The ruling family's persistent financial problems became 
                    especially acute after the loss of tax revenue from two breakaway towns, Menton and Roquebrune, which declared independence from Monaco in 1848 and refused 
                    to pay taxes on olive oil and fruit imposed by the Grimaldis.</p>
                    <p class="poi-text">However, he lack of roads needed to connect Monaco to Nice and the rest of Europe, and the absence of comfortable accommodations for 
                    visitors, as well as the concessionaires' failure to publicize the new resort, resulted in far fewer customers than was originally anticipated. </p>
                    <p class="poi-text">In 1878–79, the casino building was transformed and expanded to designs of Jules Dutrou and Charles Garnier, the architect who had 
                    designed the Paris opera house now known as the Palais Garnier. The alterations to the Casino de Monte Carlo included the addition of a concert hall 
                    (designed by Garnier and later named the Salle Garnier), located on the side of the casino facing the sea, and the redesign and expansion of the gaming 
                    rooms and public spaces, mostly carried out by Dutrou on the side of the casino facing the <i>Place du Casino</i>, where the <i>Hôtel de Paris Monte-Carlo</i> 
                    and the were also located.</p>
                    <p class="poi-text">Until recently, the Casino de Monte-Carlo has been the primary source of income for the House of Grimaldi and the Monaco economy.</p>
                    <p class="poi-text">In 1873, Joseph Jagger gained the casino great publicity by "breaking the bank at Monte Carlo" by discovering and capitalizing on a 
                    bias in one of the casino's roulette wheels. The 1892 song "<strong>The Man Who Broke the Bank at Monte Carlo</strong>", made famous by Charles Coborn, was probably inspired 
                    by the exploits of Charles Wells, who "broke the bank" on many occasions on the first two of his three trips.</p>
                    <p class="poi-text">Monaco and its casino were the locations for a number of James Bond movies, including <strong>Never Say Never Again</strong> and 
                    <strong>GoldenEye</strong>, as well as for the "<strong>Casino Royale</strong>" episode of the CBS's Climax! television show. The casino also served as a 
                    filming location for the 2004 film <strong>Ocean's Twelve</strong>.</p>`,
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
        description: `<h3 class="poi-sub-heading">The "James Bond Hotel"</h3>
                    <!-- Text from https://fr.wikipedia.org/wiki/H%C3%B4tel_de_Paris_Monte-Carlo, https://en.wikipedia.org/wiki/H%C3%B4tel_de_Paris_Monte-Carlo and self -->
                    <p class="poi-text">This prestigious palace was founded on the <i>Place du Casino</i> in Monte-Carlo by Prince Charles III of Monaco and François Blanc, 
                    from plans by the French architect Godinot de la Bretonnerie. It was inaugurated in 1864, next to the future <i>Place du Casino</i> (inaugurated: 1868), 
                    <i>Casino de Monte-Carlo</i> and <i>Opéra de Monte-Carlo</i> (1879), and <i>Hôtel Hermitage Monte-Carlo</i> (1896).</p>
                    <p class="poi-text">The facades by architect Édouard-Jean Niermans date from 1909-1910, with frescoes by painter Paul Gervais 2. Elevations of the 
                    building were completed in 1920 by the architects Émile Molinié, Charles Nicod and Albert Pouthier, then in 1959-1960 under the aegis of André Bruyère<p>
                    <p class="poi-text">The hotel has been featured in numerous films, including <strong>Confessions of a Cheat</strong> (1936), <strong>The Red Shoes</strong> (1948), 
                    <strong>Iron Man 2</strong> (2010), <strong>Monte Carlo</strong> (2011), and - of course! - two James Bond films; <strong>Never Say Never Again</strong> (1983) and 
                    <strong>GoldenEye</strong> (1995). It was also portrayed in the 2012 animated film <strong>Madagascar 3: Europe's Most Wanted</strong>. It was also a 
                    popular shooting location for photographer Helmut Newton.</p>`,
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
        description: `<h3 class="poi-sub-heading">Watching the cars go by!</h3>
                    <!-- Text from self -->
                    <p class="poi-text">Founded in 1868, at the same time as Monte Carlo, with its <i>Casino de Monte-Carlo</i> and the <i>Hôtel de Paris</i> by François Blanc 
                    and Prince Charles III of Monaco, it was originally baptized <i>Café Divan</i>. It was transformed several times until the 1930s, then completely renovated 
                    in 1988 in the <i>Belle Époque</i> style of the 1900s like the old Parisian bistros.</p>

                    <p class="poi-text">It has large modular terraces with an orchestra and views of the <i>Casino de Monte-Carlo</i> and the <i>Hôtel de Paris</i> and its daily show of prestigious 
                    cars, with the Bellevue lounge of 340 m2 (3,700 sq ft) on the first floor.</p>

                    <p class="poi-text">The Casino has gaming rooms of over 13,000 m2 (140,000 sq ft) in a setting inspired by the Historic Grand Prix of Monaco.</p>`,
        request: {
            placeId: "ChIJq78T54fCzRIRIC-tVNSO32g",
            fields: ["name", "reviews", "rating", "photos", "website", "place_id", "formatted_address"]
        }
    }

    //Grand Prix de Monaco Monte-Carlo
    let markerMCF1Route = {
        lat: 43.735732, 
        lng: 7.421280,
        title: `Grand Prix de Monaco Monte-Carlo Racetrack`,
        description: `<h3 class="poi-sub-heading">Vroom! Vroom!</h3>
                    <!-- Text from self -->
                    <p class="poi-text"><i>Le Circuit de Monaco</i> is a street circuit laid out on the city streets of Monte Carlo and La Condamine around the harbour 
                    of the principality of Monaco. It is commonly referred to as "Monte Carlo" because it is largely inside the Monte Carlo neighbourhood of Monaco.</p>

                    <p class="poi-text">The circuit is annually used on two weekends in May for Formula One Monaco Grand Prix and Formula E Monaco ePrix (odd years) or 
                    Historic Grand Prix of Monaco (even years). Formula One's respective feeder series over the years – Formula 3000, GP2 Series and today the Formula 2 
                    championship  – also visit the circuit concurrently with Formula One. The Monaco Grand Prix is one of the three events where victory counts towards 
                    the Triple Crown of Motorsport.</p>

                    <p class="poi-text">The idea for a Grand Prix race around the streets of Monaco came from Antony Noghès, the president of the Monegasque motor club, 
                    Automobile Club de Monaco, and close friend of the ruling Grimaldi family. The inaugural race was held in 1929 and was won by William Grover-Williams 
                    in a Bugatti.</p>
                    
                    <p class="poi-text">To date, only three local drivers have won a race at the Circuit. Louis Chiron did it at the non-championship 1931 Monaco Grand Prix; 
                    82 years later, Stefano Coletti crossed the line in first position at the sprint race of the 2013 Monaco GP2 Series round. The third driver to do so was 
                    Stéphane Richelmi at the sprint race of the 2014 Monaco GP2 Series round.</p>
                    
                    <p class="poi-text">Ayrton Senna famously burst onto the F1 scene with a storming performance in the rain-soaked 1984 race and holds the record for most 
                    wins at Monaco with six, including five consecutive victories between 1989-1993.</p>
                    
                    
                    <p class="image-credit"><strong>Image:</strong> 
                    <a href="https://commons.wikimedia.org/wiki/File:Circuit_de_Monaco_1950.png" target="_blank">Mario30095 via wikimedia</a>
                    License: <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons BY SA3.0</a></p>`,
        request: {
            placeId: "ChIJFemQ34zCzRIRy8P1MXirK_w",
            fields: ["name", "reviews", "rating", "website", "place_id", "formatted_address"]
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
            markerMCF1Route
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
                    let placeName = place.name;
                    if (placeName === undefined) {
                        document.getElementById("poi-title-name").append(locations[i].title)
                    } else {
                        document.getElementById("poi-title-name").append(placeName)
                    }

                    if (place.hasOwnProperty("photos") === false){
                        img = document.createElement("img");
                        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/e/e4/Circuit_de_Monaco_1986.png");
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
                    if (place.hasOwnProperty("website") == true) {
                        $(".more-info").append(`<a class="btn btn-light btn-block more-info" role="button" href="${placeWebsite}" target="_blank">Find Out More</a>`)

                    } else if (place.hasOwnProperty("website") == false){
                        $(".more-info").append(`<p class="btn btn-light btn-description btn-block more-info-button">No website available</a>`);
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
//Eze Zoom
$(".btn-eze").on("click", function () {
    $("#map-container").css("height", "600px");
    $("#map-canvas").css("height", "600px");
    $(".global-info").css("display", "none");
    $("#eze").css("display", "block");
    if (document.documentElement.clientWidth > 1440) {
        map.setZoom(17);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    };
    if ((document.documentElement.clientWidth > 1024) && (document.documentElement.clientWidth <= 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    };
    if ((document.documentElement.clientWidth > 768) && (document.documentElement.clientWidth <= 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.728489, lng: 7.361219 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth <= 768)) {
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
    $("#map-container").css("height", "800px");
    $("#map-canvas").css("height", "800px");
    $(".global-info").css("display", "none");
    $("#panorama-monaco").css("display", "block");
    if (document.documentElement.clientWidth >= 1440) {
        map.setZoom(15);
        map.setCenter({ lat: 43.739817, lng: 7.41631 });
    };
    if ((document.documentElement.clientWidth > 1024) && (document.documentElement.clientWidth <= 1440)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.739817, lng: 7.41631 });
    };
    if ((document.documentElement.clientWidth > 768) && (document.documentElement.clientWidth <= 1024)) {
        map.setZoom(15);
        map.setCenter({ lat: 43.739817, lng: 7.41631 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth <= 768)) {
        map.setZoom(14);
        map.setCenter({ lat: 43.739817, lng: 7.41631 })
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(14);
        map.setCenter({ lat: 43.739817, lng: 7.41631 })
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Monaco Rock Zoom
$(".btn-the-rock").on("click", function () {
    $("#map-container").css("height", "500px");
    $("#map-canvas").css("height", "500px");
    $(".global-info").css("display", "none");
    $("#the-rock").css("display", "block");
    if (document.documentElement.clientWidth > 1440) {
        map.setZoom(17);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    };
    if ((document.documentElement.clientWidth > 1024) && (document.documentElement.clientWidth <= 1440)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    };
    if ((document.documentElement.clientWidth > 768) && (document.documentElement.clientWidth <= 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth <= 768)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.731446, lng: 7.423935 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(16);
        map.setCenter({ lat: 43.730566, lng: 7.422510 });
    }
    $(".btn-global-description").get(0).scrollIntoView();
})

//Casino Zoom
$(".btn-casino").on("click", function () {
    $("#map-container").css("height", "500px");
    $("#map-canvas").css("height", "500px");
    $(".global-info").css("display", "none");
    $("#casino").css("display", "block");
    if (document.documentElement.clientWidth > 1440) {
        map.setZoom(18);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    };
    if ((document.documentElement.clientWidth > 1024) && (document.documentElement.clientWidth <= 1440)) {
        map.setZoom(18);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    };
    if ((document.documentElement.clientWidth > 768) && (document.documentElement.clientWidth <= 1024)) {
        map.setZoom(17);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth <= 768)) {
        map.setZoom(18);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(17);
        map.setCenter({ lat: 43.739263, lng: 7.428055 });
    }
})

//Racetrack zoom
$(".racetrack").on("click", function () {
    $("#map-container").css("height", "800px");
    $("#map-canvas").css("height", "800px");
    $(".global-info").css("display", "none");
    $("#racetrack").css("display", "block");
    if (document.documentElement.clientWidth > 1440) {
        map.setZoom(16);
        map.setCenter({ lat: 43.736245, lng: 7.425745 });
    };
    if ((document.documentElement.clientWidth > 1024) && (document.documentElement.clientWidth <= 1440)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.736245, lng: 7.425745 });
    };
    if ((document.documentElement.clientWidth > 768) && (document.documentElement.clientWidth <= 1024)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.736245, lng: 7.425745 });
    };
    if ((document.documentElement.clientWidth > 425) && (document.documentElement.clientWidth <= 768)) {
        map.setZoom(16);
        map.setCenter({ lat: 43.736245, lng: 7.425745 });
    }
    if (document.documentElement.clientWidth <= 425) {
        map.setZoom(15);
        map.setCenter({ lat: 43.736245, lng: 7.425745 });
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




