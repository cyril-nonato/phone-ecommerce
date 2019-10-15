import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { selectCollectionIsLoaded, selectShopError } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import Collection from './collection.component';

const mapStateToprops = createStructuredSelector({
  loading: (state) => !selectCollectionIsLoaded(state),
  error: selectShopError
});

const CollectionContainer = compose(connect(mapStateToprops), WithSpinner)(Collection)

export default CollectionContainer;