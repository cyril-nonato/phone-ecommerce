import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCollectionByBrandNameStart } from '../../redux/shop/shop.actions';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionPage from './collection-page.component';

const mapStateToProps = createStructuredSelector({
  collection: selectCollection
});

const mapDispatchToProps = dispatch => ({
  getCollectionByBrandNameStart: brandName => dispatch(getCollectionByBrandNameStart(brandName)) 
})

const CollectionPageContainer = connect(mapStateToProps,mapDispatchToProps)(CollectionPage);

export default CollectionPageContainer;