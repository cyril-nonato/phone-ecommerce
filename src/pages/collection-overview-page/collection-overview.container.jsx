import { connect } from 'react-redux'
import { getCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionOverviewPage from './collection-overview-page.component';
import { compose } from 'redux';

const mapDispatchToProps = dispatch => ({
  getCollectionsStart: () => dispatch(getCollectionsStart())
})

const CollectionOverviewPageContainer = compose(
  connect(null, mapDispatchToProps))(CollectionOverviewPage)

export default CollectionOverviewPageContainer;