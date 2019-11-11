import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateCoursePackage } from './modules/create-course-package';
import { SubscribeCanopyLearn } from './modules/subscribe-canopy-learn';
import { EditDeleteCoursePackage } from './modules/edit-delete-course-package';
import { NavMenu } from './modules/navmenu'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavMenu />
          <EditDeleteCoursePackage />
        </Route>
        <Route exact path="/create" render={props =>
          <div>
            <NavMenu />
            <CreateCoursePackage {...props} />
          </div>
        } />
        <Route exact path="/subscribe">
          <NavMenu />
          <SubscribeCanopyLearn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
