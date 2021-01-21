let map;

function createMap() {
    let options = {
        center: { lat: 43.69572, lng: 7.27528 },
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), options);

    //Seach input box
    let input = document.getElementById("search");
    let searchBox = new google.maps.places.SearchBox(input);

    let clearSearchBox = document.getElementById("clearSearchButton");
    clearSearchBox.addEventListener("click", function() {
        document.getElementById("search").value = "";
    })

    //sets search to boundary of map
    map.addListener("bounds_changed", function() {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    searchBox.addListener("places_changed", function() {
        let places = searchBox.getPlaces();

        if (places.length === 0) 
            return;
        
        markers.forEach(function(m) {m.setMap(null);});
        markers = [];

        let bounds = new google.maps.LatLngBounds();

        places.forEach(function(p) {
            if (!p.geometry)
                return;
            document.getElementById("attraction").innerHTML = `<div class="row">
                    
                <div class="col-12 order-1 poi-title">
                    <h2 id="poi-title-name"></h2>
                </div>

                <div class="col-12 order-2" id="attraction-image"></div>

                <div class="col-12 order-12 buttons-and-links">
                    <div class="row">
                        <div class="col-xl-4 col-sm-6 order-xl-1 order-1 more-info" style="text-align:left">
                        </div>
                        <div class="col-xl-4 col-sm-12 order-xl-2 order-3 add-to-itin">
                            <button class="btn btn-light btn-block add-to-itin-button" onclick="addToItin()">Add To Itinerary</button>
                        </div>
                        <div class="col-xl-4 col-sm-6 order-xl-3 order-2 back-to-map" style="text-align:right">
                            <button class="btn btn-light btn-block back-to-mapbutton" onclick="backToMap()">Back To Map</button>
                        </div>
                    </div>
                </div>
            </div>`;

            let placeName = p.name;
            console.log(placeName);
            document.getElementById("poi-title-name").append(placeName)

            let photoUrl = p.photos[0].getUrl();
            let img = document.createElement("img");
            img.setAttribute("src", photoUrl);
            img.setAttribute("class", "img")
            document.getElementById("attraction-image").appendChild(img);

            let placeReviews = p.reviews;
            placeReviews.forEach(function(item) {
                //console.log(item);
                document.getElementById("attraction-image").innerHTML += `<p style="margin-bottom:0">${item.text}</p><p style="text-align:right"><strong>${item.author_name}: </strong> <span style="color:red; font-size:x-large">${item.rating}</span>/5</p><hr>`;
            });

            let placeWebsite = p.website;
            //console.log(placeWebsite);
            if (p.hasOwnProperty("website") == true) {
                console.log(placeWebsite);
                $(".more-info").append(`<a class="btn btn-light btn-block more-info" role="button" href="${placeWebsite}" target="_blank">Find Out More</a>
                        `)

            } else if (p.hasOwnProperty("website") == false){
                console.log("No website");
                $(".more-info").append(`<p>Sorry, no website available for this place.</p>`)
            }

            markers.push(new google.maps.Marker({
                map: map,
                title: p.name,
                position: p.geometry.location
            }));

            if (p.geometry.viewport)
                bounds.union(p.geometry.viewport);
            else 
                bounds.extend(p.geometry.location);

            
            $("#attraction").get(0).scrollIntoView();
        });
        map.fitBounds(bounds)
    });

}

//------------------------------------------------------------------------------------------------------- Close all Info boxes and reset map zoom
    $(".poi-close-all").on("click", function() {
        $("#attraction").toggle();
        map.setZoom(12);
    })

    function backToMap() {
        $(".input-div").get(0).scrollIntoView();
    }

    function search(ele) {
    if(event.key === 'Enter') {
        alert("Please select from the dropdown menu");        
    }

}
function addToItin() {
    var getValue = $('#search').val();

    let valueSaved = {
        key: getValue
    }

    localStorage.setItem('place', JSON.stringify(valueSaved));
    localStorage.getItem('place');
    let placeAddedToItinerary = JSON.parse(localStorage.getItem('place'));
    console.log(placeAddedToItinerary)
    alert(`You have added 
${placeAddedToItinerary.key} 
to your itinerary`)
    //document.getElementById("message").innerText = `Please send me an estimate for a tour containing the following places to visit:`;
    document.getElementById("message").innerHTML += placeAddedToItinerary.key
}

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
    $(".popup-container").css("display", "block");
    $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
    $(".popup-container").css("display", "none");
    $(".popup-overlay, .popup-content").removeClass("active");
});

    