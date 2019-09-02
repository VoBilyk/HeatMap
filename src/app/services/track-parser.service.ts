import { Injectable } from '@angular/core';
import { parseString } from 'xml2js'

@Injectable({
    providedIn: 'root'
})
export class TrackParserService {

    constructor() { }

    parse(data: string) {
        // Without parser
        parseString(data, (err, result) => {
            debugger;
            console.dir(result);
            console.log('Done');
        })
    }
}