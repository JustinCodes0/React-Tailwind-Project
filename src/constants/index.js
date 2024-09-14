import hero from "../assets/hero.webp";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.webp";
import livingRoomImage from "../assets/living-room.webp";

import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "Binary Brews",
  subtitle: "Empowering Coders, One Brew at a Time.",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Kitchen Renovation",
    description:
      "Transform your kitchen into a modern, functional space with our comprehensive renovation services. From custom cabinetry to state-of-the-art appliances, we handle all aspects of kitchen remodeling.",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Create a spa-like retreat in your home with our bathroom renovation services. We offer luxurious fixtures, custom tiling, and innovative designs to elevate your bathroom experience.",
    image: bathroomImage,
    alt: "Bathroom Renovation",
  },
  {
    title: "Living Room Renovation",
    description:
      "Update your living room with our expert renovation services. We offer custom designs, new flooring options, and stylish lighting solutions to create a warm and inviting space for your family and guests.",
    image: livingRoomImage,
    alt: "Living Room Renovation",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Modern Kitchen Renovation",
    description:
      "A complete overhaul of a traditional kitchen, featuring custom cabinetry, granite countertops, and state-of-the-art appliances.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Luxurious Bathroom Remodel",
    description:
      "Transformed an outdated bathroom into a spa-like retreat with marble tiling, a glass shower, and modern fixtures.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Outdoor Living Space",
    description:
      "Designed a beautiful outdoor living area, complete with a pergola, fire pit, and cozy seating for entertainment.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Elegant Living Room Update",
    description:
      "Updated a living room with new flooring, stylish lighting, and custom-built shelving units.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Basement Conversion",
    description:
      "Converted an unused basement into a modern, multi-functional space including a home theater, gym, and guest bedroom.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Home Office Transformation",
    description:
      "Created a sleek and functional home office, optimizing space with ergonomic furniture, ample storage, and modern decor.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Hear what our clients have to say about their experiences with Binary-Brews We take pride in our craft and are committed to delivering top-notch home renovation services.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Tired Developer",
      review:
        "Binary-Brews is a coder’s paradise! The coffee is strong, the Wi-Fi is fast, and the ambiance is perfect for long coding sessions. I’ve written more lines of code here than anywhere else, and I credit it all to the amazing brews and friendly staff.",
      image: user1,
    },
    {
      name: "Carla Mendes",
      title: "o-Founder, CodeBlox",
      review:
        "Ah, Binary-Brews... A surprisingly impressive establishment amidst the mediocrity of the Net. I entered with suspicion, but was soon captivated by their dark roast—bold, complex, and full-bodied, much like myself. The espresso here packs the kind of punch that even a virus of my sophistication requires to keep my plans... running smoothly.",
      image: user3,
    },
    {
      name: "Goku Son",
      title: "Martial Artist",
      review:
        "WOW! Binary Brews is AMAZING! I stopped by after a long day of training, and let me tell you—this place powered me up like a Senzu Bean! I had their espresso and felt ready to take on a whole new tournament. But then... I tried their matcha—it’s even better than King Kai’s cooking!",
      image: user4,
    },
    {
      name: "Noah Thompson",
      title: "Web Developer",
      review:
        "Binary-Brews was an amazing experience. They emprovise with me and created my own drink! How cool is that? I'd definitely recommend this place to anyone.",
      image: user5,
    },
    {
      name: "Penny Wong",
      title: "Java Enthusiast",
      review:
        "The staff, kind they are. Even gave me extra matcha with a tiny cup just my size! Happy I am.",
      image: user2,
    },
    {
      name: "Dr. Ivo Robotnik",
      title: "Evil Genius",
      review:
        "Curses! Nucup Café is a disaster! I came here expecting a perfect cup of coffee to fuel my evil plans, but instead, I was served... decaf! My genius brain runs on nothing but the finest caffeinated concoctions, and this pitiful brew left me more sluggish than my incompetent henchbots!",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@vastuspaze.com",
  },
  address: {
    label: "Address",
    value: "1234 Renovation Ave, Suite 100, Your City, ST 56789",
  },
};
