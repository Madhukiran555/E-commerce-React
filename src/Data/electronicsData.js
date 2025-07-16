const electronicsData = {
  Mobiles: {
    brands: [
         {
        name: 'Apple',
        image: '/Assets/apple.jpg',
        models: [
          {
            id: 'apple-iphone-14-pro',
            name: 'iPhone 14 pro',
            price: '₹79,999',
            discountPercent: 10,
            image: '/Assets/Mobiles/iphone/14.jpg',
            images: [
              '/Assets/Mobiles/iphone/14.jpg',
  
              '/Assets/Mobiles/iphone/14-3.jpg',
              '/Assets/Mobiles/iphone/14-4.jpg'
            ],
            video: encodeURI('/Assets/Mobiles/iphone/iphone14.mp4'),
            description: 'The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.40 centimetres (6.06) diagonally.'
          },
          {
            id: 'apple-iphone-15-pro',
            name: 'iPhone 15 pro',
            price: '₹94,099',
            discountPercent: 12,
            image: '/Assets/Mobiles/iphone/15.jpg',
            images: [
              '/Assets/Mobiles/iphone/15.jpg',
              '/Assets/Mobiles/iphone/15-1.jpg'
            ],
            description: 'iPhone 15 Pro Max offers a titanium body, 6.7-inch Super Retina XDR display, and 5x telephoto camera for stunning zoom shots.'
          },
          {
            id: 'apple-iphone-15',
            name: 'iPhone 15',
            price: '₹82,099',
            discountPercent: 10,
            image: '/Assets/Mobiles/iphone/15.jpg',
            images: [
              '/Assets/Mobiles/iphone/155.jpg'
            ],
            description: 'iPhone 15 features a 6.1-inch display, A16 Bionic chip, and advanced dual-camera system for better low-light performance.'
          },
          {
            id: 'apple-iphone-15-pro-max',
            name: 'iPhone 15 pro Max',
            price: '₹1,44,799',
            discountPercent: 6,
            image: '/Assets/Mobiles/iphone/15 p m.jpg',
            images: [
              '/Assets/Mobiles/iphone/15 p m.jpg'
            ],
            description: 'iPhone 15 Pro Max offers a titanium body, 6.7-inch Super Retina XDR display, and 5x telephoto camera for stunning zoom shots.'
          },
          {
            id: 'apple-iphone-12',
            name: 'iPhone 12',
            price: '₹60,111',
            discountPercent: 12,
            image: '/Assets/Mobiles/iphone/12.jpg',
            images: [
              '/Assets/Mobiles/iphone/12.jpg'
            ],
            description: 'iPhone 12 comes with A14 Bionic chip, 6.1-inch OLED display, and dual-camera system with Night mode support.'
          },
          {
            id: 'apple-iphone-13',
            name: 'iPhone 13',
            price: '₹68,099',
            discountPercent: 10,
            image: '/Assets/Mobiles/iphone/13.jpg',
            images: [
              '/Assets/Mobiles/iphone/13.jpg'
            ],
            description: 'iPhone 13 brings improved battery life, A15 Bionic chip, Cinematic mode video, and advanced dual cameras.'
          },
          {
            id: 'apple-iphone-14-pro-max',
            name: 'iPhone 14 pro Max',
            price: '₹1,02,999',
            discountPercent: 8,
            image: '/Assets/Mobiles/iphone/14 p m.jpg',
            images: [
              '/Assets/Mobiles/iphone/14 p m.jpg'
            ],
            description: 'iPhone 14 Pro Max introduces Dynamic Island, Always-On Display, A16 Bionic chip, and ProMotion 120Hz refresh rate.'
          },
          {
            id: 'apple-iphone-16',
            name: 'iPhone 16',
            price: '₹92,099',
            discountPercent: 6,
            image: '/Assets/Mobiles/iphone/16.png',
            images: [
              '/Assets/Mobiles/iphone/16.png'
            ],
            description: 'iPhone 16 is the latest flagship with next-gen A18 chip, AI-driven features, improved camera system, and longer battery life.'
          }

        ],
      },


      {
        name: 'Samsung',
        image: '/Assets/Samsung.png',
        models: [
          {
            name: 'Samsung S22',
            price: '₹59,999',
            discountPercent: 8,
            image: '/Assets/Mobiles/Samsung/s22.jpg',
            description: 'Flagship device with top-tier display and performance.',
          },
        ],
      },
      {
        name: 'OnePlus',
        image: '/Assets/Oneplus.png',
        models: [
          {
            name: 'OnePlus 11R',
            price: '₹39,999',
              discountPercent: 8,
            image: '/Assets/Mobiles/OnePlus/11r.jpg',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'Lava',
        image: '/Assets/Lava.jpg',
        models: [
          {
            name: 'Lava Blaze Curve',
            price: '₹33,999',
              discountPercent: 12,
            image: '/Assets/Mobiles/lava.jpg',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'Oppo',
        image: '/Assets/oppo.png',
        models: [
          {
            name: 'Oppo 14 pro pro',
            price: '₹59,999',
             discountPercent: 2,
            image: '/Assets/Mobiles/oppo.png',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'Vivo',
        image: '/Assets/Vivo.png',
        models: [
          {
            name: 'Vivo v50',
            price: '₹59,999',
            discountPercent: 12,
            image: '/Assets/Mobiles/v50.jpg',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'IQ',
        image: '/Assets/iq.png',
        models: [
          {
            name: 'Neo 9 pro',
            price: '₹39,999',
            image: '/Assets/Mobiles/iq.jpg',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'Xiaomi',
        image: '/Assets/mi.png',
        models: [
          {
            name: 'Redmi 14 pro',
            price: '₹29,999',
            discountPercent: 9,
            image: '/Assets/Mobiles/xiaomi.jpg',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'Real-Me',
        image: '/Assets/Realme.png',
        models: [
          {
            name: 'Real-Me 14pro',
            price: '₹49,999',
            discountPercent: 22,
            image: '/Assets/Mobiles/realme.png',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
          {
        name: 'Poco',
        image: '/Assets/poco.jpg',
        models: [
          {
            name: 'Poco 6R',
            price: '₹19,999',
            image: '/Assets/Mobiles/poco.jpg',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
     {
        name: 'Nokia',
        image: '/Assets/Nokia.jpg',
        models: [
          {
            name: 'Nokia 3310',
            price: '₹1,999',
            discountPercent: 18,
            image: '/Assets/Mobiles/nokia.png',
            description: 'Smooth performance with Snapdragon 8+ Gen 1 chip.',
          },
        ],
      },
    ],
  },

  Laptops: {
    brands: [
      {
        name: 'Apple',
        image: '/Assets/macbook.jpg',
        models: [
          {
            name: 'MacBook Air M2',
            price: '₹1,09,999',
            image: '/Assets/macbook.jpg',
            description: 'Sleek and powerful laptop with Apple M2 chip.',
          },
        ],
      },
      {
        name: 'Dell',
        image: '/Assets/dell.jpg',
        models: [
          {
            name: 'Dell XPS 13',
            price: '₹94,999',
            image: '/Assets/dell.jpg',
            description: 'Compact ultrabook with high-res display and strong build.',
          },
        ],
      },
    ],
  },

  Televisions: {
    brands: [
      {
        name: 'Sony',
        image: '/Assets/sony_tv.jpg',
        models: [
          {
            name: 'Sony Bravia 4K',
            price: '₹64,990',
            image: '/Assets/sony_tv.jpg',
            description: 'Smart Android TV with vibrant 4K visuals.',
          },
        ],
      },
    ],
  },

  Refrigerators: {
    brands: [
      {
        name: 'LG',
        image: '/Assets/lg_fridge.jpg',
        models: [
          {
            name: 'LG Smart Fridge',
            price: '₹27,990',
            image: '/Assets/lg_fridge.jpg',
            description: 'Energy-efficient and spacious refrigerator.',
          },
        ],
      },
    ],
  },

  WashingMachines: {
    brands: [
      {
        name: 'Bosch',
        image: '/Assets/bosch_wm.jpg',
        models: [
          {
            name: 'Bosch Front Load',
            price: '₹32,999',
            image: '/Assets/bosch_wm.jpg',
            description: 'Front load washing machine with eco-silence drive.',
          },
        ],
      },
      {
        name: 'IFB',
        image: '/Assets/ifb_wm.jpg',
        models: [
          {
            name: 'IFB Top Load',
            price: '₹25,990',
            image: '/Assets/ifb_wm.jpg',
            description: 'Fully automatic top load with smart features.',
          },
        ],
      },
    ],
  },

  Cameras: {
    brands: [
      {
        name: 'Canon',
        image: '/Assets/canon.jpg',
        models: [
          {
            name: 'Canon EOS 1500D',
            price: '₹38,999',
            image: '/Assets/canon.jpg',
            description: 'DSLR with 24.1MP and WiFi support for content creators.',
          },
        ],
      },
      {
        name: 'Nikon',
        image: '/Assets/nikon.jpg',
        models: [
          {
            name: 'Nikon D3500',
            price: '₹41,500',
            image: '/Assets/nikon.jpg',
            description: 'Entry-level DSLR with amazing image quality.',
          },
        ],
      },
    ],
  },

  Headphones: {
    brands: [
      {
        name: 'Sony',
        image: '/Assets/sony_headphones.jpg',
        models: [
          {
            name: 'Sony WH-1000XM4',
            price: '₹24,990',
            image: '/Assets/sony_headphones.jpg',
            description: 'Industry-leading noise cancellation headphones.',
          },
        ],
      },
      {
        name: 'JBL',
        image: '/Assets/jbl.jpg',
        models: [
          {
            name: 'JBL Tune 760NC',
            price: '₹7,499',
            image: '/Assets/jbl.jpg',
            description: 'Over-ear noise-canceling wireless headphones.',
          },
        ],
      },
    ],
  },

    Printers: {
    brands: [
      {
        name: 'HP',
        image: '/Assets/hp_printer.jpg',
        models: [
          {
            name: 'HP Ink Tank 419',
            price: '₹13,499',
            image: '/Assets/hp_printer.jpg',
            description: 'Wireless color printer with mobile printing support.',
          },
        ],
      },
      {
        name: 'Canon',
        image: '/Assets/canon_printer.jpg',
        models: [
          {
            name: 'Canon PIXMA G3000',
            price: '₹14,499',
            image: '/Assets/canon_printer.jpg',
            description: 'Refillable ink tank with WiFi and fast print speed.',
          },
        ],
      },
    ],
  },

  Tablets: {
    brands: [
      {
        name: 'Apple',
        image: '/Assets/ipad.jpg',
        models: [
          {
            name: 'iPad 10th Gen',
            price: '₹44,900',
            image: '/Assets/ipad.jpg',
            description: '10.9-inch display, A14 Bionic, Pencil & Keyboard support.',
          },
        ],
      },
      {
        name: 'Samsung',
        image: '/Assets/galaxy_tab.jpg',
        models: [
          {
            name: 'Galaxy Tab S9 FE',
            price: '₹36,999',
            image: '/Assets/galaxy_tab.jpg',
            description: 'S Pen included, 90Hz LCD, DeX mode.',
          },
        ],
      },
    ],
  },

  Smartwatches: {
    brands: [
      {
        name: 'Noise',
        image: '/Assets/noise_watch.jpg',
        models: [
          {
            name: 'Noise ColorFit Pro 4 Alpha',
            price: '₹3,999',
            image: '/Assets/noise_watch.jpg',
            description: 'AMOLED display with Bluetooth calling.',
          },
        ],
      },
      {
        name: 'Fire-Boltt',
        image: '/Assets/fireboltt_watch.jpg',
        models: [
          {
            name: 'Fire-Boltt Phoenix Ultra',
            price: '₹2,499',
            image: '/Assets/fireboltt_watch.jpg',
            description: 'Metallic body, multiple watch faces, smart notifications.',
          },
        ],
      },
    ],
  },
};

export default electronicsData;
