import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/scan';

import Bunny from './src/Bunny';

function isEven(n) {
    return n % 2 == 0;
}

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const bunny = new Bunny('#bunny');


const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');
const intervalStopable$ = Observable.interval(1000).takeUntil(stop$);

start$
    .switchMapTo(intervalStopable$)
    .scan(acc => ({step: ++acc.step}), {step: 0})
    .subscribe(acc => {
        isEven(Math.ceil(acc.step / 4)) ? bunny.takeStepBackwards() : bunny.takeStepForwards()
    });

/*
start$.subscribe(e =>
    Observable.interval(750)
        .subscribe(x => {
            console.log(x);
            bunny.takeStepForwards()
        }));
*/


