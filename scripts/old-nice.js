function initMap() {
    
    const map = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 13,
        center: { lat: 43.70313, lng: 7.26608 },
    });

//---------------------------------------------------------------------------------------------------- Markers
//Promenade des Anglais marker
    let markerProm = new google.maps.Marker({
        position: new google.maps.LatLng(43.694806, 7.260058),
        map: map,
        title: "Promenade des Anglais"
    })
    google.maps.event.addListener(markerProm, "click", function() {
        $(".output").append(prom)
        if ($(".attraction").is(":hidden")) {
            $("#prom").show();
        }
        $("#prom").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })
    
//Place Masséna marker
    let markerPlaceMassena = new google.maps.Marker({
        position: new google.maps.LatLng(43.697400, 7.270230),
        map: map,
        title: "Place Masséna"
    })
    google.maps.event.addListener(markerPlaceMassena, "click", function() {
        $(".output").append(placeMassena)
        if ($(".attraction").is(":hidden")) {
            $("#placeMassena").show();
        }
        $("#placeMassena").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })
    
//Apollo Statue marker
    let markerApollo = new google.maps.Marker({
        position: new google.maps.LatLng(43.696662, 7.270633),
        map: map,
        title: "Fountain of the Sun with Statue of Apollo"
    })
    google.maps.event.addListener(markerApollo, "click", function() {
        $(".output").append(apollo)
        if ($(".attraction").is(":hidden")) {
            $("#apollo").show();
        }
        $("#apollo").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })
    
//Opera House marker
    let markerOperaHouse = new google.maps.Marker({
        position: new google.maps.LatLng(43.69547, 7.27253),
        map: map,
        title: "L'Opéra de Nice Opera House"
    })
    google.maps.event.addListener(markerOperaHouse, "click", function() {
        $(".output").append(operaHouse)
        if ($(".attraction").is(":hidden")) {
            $("#operaHouse").show();
        }
        $("#operaHouse").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Flower Market marker
    let markerFlowerMarket = new google.maps.Marker({
        position: new google.maps.LatLng(43.69572, 7.27528),
        map: map,
        title: "The Flower Market of the Old Town"
    })
    google.maps.event.addListener(markerFlowerMarket, "click", function() {
        $(".output").append(flowerMarket)
        if ($(".attraction").is(":hidden")) {
            $("#flowerMarket").show();
        }
        $("#flowerMarket").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//St Reparate Church marker
    let markerStReparateChurch = new google.maps.Marker({
        position: new google.maps.LatLng(43.697294, 7.275965),
        map: map,
        title: "St. Réparate Church"
    })
    google.maps.event.addListener(markerStReparateChurch, "click", function() {
        $(".output").append(stReparateChurch)
        if ($(".attraction").is(":hidden")) {
            $("#stReparateChurch").show();
        }
        $("#stReparateChurch").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Castle Hill View Point marker
    let markerCastleHillViewPoint = new google.maps.Marker({
        position: new google.maps.LatLng(43.694891, 7.279880),
        map: map,
        title: "Castle Hill View Point"
    })
    google.maps.event.addListener(markerCastleHillViewPoint, "click", function() {
        $(".output").append(castleHillViewPoint)
        if ($(".attraction").is(":hidden")) {
            $("#castleHillView").show();
        }
        $("#castleHillView").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Castle Hill marker
    let markerCastleHill = new google.maps.Marker({
        position: new google.maps.LatLng(43.695096, 7.280560),
        map: map,
        title: "Castle Hill"
    })
    google.maps.event.addListener(markerCastleHill, "click", function() {
        $(".output").append(castleHill)
        if ($(".attraction").is(":hidden")) {
            $("#castleHill").show();
        }
        $("#castleHill").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Rauba-Capeù Memorial marker
    let markerRaubaCapeu = new google.maps.Marker({
        position: new google.maps.LatLng(43.693849, 7.281250),
        map: map,
        title: "WWI Memorial 'Rauba-Capeù'"
    })
    google.maps.event.addListener(markerRaubaCapeu, "click", function() {
        $(".output").append(raubaCapeu)
        if ($(".attraction").is(":hidden")) {
            $("#raubaCapeu").show();
        }
        $("#raubaCapeu").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Nice Port marker
    let markerPortLympia = new google.maps.Marker({
        position: new google.maps.LatLng(43.697118, 7.283910),
        map: map,
        title: "Port de Nice Lympia"
    })
    google.maps.event.addListener(markerPortLympia, "click", function() {
        $(".output").append(portLympia)
        if ($(".attraction").is(":hidden")) {
            $("#portLympia").show();
        }
        $("#portLympia").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Lazaret Cave marker
    let markerLazaret = new google.maps.Marker({
        position: new google.maps.LatLng(43.690772, 7.294768),
        map: map,
        title: "Lazaret Prehistoric Cave"
    })
    google.maps.event.addListener(markerLazaret, "click", function() {
        $(".output").append(lazaret)
        if ($(".attraction").is(":hidden")) {
            $("#lazaret").show();
        }
        $("#lazaret").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Nice View Point marker
    let markerBayOfAngelsView = new google.maps.Marker({
        position: new google.maps.LatLng(43.689128, 7.296206),
        map: map,
        title: "View over Nice and the Bay of Angels"
    })
    google.maps.event.addListener(markerBayOfAngelsView, "click", function() {
        $(".output").append(bayOfAngelsView)
        if ($(".attraction").is(":hidden")) {
            $("#bayOfAngelsView").show();
        }
        $("#bayOfAngelsView").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Arènes de Cimiez marker
    let markerArenesDeCimiez = new google.maps.Marker({
        position: new google.maps.LatLng(43.720492, 7.276909),
        map: map,
        title: "Arènes de Cimiez Garden"
    })
    google.maps.event.addListener(markerArenesDeCimiez, "click", function() {
        $(".output").append(arenesDeCimiez)
        if ($(".attraction").is(":hidden")) {
            $("#arenesDeCimiez").show();
        }
        $("#arenesDeCimiez").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Matisse Museum marker
    let markerMatisseMuseum = new google.maps.Marker({
            position: new google.maps.LatLng(43.71938, 7.27624),
            map: map,
            title: "Matisse Museum"
    })   
    google.maps.event.addListener(markerMatisseMuseum, "click", function() {
        $(".output").append(matisse)
        if ($(".attraction").is(":hidden")) {
            $("#matisse").show();
        }
        $("#matisse").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    });

//Archaeology Museum marker
    let markerArchaeologyMuseum = new google.maps.Marker({
        position: new google.maps.LatLng(43.71928, 7.27511),
        map: map,
        title: "Archaeology Museum"
    })
    google.maps.event.addListener(markerArchaeologyMuseum, "click", function() {
        $(".output").append(archaeology)
        if ($(".attraction").is(":hidden")) {
            $("#archaeology").show();
        }
        $("#archaeology").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })
    
//Cimiez Monastery marker
    let markerCimiezMonastery = new google.maps.Marker({
        position: new google.maps.LatLng(43.71998, 7.27881),
        map: map,
        title: "The Monastery of Cimiez"
    })
    google.maps.event.addListener(markerCimiezMonastery, "click", function() {
        $(".output").append(cimiezMonastery)
        if ($(".attraction").is(":hidden")) {
            $("#cimiezMonastery").show();
        }
        $("#cimiezMonastery").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Notre Dame marker
    let markerNotreDame = new google.maps.Marker({
        position: new google.maps.LatLng(43.703672, 7.265758),
        map: map,
        title: "Notre-Dame de l’Assomption Basilica"
    })
    google.maps.event.addListener(markerNotreDame, "click", function() {
        $(".output").append(notreDame)
        if ($(".attraction").is(":hidden")) {
            $("#notreDame").show();
        }
        $("#notreDame").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//Russian Cathedral marker
    let markerRussianCathedral = new google.maps.Marker({
        position: new google.maps.LatLng(43.703810, 7.253920),
        map: map,
        title: "St. Nicholas Russian Orthodox Cathedral"
    })
    google.maps.event.addListener(markerRussianCathedral, "click", function() {
        $(".output").append(russianCathedral)
        if ($(".attraction").is(":hidden")) {
            $("#russianCathedral").show();
        }
        $("#russianCathedral").get(0).scrollIntoView();
        map.setZoom(13);
        map.setCenter({ lat: 43.70313, lng: 7.26608 })
    })

//---------------------------------------------------------------------------------------------------- Marker Clustering
    let markers = 
        [
            markerProm,
            markerPlaceMassena,
            markerApollo,
            markerOperaHouse, 
            markerFlowerMarket,
            markerStReparateChurch,
            markerCastleHillViewPoint,
            markerCastleHill,
            markerRaubaCapeu,
            markerPortLympia,
            markerLazaret,
            markerBayOfAngelsView,
            markerArenesDeCimiez,
            markerMatisseMuseum, 
            markerArchaeologyMuseum,
            markerCimiezMonastery,
            markerNotreDame,
            markerRussianCathedral
        ];

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

    


//---------------------------------------------------------------------------------------------------- Information about markers


//---------------------------------------------------------------------------------------------------- jQuery
//-------------------------------------------------- Section Zooms
//Cimiez zoom
    $(".btn-cimiez").on("click", function() {
        map.setZoom(17);
        map.setCenter({lat: 43.720333, lng: 7.277311})
    })

//Old Town Zoom
    $(".btn-old-town").on("click", function() {
        map.setZoom(16);
        map.setCenter({lat: 43.695709, lng: 7.268124})
    })

//Castle Hill Zoom
    $(".btn-castle-hill").on("click", function() {
        map.setZoom(17);
        map.setCenter({lat: 43.694306, lng: 7.281073})
    })

//Port Lympia Zoom
    $(".btn-the-port").on("click", function() {
        map.setZoom(16);
        map.setCenter({lat: 43.693313, lng: 7.290793})
    })

//Russian Church Zoom
    $(".btn-russian-cathedral").on("click", function() {
        map.setZoom(16);
        map.setCenter({lat: 43.704697, lng: 7.259707})
    })

//-------------------------------------------------- Buttons
// Close Info Box
    $(".poi-close").on("click", function() {
        $(this).parents(".attraction").hide();
    })

// Close all Info boxes and reset map zoom
    $(".poi-close-all").on("click", function() {
        $(".attraction").hide();
        map.setZoom(13);
        $("#map-container").get(0).scrollIntoView();
    })
// Back To Map
    $(".back-to-map").on("click", function() {
        $("#map-container").get(0).scrollIntoView();
    })

}