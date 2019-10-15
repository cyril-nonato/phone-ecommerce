
const INITIAL_STATE = {
  sections: {
    samsung: {
      id: 1,
      name: 'Samsung',
      linkUrl: 'shop/samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
    },
    apple: {
      id: 2,
      name: 'Apple',
      linkUrl: 'shop/apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    }
  }

}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default homeReducer;