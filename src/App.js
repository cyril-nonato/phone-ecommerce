import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getWindowWidth } from './redux/navigation/navigation.actions';
import SignOut from './components/sign-out/sign-out.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import NavigationContainer from './components/navigation/navigation.container';
import SignInPageContainer from './pages/sign-in-page/sign-in-page.container';
import SignUpPageContainer from './pages/sign-up-page/sign-up-page.container';

import * as S from './App.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

const ShopPage = lazy(() => import('./pages/shop-page/shop-page.component'));

const CartPageContainer = lazy(() => import('./pages/cart-page/cart-page.container'));

const NotFoundPage = lazy(() => import('./pages/not-found-page/not-found-page.component'));

export function App({getWindowWidth}) {
  useEffect(() => {

    const getWindowSize = () => getWindowWidth(window.innerWidth)
    window.addEventListener('resize', getWindowSize)

  }, [getWindowWidth])

  return (
    <React.Fragment>
      <S.GlobalStyles />
      <NavigationContainer />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in" component={SignInPageContainer} />
            <Route path="/sign-up" component={SignUpPageContainer} />
            <Route path="/cart" component={CartPageContainer} />
            <Route path="/sign-out" component={SignOut} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  getWindowWidth: width => dispatch(getWindowWidth(width))
})

export default connect(null, mapDispatchToProps)(App);
