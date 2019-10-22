import {connect} from 'react-redux';
import { getItemStart } from '../../redux/shop/shop.actions';
import { selectItem } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ItemPage from './item-page.component';

const mapStateToProps = createStructuredSelector({
  item: selectItem
});

const mapDispatchToProps = dispatch => ({
  getItemStart: (brandName, model) => dispatch(getItemStart(brandName, model))
});

const ItemPageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps))(ItemPage);

export default ItemPageContainer;