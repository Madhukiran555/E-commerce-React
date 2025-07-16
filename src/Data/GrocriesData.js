const groceriesData = {
  Fruits: {
    image: "/Assets/Groceries/Fruits.jpg",
    items: [
      {
        name: "Apple (1kg)",
        image: "/Assets/Groceries/Fruits/apple.jpg",
        price: "₹180",
        oldPrice: "₹220",
        discountPercent: 18,
      },
      {
        name: "Banana (12 pcs)",
        image: "/Assets/Groceries/Fruits/banana.jpg",
        price: "₹50",
        oldPrice: "₹60",
        discountPercent: 16,
      },
    ],
  },
  Vegetables: {
    image: "/Assets/Groceries/Vegetables/vegtables.jpg",
    items: [
      {
        name: "Tomato (1kg)",
        image: "/Assets/Groceries/Vegetables/tomato.jpg",
        price: "₹35",
        oldPrice: "₹45",
        discountPercent: 22,
      },
      {
        name: "Onion (1kg)",
        image: "/Assets/Groceries/Vegetables/onion.jpg",
        price: "₹40",
        oldPrice: "₹50",
        discountPercent: 20,
      },
        {
        name: "Broccoli (1)",
        image: "/Assets/Groceries/Vegetables/broccoli.jpg",
        price: "₹65",
        oldPrice: "₹75",
        discountPercent: 22,
      },
        {
        name: "Potato (1kg)",
        image: "/Assets/Groceries/Vegetables/potato.jpg",
        price: "₹35",
        oldPrice: "₹45",
        discountPercent: 22,
      },
        {
        name: "Carrot (1kg)",
        image: "/Assets/Groceries/Vegetables/carot.jpg",
        price: "₹40",
        oldPrice: "₹50",
        discountPercent: 22,
      },
        {
        name: "Beetroot (1kg)",
        image: "/Assets/Groceries/Vegetables/beetroot.jpg",
        price: "₹55",
        oldPrice: "₹60",
        discountPercent: 22,
      },
    ],
  },
  Oils: {
    image: "/Assets/Groceries/Oils/oils.jpg",
    items: [
      {
        name: "Fortune Sunflower Oil (1L)",
        image: "/Assets/Groceries/Oils/sunflower.jpg",
        price: "₹140",
        oldPrice: "₹160",
        discountPercent: 12,
      },
    ],
  },
  Rice: {
    image: "/Assets/Groceries/Rices/rice.png",
    items: [
      {
        name: "Basmati Rice (5kg)",
        image: "/Assets/Groceries/Rice/basmati.jpg",
        price: "₹460",
        oldPrice: "₹500",
        discountPercent: 8,
      },
    ],
  },
  Flours: {
    image: "/Assets/Groceries/Flours/flour.jpg",
    items: [
      {
        name: "Aashirvaad Atta (5kg)",
        image: "/Assets/Groceries/Flours/atta.jpg",
        price: "₹270",
        oldPrice: "₹300",
        discountPercent: 10,
      },
    ],
  },
  Households: {
    image: "/Assets/Groceries/Households/Househ.jpg",
    items: [
      {
        name: "Harpic Toilet Cleaner (1L)",
        image: "/Assets/Groceries/Households/harpic.jpg",
        price: "₹95",
        oldPrice: "₹110",
        discountPercent: 14,
      },
    ],
  },
  "Nutrition & Health": {
    image: "/Assets/Groceries/Nutrition/nutrition.jpeg",
    items: [
      {
        name: "Horlicks Health Drink (500g)",
        image: "/Assets/Groceries/Nutrition/horlicks.jpg",
        price: "₹215",
        oldPrice: "₹250",
        discountPercent: 14,
      },
    ],
  },
  BabyCare: {
    image: "/Assets/Groceries/Baby/babycare.jpg",
    items: [
      {
        name: "Pampers Diapers (L, 46 pcs)",
        image: "/Assets/Groceries/BabyCare/pampers.jpg",
        price: "₹699",
        oldPrice: "₹750",
        discountPercent: 7,
      },
    ],
  },
  PetCare: {
    image: "/Assets/Groceries/PetCare/pet.jpeg",
    items: [
      {
        name: "Pedigree Dog Food (3kg)",
        image: "/Assets/Groceries/PetCare/pedigree.jpg",
        price: "₹750",
        oldPrice: "₹800",
        discountPercent: 6,
      },
    ],
  },
  DryFruits: {
    image: "/Assets/Groceries/DryFruits/dry.jpg",
    items: [
      {
        name: "Almonds (500g)",
        image: "/Assets/Groceries/DryFruits/almonds.jpg",
        price: "₹450",
        oldPrice: "₹500",
        discountPercent: 10,
      },
    ],
  },
  "Cooking Ingredients": {
    image: "/Assets/Groceries/Cooking Ingredients/cook.jpg",
    items: [
      {
        name: "Everest Turmeric Powder (200g)",
        image: "/Assets/Groceries/Ingredients/turmeric.jpg",
        price: "₹48",
        oldPrice: "₹60",
        discountPercent: 20,
      },
    ],
  },
  Chocolates: {
    image: "/Assets/Groceries/Chocolates/choco.jpg",
    items: [
      {
        name: "Cadbury Dairy Milk (150g)",
        image: "/Assets/Groceries/Chocolates/dairymilk.jpg",
        price: "₹120",
        oldPrice: "₹140",
        discountPercent: 14,
      },
    ],
  },

  Coffee: {
    image: "/Assets/Groceries/Coffe/coffe.jpg",
    items: [
      {
        name: "Nescafé Classic (200g)",
        image: "/Assets/Groceries/Coffee/nescafe.jpg",
        price: "₹290",
        oldPrice: "₹320",
        discountPercent: 9,
      },
    ],
  },
  "Energy Drinks": {
    image: "/Assets/Groceries/Energydrinks/drinnks.jpg",
    items: [
      {
        name: "Red Bull (250ml)",
        image: "/Assets/Groceries/Energy/redbull.jpg",
        price: "₹110",
        oldPrice: "₹130",
        discountPercent: 15,
      },
    ],
  },
  Snacks: {
    image: "/Assets/Groceries/Snacks/snack.jpg",
    items: [
      {
        name: "Lays Chips (Masala, 100g)",
        image: "/Assets/Groceries/Snacks/lays.jpg",
        price: "₹28",
        oldPrice: "₹35",
        discountPercent: 20,
      },
    ],
  },

  Spices: {
    image: "/Assets/Groceries/Spices/spices.jpg",
    items: [
      {
        name: "MDH Garam Masala (100g)",
        image: "/Assets/Groceries/Spices/garammasala.jpg",
        price: "₹48",
        oldPrice: "₹60",
        discountPercent: 20,
      },
    ],
  },

};

export default groceriesData;
