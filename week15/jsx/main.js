import { createElement } from './framework.js'
import { Carousel } from './Carousel.js'
import { Button } from './Button.js'
import { List } from './List.js'

let arr = [
    {
        img: '/assets/image/1.jpg',
        url: 'https://time.geekbang.org',
        title: '图片1'
    },
    {
        img: '/assets/image/2.jpg',
        url: 'https://time.geekbang.org',
        title: '图片2'
    },
    {
        img: '/assets/image/3.jpg',
        url: 'https://time.geekbang.org',
        title: '图片3'
    },
    {
        img: '/assets/image/4.jpg',
        url: 'https://time.geekbang.org',
        title: '图片4'
    }
]

// let a = <Carousel src={arr} 
// onChange={ event => console.log(event.detail.position) }
// onClick={ event => window.location.href = event.detail.data.url }/>
let a = <List data={ arr }>
{(record) =>
    <div>
        <img src={ record.img } />
        <a href={ record.url }>{ record.title }</a>
    </div>
}
</List>
a.mountTo(document.body);