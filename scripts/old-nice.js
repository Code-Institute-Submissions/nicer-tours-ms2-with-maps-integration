let markers = [];
let locations = [];
let openMarkers = [];
let infowindow = [];

function initMap() {
    
    const map = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 13,
        center: { lat: 43.70313, lng: 7.26608 },
        mapTypeControl: false,
        streetViewControl: false
    });

    infowindow = new google.maps.InfoWindow();
    
//---------------------------------------------------------------------------------------------------- Markers
//Promenade des Anglais marker
    let markerProm = {
        lat: 43.694806, 
        lng: 7.260058,
        map: map,
        title: `Promenade des Anglais`,
        link: `<a type="button" href="../tour-of-nice.html#prom">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerProm, "click", function() {
        $(".output").append(prom)
        if ($(".attraction").is(":hidden")) {
            $("#prom").show();
        }
        $("#prom").get(0).scrollIntoView();
    })*/
    
//Place Masséna marker
    let markerPlaceMassena = {
        lat: 43.697400, 
        lng: 7.270230,
        map: map,
        title: "Place Masséna",
        link: `<a type="button" href="../tour-of-nice.html#placeMassena">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerPlaceMassena, "click", function() {
        $(".output").append(placeMassena)
        if ($(".attraction").is(":hidden")) {
            $("#placeMassena").show();
        }
        $("#placeMassena").get(0).scrollIntoView();
    })*/
    
//Apollo Statue marker
    let markerApollo = {
        lat: 43.696662, 
        lng: 7.270633,
        map: map,
        title: "Fountain of the Sun with Statue of Apollo",
        link: `<a type="button" href="../tour-of-nice.html#apollo">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerApollo, "click", function() {
        $(".output").append(apollo)
        if ($(".attraction").is(":hidden")) {
            $("#apollo").show();
        }
        $("#apollo").get(0).scrollIntoView();
    })*/
    
//Opera House marker
    let markerOperaHouse = {
        lat: 43.69547, 
        lng: 7.27253,
        map: map,
        title: "L'Opéra de Nice Opera House",
        link: `<a type="button" href="../tour-of-nice.html#operaHouse">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerOperaHouse.link, "click", function() {
        $(".output").append(operaHouse)
        if ($(".attraction").is(":hidden")) {
            $("#operaHouse").show();
        }
        $("#operaHouse").get(0).scrollIntoView();
    })*/

//Flower Market marker
    let markerFlowerMarket = {
        lat: 43.69572, 
        lng: 7.27528,
        map: map,
        title: "The Flower Market of the Old Town",
        link: `<a type="button" href="../tour-of-nice.html#flowerMarket">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerFlowerMarket, "click", function() {
        $(".output").append(flowerMarket)
        if ($(".attraction").is(":hidden")) {
            $("#flowerMarket").show();
        }
        $("#flowerMarket").get(0).scrollIntoView();
    })*/

//St Reparate Church marker
    let markerStReparateChurch = {
        lat: 43.697294, 
        lng: 7.275965,
        map: map,
        title: "St. Réparate Church",
        link: `<a type="button" href="../tour-of-nice.html#stReparateChurch">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerStReparateChurch, "click", function() {
        $(".output").append(stReparateChurch)
        if ($(".attraction").is(":hidden")) {
            $("#stReparateChurch").show();
        }
        $("#stReparateChurch").get(0).scrollIntoView();
    })*/

//Castle Hill View Point marker
    let markerCastleHillViewPoint = {
        lat: 43.694891, 
        lng: 7.279880,
        map: map,
        title: "Castle Hill View Point",
        link: `<a type="button" href="../tour-of-nice.html#castleHillViewPoint">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerCastleHillViewPoint, "click", function() {
        $(".output").append(castleHillViewPoint)
        if ($(".attraction").is(":hidden")) {
            $("#castleHillView").show();
        }
        $("#castleHillView").get(0).scrollIntoView();
    })*/

//Castle Hill marker
    let markerCastleHill = {
        lat: 43.695096, 
        lng: 7.280560,
        map: map,
        title: "Castle Hill",
        link: `<a type="button" href="../tour-of-nice.html#castleHill">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerCastleHill, "click", function() {
        $(".output").append(castleHill)
        if ($(".attraction").is(":hidden")) {
            $("#castleHill").show();
        }
        $("#castleHill").get(0).scrollIntoView();
    })*/

//Rauba-Capeù Memorial marker
    let markerRaubaCapeu = {
        lat:43.693849, 
        lng: 7.281250,
        map: map,
        title: "WWI Memorial 'Rauba-Capeù'",
        link: `<a type="button" href="../tour-of-nice.html#raubaCapeu">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerRaubaCapeu, "click", function() {
        $(".output").append(raubaCapeu)
        if ($(".attraction").is(":hidden")) {
            $("#raubaCapeu").show();
        }
        $("#raubaCapeu").get(0).scrollIntoView();
    })*/

//Nice Port marker
    let markerPortLympia = {
        lat:43.697118, 
        lng: 7.283910,
        map: map,
        title: "Port de Nice Lympia",
        link: `<a type="button" href="../tour-of-nice.html#portLympia">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerPortLympia, "click", function() {
        $(".output").append(portLympia)
        if ($(".attraction").is(":hidden")) {
            $("#portLympia").show();
        }
        $("#portLympia").get(0).scrollIntoView();
    })*/

//Lazaret Cave marker
    let markerLazaret = {
        lat:43.690772, 
        lng: 7.294768,
        map: map,
        title: "Lazaret Prehistoric Cave",
        link: `<a type="button" href="../tour-of-nice.html#lazaret">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerLazaret, "click", function() {
        $(".output").append(lazaret)
        if ($(".attraction").is(":hidden")) {
            $("#lazaret").show();
        }
        $("#lazaret").get(0).scrollIntoView();
    })*/

//Nice View Point marker
    let markerBayOfAngelsView = {
        lat:43.689128, 
        lng: 7.296206,
        map: map,
        title: "View over Nice and the Bay of Angels",
        link: `<a type="button" href="../tour-of-nice.html#bayOfAngelsView">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerBayOfAngelsView, "click", function() {
        $(".output").append(bayOfAngelsView)
        if ($(".attraction").is(":hidden")) {
            $("#bayOfAngelsView").show();
        }
        $("#bayOfAngelsView").get(0).scrollIntoView();
    })*/

//Arènes de Cimiez marker
    let markerArenesDeCimiez = {
        lat:43.720492, 
        lng: 7.276909,
        map: map,
        title: "Arènes de Cimiez Garden",
        link: `<a type="button" href="../tour-of-nice.html#arenesDeCimiez">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerArenesDeCimiez, "click", function() {
        $(".output").append(arenesDeCimiez)
        if ($(".attraction").is(":hidden")) {
            $("#arenesDeCimiez").show();
        }
        $("#arenesDeCimiez").get(0).scrollIntoView();
    })*/

//Matisse Museum marker
    let markerMatisseMuseum = {
        lat:43.71938, 
        lng: 7.27624,
        map: map,
        title: "Matisse Museum",
        link: `<a type="button" class="move" onclick="openElement()" href="../tour-of-nice.html#matisse">Find Out More</a>`,
        openElement: function() {
            document.getElementById(".output").append("#matisse")
        },
        text: `The Promenade was`
    } 
    /*google.maps.event.addListener(markerMatisseMuseum, "click", function() {
        $(".output").append(matisse)
        if ($(".attraction").is(":hidden")) {
            $("#matisse").show();
        }
        $("#matisse").get(0).scrollIntoView();
    });*/

//Archaeology Museum marker
    let markerArchaeologyMuseum = {
        lat:43.71928, 
        lng: 7.27511,
        map: map,
        title: "Archaeology Museum",
        link: `<a type="button" href="../tour-of-nice.html#archaeology">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerArchaeologyMuseum, "click", function() {
        $(".output").append(archaeology)
        if ($(".attraction").is(":hidden")) {
            $("#archaeology").show();
        }
        $("#archaeology").get(0).scrollIntoView();
    })*/
    
//Cimiez Monastery marker
    let markerCimiezMonastery = {
        lat:43.71998, 
        lng: 7.27881,
        map: map,
        title: "The Monastery of Cimiez",
        link: `<a type="button" href="../tour-of-nice.html#cimiezMonastery">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerCimiezMonastery, "click", function() {
        $(".output").append(cimiezMonastery)
        if ($(".attraction").is(":hidden")) {
            $("#cimiezMonastery").show();
        }
        $("#cimiezMonastery").get(0).scrollIntoView();
    })*/

//Notre Dame marker
    let markerNotreDame = {
        lat:43.703672, 
        lng: 7.265758,
        map: map,
        title: "Notre-Dame de l’Assomption Basilica",
        link: `<a type="button" href="../tour-of-nice.html#notreDame">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerNotreDame, "click", function() {
        $(".output").append(notreDame)
        if ($(".attraction").is(":hidden")) {
            $("#notreDame").show();
        }
        $("#notreDame").get(0).scrollIntoView();
    })*/

//Russian Cathedral marker
    let markerRussianCathedral = {
        lat:43.703810, 
        lng: 7.253920,
        map: map,
        title: "St. Nicholas Russian Orthodox Cathedral",
        link: `<a type="button" href="../tour-of-nice.html#russianCathedral">Find Out More</a>`,
        text: `The Promenade was`
    }
    /*google.maps.event.addListener(markerRussianCathedral, "click", function() {
        $(".output").append(russianCathedral)
        if ($(".attraction").is(":hidden")) {
            $("#russianCathedral").show();
        }
        $("#russianCathedral").get(0).scrollIntoView();
    })*/

//---------------------------------------------------------------------------------------------------- Marker Clustering
    locations = 
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

    markers = locations.map(function(location, i) {
        let marker = new google.maps.Marker({
            position: location,
        });
        
        /*google.maps.event.addListener(marker, "click", function(evt) {
            infowindow.setContent(`${location.title}<br><br>${location.link}`);
            infowindow.open(map, marker);
        })*/
        google.maps.event.addListenerOnce(map, 'tilesloaded', function(event) {
            infowindow.setContent(`${location.title}<br><br>${location.link}`);
            infowindow.open(map, marker);
            for (var i = 0; i < markers.length; i++) {
                markers.forEach(function(infoWindow) {
                    infowindow.setContent(`${location.title}<br><br>${location.link}`);
                    infowindow.open(map, marker);
                })
            }
            infowindow.open(map, marker);
        });
        return marker;     
    })
    


    let oldTownMarkers = locations.slice(0, 6);
    //console.log(oldTownMarkers)
    let castleHillMarkers = locations.slice(6, 9);
    //console.log(castleHillMarkers)
    let portMarkers = locations.slice(9, 12);
    //console.log(portMarkers)
    let cimiezMarkers = locations.slice(12, 16);
    //console.log(cimiezMarkers)

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

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
//Cimiez zoom
    $(".btn-cimiez").on("click", function() {
        map.setZoom(17);
        map.setCenter({lat: 43.720333, lng: 7.277311});
        $(".global-info").css("display", "none");
        $("#cimiez").css("display", "block");
        if ((document.documentElement.clientWidth < 1024) || (document.documentElement.clientWidth >= 768)) {
            map.setZoom(17);
            map.setCenter({lat: 43.720230, lng: 7.276968});
        };
        if (document.documentElement.clientWidth < 768) {
            map.setZoom(17);
            map.setCenter({lat: 43.720093, lng: 7.276860});
        }
    })

//Old Town Zoom
    $(".btn-old-town").on("click", function() {
        map.setZoom(16);
        map.setCenter({lat: 43.695709, lng: 7.268124});
        $(".global-info").css("display", "none");
        $("#old-town").css("display", "block");
        if ((document.documentElement.clientWidth < 1024) || (document.documentElement.clientWidth >= 768)) {
            map.setZoom(15);
            map.setCenter({lat: 43.695504, lng: 7.269545});
        };
        if (document.documentElement.clientWidth < 768) {
            map.setZoom(14);
            map.setCenter({lat: 43.695613, lng: 7.270500})
        }
    })

//Castle Hill Zoom
    $(".btn-castle-hill").on("click", function() {
        map.setZoom(17);
        map.setCenter({lat: 43.694306, lng: 7.281073});
        $(".global-info").css("display", "none");
        $("#castle-hill").css("display", "block");
        if ((document.documentElement.clientWidth < 1024) || (document.documentElement.clientWidth >= 768)) {
            map.setZoom(17);
            map.setCenter({lat: 43.694321, lng: 7.281030});
        };
        if (document.documentElement.clientWidth < 768) {
            map.setZoom(16);
            map.setCenter({lat: 43.694321, lng: 7.281030})
        }
    })

//Port Lympia Zoom
    $(".btn-the-port").on("click", function() {
        map.setZoom(16);
        map.setCenter({lat: 43.693313, lng: 7.290793});
        $(".global-info").css("display", "none");
        $("#the-port").css("display", "block");
        if ((document.documentElement.clientWidth < 1024) || (document.documentElement.clientWidth >= 768)) {
            map.setZoom(15);
            map.setCenter({lat: 43.694499, lng: 7.290804});
        };
        if (document.documentElement.clientWidth < 768) {
            map.setZoom(14);
            map.setCenter({lat: 43.694499, lng: 7.290804});
        }
    })

//Russian Church Zoom
    $(".btn-russian-cathedral").on("click", function() {
        map.setZoom(16);
        map.setCenter({lat: 43.704697, lng: 7.259707});
        $(".global-info").css("display", "none");
        $("#russian-cathedral").css("display", "block");
        $(".poi-close-all").css("display", "block");
        if ((document.documentElement.clientWidth < 1024) || (document.documentElement.clientWidth >= 768)) {
            map.setZoom(15);
            map.setCenter({lat: 43.704697, lng: 7.259707});
        };
        if (document.documentElement.clientWidth < 768) {
            map.setZoom(14);
            map.setCenter({lat: 43.704697, lng: 7.259707});
        }
    })

//-------------------------------------------------- Link in infoWindow
    /*$(".move").addListener(this, "click", function() {
        document.getElementById("output").innerText = "hi";
    })*/

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

    function showOldTownInfoWindows() {
        for (var i = 0; i < oldTownMarkers.length; i++) {
            google.maps.event.trigger(oldTownMarkers[i], "click");
        }
    }
}

