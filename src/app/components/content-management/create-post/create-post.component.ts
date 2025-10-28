import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-create-post',
  imports: [CarouselModule,ButtonModule,TagModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {



  products =[
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
{
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
    {
    image: 'bamboo-watch.jpg',
    date:'1/12/2025'
},
  ]

    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {

       this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }


}
