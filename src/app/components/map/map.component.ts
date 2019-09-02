import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {} from 'googlemaps';
import { getPoints } from './points';
import { darkTheme } from 'src/app/styles/dark-theme';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.sass']
})
export class MapComponent {
    mapTheme = darkTheme;
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    private map: google.maps.Map = null;
    private heatmap: google.maps.visualization.HeatmapLayer = null;

    onMapLoad(mapInstance: google.maps.Map) {
        this.map = mapInstance;

        // here our in other method after you get the coords; but make sure map is loaded

        const coords: google.maps.LatLng[] = getPoints(); // can also be a google.maps.MVCArray with LatLng[] inside
        this.heatmap = new google.maps.visualization.HeatmapLayer({
            map: this.map,
            data: coords
        });
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers: marker[] = [{
        lat: 51.673858,
        lng: 7.815982,
        label: 'A',
        draggable: true
    }, {
        lat: 51.373858,
        lng: 7.215982,
        label: 'B',
        draggable: false
    }, {
        lat: 51.723858,
        lng: 7.895982,
        label: 'C',
        draggable: true
    }]
}

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
