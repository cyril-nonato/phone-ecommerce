import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUserLoading } from '../../redux/user/user.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SignUp from './sign-up.component';

const mapStateToProps = createStructuredSelector({
  loading: selectCurrentUserLoading
});

const SignUpContainer = compose(connect(mapStateToProps), WithSpinner)(SignUp);

export default SignUpContainer;