import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './common/constants';
import LoginIn from './components/login';
import SignUp from './components/signup';


const AppRouters = () =>

  (
    <Switch>
      <Route exact path={`${routes.LOGIN}`} component={LoginIn} />
      <Route exact path={`${routes.SIGNUP}`} component={SignUp} />
      {/* <Route exact path={`${routes.DASHBOARD}`} component={} /> */}
      <Route  path="*"render={() => <div>Page not Found</div>} />
    </Switch>
  )
;

export { AppRouters as Routers };