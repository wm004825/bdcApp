import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
@Injectable()
export class AppService {

    constructor() { }

    sub = new Subject<any>();

}