import React from 'react';
import ReactDOM from 'react-dom';
import CreateCoursePackage from './create-course-package';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateCoursePackage />, div);
  ReactDOM.unmountComponentAtNode(div);
});