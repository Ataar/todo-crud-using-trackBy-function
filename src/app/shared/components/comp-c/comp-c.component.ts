import { Component, Input, OnInit } from '@angular/core';
import { IBook, ICar, IConcert, Imovie, IPerson, Iplayer, Iproduct, IRestaurant, IShop, Istudent, ITrainer, Itravel } from 'src/app/modules/comp-B';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.scss']
})
export class CompCComponent implements OnInit {
   @Input() strMessage!:string
   
   @Input() person1!:IPerson
   @Input() person2!:Istudent
   @Input() gadget!:Iproduct
   @Input() movie!:Imovie
   @Input() traveler!:Itravel
   @Input() player!:Iplayer
   @Input() bookData!:IBook
   @Input() shopData!:IShop
   @Input() trainerData!:ITrainer
   @Input() restaurantData!:IRestaurant
   @Input() concertData!:IConcert
   @Input() carData!:ICar


   
   
  constructor() { }
  ngOnInit(): void {
  }
 
  

}


