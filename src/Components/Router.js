import react from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Search" exact component={Search} />
        <Route path="/tv" exact component={TV} />
        <Route path="/Detail" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
