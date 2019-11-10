import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateCoursePackage } from './modules/create-course-package';
import { SubscribeCanopyLearn } from './modules/subscribe-canopy-learn';
import { NavMenu } from './modules/navmenu'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavMenu />
          <CreateCoursePackage />
        </Route>
        <Route exact path="/subscribe">
          <NavMenu />
          <SubscribeCanopyLearn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
