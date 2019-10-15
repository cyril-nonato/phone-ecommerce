import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import { getWindowWidth } from './redux/navigation/navigation.actions';

import * as S from './App.styles';

import SignOut from './components/sign-out/sign-out.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

const ShopPage = lazy(() => import('./pages/shop-page/shop-page.component'));

const CartPage = lazy(() => import('./pages/cart-page/cart-page.component'));

const NotFoundPage = lazy(() => import('./pages/not-found-page/not-found-page.component'));

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    const getWindowSize = () => dispatch(getWindowWidth(window.innerWidth))
    window.addEventListener('resize', getWindowSize)

  }, [dispatch])

  return (
    <React.Fragment>
      <S.GlobalStyles />
      <Navigation />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign-in" component={SignInPage} />
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/sign-out" component={SignOut} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
