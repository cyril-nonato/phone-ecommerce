const SHOP_DATA = {
  samsung: {
    id: 'samsung',
    brand: 'Samsung',
    items: {
      galaxy_m30: {
        id: 1,
        name: 'Galaxy M30',
        price: 500,
        imageUrl: 'https://i.imgur.com/7a2hJya.jpg',
        status: 'Available. Released 2019, March',
        battery: 'Non-removable Li-Po 5000 mAh battery',
        memory: '64GB 4GB RAM, 128GB 6GB RAM'
      },
      galaxy_note10_plus: {
        id: 2,
        name: 'Galaxy Note 10 Plus',
        price: 750.00,
        imageUrl: 'https://i.imgur.com/rt44mZG.jpg',
        status: 'Available. Released 2019, August',
        battery: 'Non-removable Li-Ion 4300 mAh battery',
        memory: '256GB 12GB RAM, 512GB 12GB RAM'
      },
      galaxy_note10: {
        id: 3,
        name: 'Galaxy Note 10',
        price: 700,
        imageUrl: 'https://i.imgur.com/FsxfSJu.jpg',
        status: 'Available. Released 2019, August',
        battery: 'Non-removable Li-Ion 3500 mAh battery',
        memory: '256GB 8GB RAM'
      },
      galaxy_s10: {
        id: 4,
        name: 'Galaxy S10',
        price: 600,
        imageUrl: 'https://i.imgur.com/jYyDcvJ.jpg',
        status: 'Available. Released 2019, March',
        battery: 'Non-removable Li-Ion 3400 mAh battery',
        memory: '128GB 8GB RAM, 512GB 8GB RAM'
      }
    }
  },
  apple: {
    id: 'apple',
    brand: 'Apple',
    items: {
      iphone_11: {
        id: 9,
        name: 'iphone 11',
        price: 1100.00,
        imageUrl: 'https://i.imgur.com/2t9ZYcx.jpg',
        status: 'Available. Released 2019, September',
        battery: 'Non-removable Li-Ion 3110 mAh battery (11.91 Wh)',
        memory: '64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM'
      },
      iphone_11_Pro: {
        id: 10,
        name: 'Iphone 11 pro',
        price: 1200.00,
        imageUrl: 'https://i.imgur.com/zDPWd9Q.jpg',
        status: 'Available. Released 2019, September',
        battery: 'Non-removable Li-Ion 3046 mAh battery (11.67 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      iphone_xs: {
        id:11,
        name: 'Iphone XS',
        price: 700,
        imageUrl: 'https://i.imgur.com/Ljk9ADD.jpg',
        status: 'Available. Released 2018, September',
        battery: 'Non-removable Li-Ion 2658 mAh battery (10.13 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      iphone_x: {
        id: 12,
        name: 'Iphone X',
        price: 990,
        imageUrl: 'https://i.imgur.com/R9YlTlQ.jpg',
        status: 'Available. Released 2017, October',
        battery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
        memory: '64GB 3GB RAM, 256GB 3GB RAM'
      }
    }
  }
}

export default SHOP_DATA;