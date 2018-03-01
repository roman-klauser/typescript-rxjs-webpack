import {TweenMax} from 'gsap';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';


export default class Bunny {

    innerBunny;

    constructor(id: string, isAdult?: boolean) {
        let scream = new Audio('/assets/camera-click.wav');
        this.innerBunny = document.querySelector(id);
        if (isAdult) {
            this.innerBunny.style.cursor = 'url("assets/aim.png"), auto';
            scream = new Audio('/assets/scream.wav')
        }

        Observable.fromEvent(this.innerBunny, 'click')
            .subscribe(e => {
                if (isAdult) {
                    TweenMax.to(this.innerBunny, 0.75, {rotation: "+=360"})
                }
                scream.play();
            })
    }

    takeStepForwards() {
        this.innerBunny.style.transform = 'scaleX(1)';
        TweenMax.to(this.innerBunny, 0.50, {left: '+=100px'});
        TweenMax.to(this.innerBunny, 0.25, {top: '-=40px'});
        TweenMax.to(this.innerBunny, 0.25, {top: '+=40px', delay: 0.25})
    }

    takeStepBackwards() {
        this.innerBunny.style.transform = 'scaleX(-1)';
        TweenMax.to(this.innerBunny, 0.50, {left: '-=100px'});
        TweenMax.to(this.innerBunny, 0.25, {top: '-=40px'});
        TweenMax.to(this.innerBunny, 0.25, {top: '+=40px', delay: 0.25})
    }

}