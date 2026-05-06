import pcsetup from '../images/home/pcsetup.png'
import laptop from '../images/home/laptop.png'
import monitor from '../images/home/monitor.png'
import mouse from '../images/home/mouse.png'
import keyboard from '../images/home/keyboard.png'
import mic from '../images/home/mic.png'
import { Link } from 'react-router'
export const products = [
  {
    id: 1,
    category: "Desktop",
    title: "High End Gaming Pc",
    image: pcsetup,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    new: 'New',
    reviews: 10,
    availability: "In Stock",
    shipping: "Free Shipping"

  },
  {
    id: 2,
    category: "Laptop",
    title: "Gaming Laptop",
    image: laptop,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    new: 'New',
    reviews: 0,
    availability: "Not in Stock",
    shipping: "Free Shipping"
  },
  {
    id: 3,
    category: "Monitor",
    title: "UHD Display",
    image: monitor,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    reviews: 2,
    availability: "In Stock",
    shipping: "Free Shipping"
  },
  {
    id: 4,
    category: "Mouse",
    title: "G502 Wireless",
    image: mouse,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    reviews: 0,
    availability: "Not Available",
    shipping: "Free Shipping"

  },
  {
    id: 5,
    category: "Keyboard",
    title: "G502 Wireless",
    image: keyboard,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    new: 'New',
    reviews: 40,
    availability: "In Stock",
    shipping: "Paid Shipping"
  },
  {
    id: 6,
    category: "Mic",
    title: "G502 Wireless",
    image: mic,
    price: 1800,
    new: "New",
    oldPrice: 1799,
    currency: "$",
    reviews: 0,
    availability: "In Stock",
    shipping: "Free Shipping"
  },
  {
    id: 7,
    category: "Disktop",
    title: "High End Gaming Pc",
    image: pcsetup,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    new: 'New',
    reviews: 0,
    availability: "Not Available",
    shipping: "Free Shipping"
  },
  {
    id: 8,
    category: "laptop",
    title: "G502 Wireless",
    image: laptop,
    price: 1800,
    oldPrice: 1799,
    currency: "$",
    reviews: 0,
    availability: "In Stock",
    shipping: "Paid Shipping"
  },
];
