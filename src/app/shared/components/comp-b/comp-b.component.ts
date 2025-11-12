import { Component, Input, OnInit } from '@angular/core';
import { Admission, Cart, ClassSchedule, Conference, EcommerceOrder, Enrollment, GuestBook, IBooking, ICourse, IEmployee, IMeeting, Invoice, Movie, Order, OrderNow, PatientRecord, Playlist, Product, ProductSell, RestaurantOrder, Shipment, Student, Ticket, Transaction, TransactionBank, } from 'src/app/modules/comp-A';
import { IBook, ICar, IConcert, Imovie, IPerson, Iplayer, Iproduct, IRestaurant, IShop, Istudent, ITrainer, Itravel } from 'src/app/modules/comp-B';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
  @Input() data01!:IMeeting 
  @Input() data02!:Student;
  @Input() data03!:IEmployee;
  @Input() data04!:IBooking;
  @Input() data05!:ICourse;
  @Input() data06!:Order;
  @Input() data07!:Playlist;
  @Input() data08!:Enrollment;
  @Input() data09!:PatientRecord;
  @Input() data10!:Transaction;
  @Input() data11!:Product;
  @Input() data12!:Movie;
  @Input() data13!:Shipment;
  @Input() data14!:Admission;
  @Input() data15!:Conference;
  @Input() data16!:Invoice;
  @Input() data17!:OrderNow;
  @Input() data18!:Ticket;
  @Input() data19!:TransactionBank;
  @Input() data20!:ProductSell;
  @Input() data21!:GuestBook;
  @Input() data22!:Cart;
  @Input() data23!:RestaurantOrder;
  @Input() data24!:ClassSchedule;
  @Input() data25!:EcommerceOrder;


  // C componenet

  ngOnInit(): void {
  }

strMessage = '@Input Decorator In String Ineterpolation'

// ✅ Example object implementing the interface
person: IPerson = {
  fname: "Ravi",
  lname: "Kiran",
  age: 30,
  city: "Pune",
  profession: "Software Engineer",
  company: "TechUnity Corp",
  hobby: "cycling",
  experience: 8,
  favLang: "JavaScript",
  petName: "Bruno",
  petType: "dog",
  married: "Yes"
};


// 🧩 Task 2
 studentName :Istudent  =   {
  studentName: "Aarav",
  school: "Sunshine Public School",
  grade: 7,
  favSubject: "Science",
  bestFriend: "Riya",
  favSport: "Cricket",
  dream: "Scientist",
  city: "Nagpur",
  teacherName: "Mrs. Sharma",
  marks: 89
};


gadget:Iproduct = {
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 145000,
    color: "Titanium Blue",
    storage: "256GB",
    camera: "48MP",
    os: "iOS 18",
    owner: "Rohit",
    purchaseYear: 2024,
    warranty: "2 years"
  };


    movie:Imovie = {
    movieName: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    actor: "Leonardo DiCaprio",
    genre: "Sci-Fi",
    rating: 8.8,
    duration: "2h 28m",
    platform: "Netflix",
    favScene: "Hallway fight"
  };


    travelerData:Itravel = {
    traveler: "Sanya",
    country: "Japan",
    city: "Tokyo",
    days: 10,
    favPlace: "Shibuya Crossing",
    localFood: "Sushi",
    stayHotel: "Hotel Sakura",
    travelMode: "Flight",
    spent: "₹1,20,000"
  };


    player:Iplayer = {
    playerName: "Virat Kohli",
    team: "India",
    runs: 122,
    balls: 63,
    opponent: "Pakistan",
    venue: "Melbourne",
    matchType: "T20 World Cup",
    result: "India won by 4 wickets",
    strikeRate: 193.65
  };


 bookData: IBook = {
  author: "J.K. Rowling",
  book: "Harry Potter and the Sorcerer’s Stone",
  genre: "Fantasy",
  published: 1997,
  copiesSold: "120 million",
  mainCharacter: "Harry Potter",
  setting: "Hogwarts",
  publisher: "Bloomsbury"
};

shopData: IShop = {
  shopName: "Gadget Hub",
  owner: "Mehul",
  location: "Mumbai",
  openTime: "10 AM",
  closeTime: "9 PM",
  bestSelling: "Smartwatches",
  foundedYear: 2015,
  employees: 15,
  rating: 4.7
};



trainerData: ITrainer = {
  trainer: "Neha",
  gymName: "FitLife Studio",
  experience: 6,
  specialization: "Weight Training",
  location: "Bangalore",
  clients: 120,
  timing: "6 AM - 10 PM",
  rating: 4.9
};


restaurantData: IRestaurant = {
  restaurant: "Spice Villa",
  chef: "Rajesh",
  cuisine: "Indian",
  location: "Hyderabad",
  signatureDish: "Butter Chicken",
  rating: 4.8,
  established: 2010,
  branches: 5
};


concertData: IConcert = {
  singer: "Arijit Singh",
  concertName: "Soul Beats Tour",
  location: "Dubai",
  date: "5th June 2025",
  crowd: 25000,
  ticketPrice: 8000,
  duration: "3 hours",
  organizer: "LiveNation"
};

carData: ICar = {
  carBrand: "Tesla",
  model: "Model Y",
  owner: "Karan",
  range: "455 km",
  price: "₹70 lakh",
  battery: "75 kWh",
  topSpeed: "217 km/h",
  color: "Midnight Blue"
};

}
