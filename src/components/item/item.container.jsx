import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { selectItemIsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import Item from './item.component';

const mapStateToprops = createStructuredSelector({
  loading: (state) => !selectItemIsLoaded(state),
});

const ItemContainer = compose(connect(mapStateToprops), WithSpinner)(Item)

export default ItemContainer;