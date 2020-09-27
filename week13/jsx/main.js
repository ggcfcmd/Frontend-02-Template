import { Component, createElement } from './framework.js'
import { Carousel } from './carousel.js'
import { Timeline, Animation } from './animation.js'

let arr = [
    '/assets/image/1.jpg',
    '/assets/image/4.jpg',
    '/assets/image/3.jpg',
    '/assets/image/2.jpg',
]

let a = <Carousel src={arr}/>
a.mountTo(document.body);

let tl = new Timeline();

window.tl = tl;
window.animation = new Animation({ set a(v) { console.log(v) } }, 'a', 0, 100, 1000, null);

tl.start();