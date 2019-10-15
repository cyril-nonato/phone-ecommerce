import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CollectionPage from '../collection-page/collection-page.component';
import CollectionOverviewPage from '../collection-overview-page/collection-overview-page.component';
import ItemPage from '../item-page/item-page.component';

const ShopPage = ({ match }) => {

  return (
    <Switch>
      <Route exact path={`${match.path}`} component={CollectionOverviewPage} />
      <Route exact path={`${match.path}/:brandName`} component={CollectionPage} />
      <Route path={`${match.path}/:brandName/:model`} component={ItemPage} />
    </Switch>
  );
}

export default ShopPage;