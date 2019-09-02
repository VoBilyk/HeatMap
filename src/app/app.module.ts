import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './components/map/map.component';

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: environment.gMapKey + '&libraries=visualization'
        })
    ],
    providers: [],
    bootstrap: [MapComponent]
})
export class AppModule { }
