import logo1 from "./tablelogobook(black).png";
import logo2 from "./tablelogobook(white).png";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import githubIcon from "./github 1.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";

import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";

import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

import cafeImg1 from "./natureCafe1.jpg";
import cafeImg2 from "./natureCafe2.jpg";
import cafeImg3 from "./natureCafe3.jpg";
import cafeImg4 from "./natureCafe4.jpg";

import cafeImg5 from "./modernCafe.jpg";
import cafeImg6 from "./modernCafe.jpg";
import cafeImg7 from "./modernCafe.jpg";
import cafeImg8 from "./modernCafe.jpg";

import cafeImg9 from "./vintageCafe.jpg";
import cafeImg10 from "./vintageCafe.jpg";
import cafeImg11 from "./vintageCafe.jpg";
import cafeImg12 from "./vintageCafe.jpg";

import cafeImg13 from "./BohemianCafe.jpg";
import cafeImg14 from "./BohemianCafe.jpg";
import cafeImg15 from "./BohemianCafe.jpg";
import cafeImg16 from "./BohemianCafe.jpg";

import testimonial1 from "./testimonial-1.jpeg";
import testimonial2 from "./testimonial-2.jpeg";

export const assets = {
  logo1,
  logo2,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  githubIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,

  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,

  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,

  cafeImg1,
  cafeImg2,
  cafeImg3,
  cafeImg4,
  cafeImg5,
  cafeImg6,
  cafeImg7,
  cafeImg8,
  cafeImg9,
  cafeImg10,
  cafeImg11,
  cafeImg12,
  cafeImg13,
  cafeImg14,
  cafeImg15,
  cafeImg16,

  testimonial1,
  testimonial2,



};

export const cities = [
  "Jaipur",
  "Barmer",
  "Jodhpur",
  "Bikaner",
  "Ajmer",
  "Udaipur",
  "Pushkar",
];

// Exclusive Offers Dummy Data

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// // For Room Details Page
// export const roomCommonData = [
//   {
//     icon: assets.homeIcon,
//     title: "Clean & Safe Stay",
//     description: "A well-maintained and hygienic space just for you.",
//   },
//   {
//     icon: assets.badgeIcon,
//     title: "Enhanced Cleaning",
//     description: "This host follows Staybnb's strict cleaning standards.",
//   },
//   {
//     icon: assets.locationFilledIcon,
//     title: "Excellent Location",
//     description: "90% of guests rated the location 5 stars.",
//   },
//   {
//     icon: assets.heartIcon,
//     title: "Smooth Check-In",
//     description: "100% of guests gave check-in a 5-star rating.",
//   },
// ];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Great Stack",
  email: "user.greatstack@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data
//DD => dummy data
export const cafeAtLocationDD = {
  "_id": "67f76393197ac559e4089b72",
  "name": "Relax Cafe",
  "address": "Main Road  123 Street , 23 Colony",
  "contact": "+0123456789",
  "owner": userDummyData,
  "city": "New York",
  "createdAt": "2025-04-10T06:22:11.663Z",
  "updatedAt": "2025-04-10T06:22:11.663Z",
  "__v"                                             : 0,
};

// cafes Dummy Data
// room dummy data
export const cafesDD = [
  {
    "_id": "67f7647c197ac559e4089b96",
    "Cafe": cafeAtLocationDD,  // "hotel" : hotelDummyData
    "cafeTheme": "Nature",
    "costPerPerson": 199,
    "amenities": [
      "Free Wi-Fi",
      "Air-Conditioned",
      "Comfortable Seating",
      "Charging Points",
      "Clean Washrooms",
    ],
    "images": [cafeImg1, cafeImg2, cafeImg3, cafeImg4],
    "isAvailable": true,
    "createdAt": "2025-04-10T06:26:04.013z",
    "updatedAt": "2025-04-10T06:26:04.013z",
    "_v": 0,
  },
  {
    "_id": "67f7647c197ac559e4089b97",
    "Cafe": cafeAtLocationDD,
    "cafeTheme": "Modern",
    "costPerPerson": 249,
    "amenities": [
      "Free Wi-Fi",
      "Air-Conditioned",
      "Power Outlets",
      "Work Friendly",
      "UPI Payments",
    ],
    "images": [cafeImg5, cafeImg6, cafeImg7, cafeImg8],
    "isAvailable": true,
    "createdAt": "2025-04-11T09:12:10.213z",
    "updatedAt": "2025-04-11T09:12:10.213z",
    "_v": 0,
  },
  {
  "_id": "67f7647c197ac559e4089b98",
  "Cafe": cafeAtLocationDD,
  "cafeTheme": "Vintage",
  "costPerPerson": 179,
  "amenities": [
    "Comfortable Seating",
    "Quiet Ambience",
    "Indoor Seating",
    "Cash Payments",
    "Clean Washrooms"
  ],
  "images": [cafeImg9, cafeImg10, cafeImg11, cafeImg12],
  "isAvailable": true,
  "createdAt": "2025-04-12T14:45:32.501z",
  "updatedAt": "2025-04-12T14:45:32.501z",
  "_v": 0
 },
 {
  "_id": "67f7647c197ac559e4089b99",
  "Cafe": cafeAtLocationDD,
  "cafeTheme": "Bohemian",
  "costPerPerson": 299,
  "amenities": [
    "Outdoor Seating",
    "Pet Friendly",
    "Instagrammable Ambience",
    "Live Music",
    "Table Reservation"
  ],
  "images": [cafeImg13, cafeImg14, cafeImg15, cafeImg16],
  "isAvailable": false,
  "createdAt": "2025-04-13T18:22:48.902z",
  "updatedAt": "2025-04-13T18:22:48.902z",
  "_v": 0
}


];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    cafee: cafesDD[1],
    cafeLocation: cafeAtLocationDD,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    cafee : cafesDD[2],
    cafeLocation: cafeAtLocationDD,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    cafee: cafesDD[3],
    cafeLocation: cafeAtLocationDD,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

export const testimonialCardData=[
  {
    "image" : testimonial1,
    "name" : "Piyush Jajoo",
    "handle" : "@Piyush",
  },
  {
    "image" : testimonial1,
    "name" : "Aditya Jajoo",
    "handle" : "@Aditya",
  },
  {
    "image" : testimonial2,
    "name" : "Dimple Jajoo",
    "handle" : "@dimple",
  },
  {
    "image" : testimonial2,
    "name" : "Suman Jajoo",
    "handle" : "@Suman",
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
