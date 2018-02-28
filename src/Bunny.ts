import {TweenMax} from 'gsap';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';

function isEven(n) {
    return n % 2 == 0;
}

export default class Bunny {

    innerBunny;

    constructor(id: string) {
        const scream = new Audio('/assets/scream.wav');
        this.innerBunny = document.querySelector(id);
        Observable.fromEvent(this.innerBunny, 'click')
            .subscribe(e => {
                TweenMax.to(this.innerBunny, 0.75, { rotation: "+=360"})
                scream.play();
            })
    }

    takeStepForwards(x) {
        const  step = isEven(x) ? 100 : 50;
        TweenMax.to(this.innerBunny, 0.50, {left: '+=' + step + 'px'});
        TweenMax.to(this.innerBunny, 0.25, {top: '-=40px'});
        TweenMax.to(this.innerBunny, 0.25, {top: '+=40px', delay: 0.25})
    }

}