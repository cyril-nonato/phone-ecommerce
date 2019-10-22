import { connect } from 'react-redux';
import { selectWindowInnerWidth } from '../../redux/navigation/navigation.selectors';
import { toggleSidedrawer } from '../../redux/navigation/navigation.actions';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Toolbar from './toolbar.component';

const mapStateToProps = createStructuredSelector({
  windowWidth: selectWindowInnerWidth,
});

const mapDispatchToProps = dispatch => ({
  toggleSidedrawer: () => dispatch(toggleSidedrawer())
});

const ToolbarContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Toolbar);

export default ToolbarContainer;