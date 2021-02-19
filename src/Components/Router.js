import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import { TV, Home, Detail, Search } from '../Routes';

const RouterComponent = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/tv" component={TV} />
          <Route path="/show/:id" component={Detail} />
          <Route path="/movie/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default RouterComponent;
