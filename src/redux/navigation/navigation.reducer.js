import actionTypes from "./navigation.types"

const INITIAL_STATE = {
  navLinks: {
    shop: {
      name: 'Shop',
      route: '/shop'
    },
    cart: {
      name: 'Cart',
      route: '/cart'
    },
    sign_in: {
      name: 'Sign-in',
      route: '/sign-in'
    },
    sign_up: {
      name: 'Sign-up',
      route: '/sign-up'
    },
    sign_out: {
      name: 'Sign-out',
      route: '/sign-out'
    }
  },
  windowWidth: window.innerWidth,
  toggleSidedrawer: false,
}

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GET_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.payload
      }
    case actionTypes.TOGGLE_SIDEDRAWER:
      return {
        ...state,
        toggleSidedrawer: !state.toggleSidedrawer
      }
    default:
      return state;
  }
}

export default navigationReducer;