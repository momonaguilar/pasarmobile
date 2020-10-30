const categories = [
  {
    id: "product1",
    name: "Plants",
    tags: ["products"],
    count: 1,
    image: require("../assets/icons/plants.png"),
  },
  {
    id: "product2",
    name: "Seeds",
    tags: ["products"],
    count: 3,
    image: require("../assets/icons/seeds.png"),
  },
  {
    id: "product3",
    name: "Flowers",
    tags: ["products"],
    count: 5,
    image: require("../assets/icons/flowers.png"),
  },
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
    ],
  },
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export { categories, explore, products, profile };
