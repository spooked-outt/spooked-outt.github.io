<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="./resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link href="resources/ol-geocoder.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./resources/ol-layerswitcher.css">
        <link rel="stylesheet" href="./resources/qgis2web.css">
        <style>
        html, body {
            background-color: #ffffff;
        }
        .ol-control > * {
            background-color: #f8f8f8!important;
            color: #444444!important;
            border-radius: 0px;
        }
        .ol-attribution a, .gcd-gl-input::placeholder, .search-layer-input-search::placeholder {
            color: #444444!important;
        }
        .search-layer-input-search {
            background-color: #f8f8f8!important;
        }
        .ol-control > *:focus, .ol-control >*:hover {
            background-color: rgba(248, 248, 248, 0.7)!important;
        } 
        .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 2px !important;
        } 
        
        /* Box styling */
        .bottom-left-box {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            font-size: 14px;
        }
        .bottom-left-box a {
            display: block;
            color: #007BFF;
            text-decoration: none;
            margin: 5px 0;
        }
        .bottom-left-box a:hover {
            text-decoration: underline;
        }
        </style>
        <title></title>
    </head>
    <body>
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>
        
        <!-- Bottom-left box with links -->
        <div class="bottom-left-box">
            <a href="https://example.com/link1" target="_blank">Link 1</a>
            <a href="https://example.com/link2" target="_blank">Link 2</a>
            <a href="https://example.com/link3" target="_blank">Link 3</a>
        </div>
        
        <script src="resources/qgis2web_expressions.js"></script>
        <script src="./resources/functions.js"></script>
        <script src="./resources/ol.js"></script>
        <script src="./resources/ol-layerswitcher.js"></script>
        <script src="resources/ol-geocoder.js"></script>
        <script src="layers/WaterwayRivers_1.js"></script>
        <script src="layers/IrisanBounds_2.js"></script>
        <script src="layers/POIs_3.js"></script>
        <script src="styles/WaterwayRivers_1_style.js"></script>
        <script src="styles/IrisanBounds_2_style.js"></script>
        <script src="styles/POIs_3_style.js"></script>
        <script src="./layers/layers.js" type="text/javascript"></script> 
        <script src="./resources/Autolinker.min.js"></script>
        <script src="./resources/qgis2web.js"></script>
    </body>
</html>
