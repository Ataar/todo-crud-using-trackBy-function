export interface IPerson {
  fname: string;
  lname: string;
  age: number;
  city: string;
  profession: string;
  company: string;
  hobby: string;
  experience: number;
  favLang: string;
  petName: string;
  petType: string;
  married: string;
}

export interface Istudent
{
  studentName: string;
    school: string;
    grade: number;
    favSubject: string;
    bestFriend: string;
    favSport: string;
    dream: string;
    city: string;
    teacherName: string;
    marks: number;
}


export interface Iproduct
{
   brand: string;
    model: string;
    price: number;
    color: string;
    storage: string;
    camera: string;
    os: string;
    owner: string;
    purchaseYear: number;
    warranty: string;
}


export interface Imovie
{
  movieName: string;
    director: string;
    releaseYear: number;
    actor: string;
    genre: string;
    rating: number;
    duration: string;
    platform: string;
    favScene: string;
}


export interface Itravel
{
   traveler: string;
    country: string;
    city: string;
    days: number;
    favPlace: string;
    localFood: string;
    stayHotel: string;
    travelMode: string;
    spent: string;
}


export interface Iplayer
{
  playerName: string;
    team: string;
    runs: number;
    balls: number;
    opponent: string;
    venue: string;
    matchType: string;
    result: string;
    strikeRate: number;
}



export interface IBook {
  author: string;
  book: string;
  genre: string;
  published: number;
  copiesSold: string;
  mainCharacter: string;
  setting: string;
  publisher: string;
}


export interface IShop {
  shopName: string;
  owner: string;
  location: string;
  openTime: string;
  closeTime: string;
  bestSelling: string;
  foundedYear: number;
  employees: number;
  rating: number;
}



export interface ITrainer {
  trainer: string;
  gymName: string;
  experience: number;
  specialization: string;
  location: string;
  clients: number;
  timing: string;
  rating: number;
}


export interface IRestaurant {
  restaurant: string;
  chef: string;
  cuisine: string;
  location: string;
  signatureDish: string;
  rating: number;
  established: number;
  branches: number;
}



export interface IConcert {
  singer: string;
  concertName: string;
  location: string;
  date: string;
  crowd: number;
  ticketPrice: number;
  duration: string;
  organizer: string;
}


export interface ICar {
  carBrand: string;
  model: string;
  owner: string;
  range: string;
  price: string;
  battery: string;
  topSpeed: string;
  color: string;
}
