import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';

import Bunny from './src/Bunny';

const startButton = document.querySelector('#start');
const bunny = new Bunny('#bunny');


const start$ = Observable.fromEvent(startButton, 'click');
const interval$ = Observable.interval(1000);

start$.switchMap(e => interval$)
 .subscribe(x => bunny.takeStepForwards(x));

/*
start$.subscribe(e =>
    Observable.interval(750)
        .subscribe(x => {
            console.log(x);
            bunny.takeStepForwards()
        }));
*/


