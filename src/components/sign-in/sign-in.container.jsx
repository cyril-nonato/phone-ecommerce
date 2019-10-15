import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUserLoading } from '../../redux/user/user.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SignIn from './sign-in.component';

const mapStateToProps = createStructuredSelector({
  loading: selectCurrentUserLoading
});

const SignInContainer = compose(connect(mapStateToProps), WithSpinner)(SignIn);

export default SignInContainer;