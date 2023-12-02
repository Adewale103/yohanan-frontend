import fireStarter from "../Images/yohanan1.jpeg";
import briquettes from "../Images/yohanan8.jpeg";
import rechargeable from "../Images/yohanan2.jpeg";
import manual from "../Images/yohanan22.jpeg";

export const SliderData = [
  {
    id: 1,
    title: "Rechargeable Charcoal stove",
    desc: "Revolutionize your cooking experience with our Rechargeable Charcoal Stove. Efficient and eco-friendly, it's designed to enhance your culinary adventures while minimizing environmental impact.",
    cover: rechargeable,
  },
  {
    id: 2,
    title: "Manual Charcoal Stove",
    desc: "Discover the simplicity and reliability of our Manual Charcoal Stove. Crafted for convenience, it ensures a hassle-free cooking process, allowing you to enjoy the essence of traditional cooking with modern ease.",
    cover: manual,
  },
  {
    id: 3,
    title: "Fire Starter",
    desc: "Ignite the flames effortlessly with our Fire Starter. Specially crafted to make your cooking journey seamless, it guarantees a quick and efficient start to your culinary endeavors.",
    cover: fireStarter,
  },
  {
    id: 4,
    title: "Briquettes",
    desc: "Fuel your cooking aspirations with our high-quality Briquettes. Designed for optimal performance, these eco-friendly fuel sources promise a clean and sustainable approach to your culinary adventures.",
    cover: briquettes,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="cash"></ion-icon>,
    title: "Buy now, Pay small small",
    subtitle: "Shop with ease through our 'Buy now, Pay small small' program.",
    bg: "#e39ff4",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "We prioritize the safety of your transactions.",
    bg: "#e39ff4",
  },
  {
    icon: <ion-icon name="man"></ion-icon>,
    title: "Pay via Agent",
    subtitle: "Opt for the convenience of paying through an agent.",
    bg: "#e39ff4",
  },
  {
    icon: <ion-icon name="walk"></ion-icon>,
    title: " Back Guarantee",
    subtitle:
      "Your satisfaction is our priority, and we ensure a risk-free experience.",
    bg: "#e39ff4",
  },
];

export const products = [
  {
    id: "02",
    productName: "Rechargeable Charcoal stove ",
    imgUrl: rechargeable,
    category: " yohanan",
    price: 40000,
    shortDesc:
      "Explore a new era in cooking with our Rechargeable Charcoal Stove, designed to revolutionize your culinary experience!",
    description:
      "Revolutionize your cooking experience with our Rechargeable Charcoal Stove. Efficient and eco-friendly, it's designed to enhance your culinary adventures while minimizing environmental impact.",
    reviews: [
      {
        name: "Halima",
        rating: 4.8,
        text: "I love the product.",
      },
      {
        name: "Peter",
        rating: 4.8,
        text: "They have good customer service.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Manual Charcoal Stove ",
    imgUrl: manual,
    category: " yohanan",
    price: 23000,
    shortDesc:
      "Experience the simplicity of traditional cooking with a modern touch through our Manual Charcoal Stove",
    description:
      "Discover the simplicity and reliability of our Manual Charcoal Stove. Crafted for convenience, it ensures a hassle-free cooking process, allowing you to enjoy the essence of traditional cooking with modern ease.",
    reviews: [
      {
        name: "Precious",
        rating: 4.8,
        text: "It is affordable for me.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "26",
    productName: "Fire Starter ",
    imgUrl: fireStarter,
    category: " yohanan",
    price: 400,
    shortDesc:
      "Effortlessly ignite the flames of your culinary creativity with our Fire Starter!",
    description:
      "Ignite the flames effortlessly with our Fire Starter. Specially crafted to make your cooking journey seamless, it guarantees a quick and efficient start to your culinary endeavors!",
    reviews: [
      {
        name: "Fatimah",
        rating: 4.8,
        text: "The fire starter saves me time.",
      },
      {
        name: "Zainab",
        rating: 4.8,
        text: "Thank you yohanan.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Briquettes",
    imgUrl: briquettes,
    category: " yohanan",
    price: 300,
    shortDesc:
      "Power your culinary aspirations with our high-quality Briquettes!",
    description:
      "Fuel your cooking aspirations with our high-quality Briquettes. Designed for optimal performance, these eco-friendly fuel sources promise a clean and sustainable approach to your culinary adventures.!",
    reviews: [
      {
        name: "Deborah",
        rating: 4.6,
        text: "I did not regret buying it.",
      },
      {
        name: "Esther",
        rating: 4.9,
        text: "My grandmother enjoys using it.",
      },
    ],
    avgRating: 4.7,
  },

  ,
];
