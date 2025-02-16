var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_WaterwayRivers_1 = new ol.format.GeoJSON();
var features_WaterwayRivers_1 = format_WaterwayRivers_1.readFeatures(json_WaterwayRivers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterwayRivers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterwayRivers_1.addFeatures(features_WaterwayRivers_1);
var lyr_WaterwayRivers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterwayRivers_1, 
                style: style_WaterwayRivers_1,
                popuplayertitle: 'WaterwayRivers',
                interactive: true,
                title: '<img src="styles/legend/WaterwayRivers_1.png" /> WaterwayRivers'
            });
var format_IrisanBounds_2 = new ol.format.GeoJSON();
var features_IrisanBounds_2 = format_IrisanBounds_2.readFeatures(json_IrisanBounds_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrisanBounds_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrisanBounds_2.addFeatures(features_IrisanBounds_2);
var lyr_IrisanBounds_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrisanBounds_2, 
                style: style_IrisanBounds_2,
                popuplayertitle: 'Irisan Bounds',
                interactive: true,
                title: '<img src="styles/legend/IrisanBounds_2.png" /> Irisan Bounds'
            });
var format_POIs_3 = new ol.format.GeoJSON();
var features_POIs_3 = format_POIs_3.readFeatures(json_POIs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_3.addFeatures(features_POIs_3);
var lyr_POIs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_3, 
                style: style_POIs_3,
                popuplayertitle: 'POIs',
                interactive: true,
                title: '<img src="styles/legend/POIs_3.png" /> POIs'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_WaterwayRivers_1.setVisible(true);lyr_IrisanBounds_2.setVisible(true);lyr_POIs_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_WaterwayRivers_1,lyr_IrisanBounds_2,lyr_POIs_3];
lyr_WaterwayRivers_1.set('fieldAliases', {'full_id': 'Water', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'accuracy': 'accuracy', 'tunnel': 'tunnel', 'descriptio': 'descriptio', 'width': 'width', 'tidal': 'tidal', 'intermitte': 'intermitte', 'maxspeed': 'maxspeed', 'layer': 'layer', 'wikipedia': 'wikipedia', 'check_date': 'check_date', 'name_tl': 'name_tl', 'name': 'name', });
lyr_IrisanBounds_2.set('fieldAliases', {'id': 'id', });
lyr_POIs_3.set('fieldAliases', {'id': 'id', });
lyr_WaterwayRivers_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'accuracy': 'TextEdit', 'tunnel': 'TextEdit', 'descriptio': 'TextEdit', 'width': 'TextEdit', 'tidal': 'TextEdit', 'intermitte': 'TextEdit', 'maxspeed': 'TextEdit', 'layer': 'TextEdit', 'wikipedia': 'TextEdit', 'check_date': 'TextEdit', 'name_tl': 'TextEdit', 'name': 'TextEdit', });
lyr_IrisanBounds_2.set('fieldImages', {'id': 'TextEdit', });
lyr_POIs_3.set('fieldImages', {'id': 'TextEdit', });
lyr_WaterwayRivers_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'accuracy': 'no label', 'tunnel': 'no label', 'descriptio': 'no label', 'width': 'no label', 'tidal': 'no label', 'intermitte': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'wikipedia': 'no label', 'check_date': 'no label', 'name_tl': 'no label', 'name': 'no label', });
lyr_IrisanBounds_2.set('fieldLabels', {'id': 'no label', });
lyr_POIs_3.set('fieldLabels', {'id': 'no label', });
lyr_POIs_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});