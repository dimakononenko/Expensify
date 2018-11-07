import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component (HOC) - A component (HOC) that renders another component

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is privat info j</p> }
      <WrappedComponent {...props}/>
    </div>
  ); 
};

const requiereAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
        ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiereAuthentication(Info);


// ReactDOM.render(<AdminInfo info='There are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {false} Info="There are the details"/>, document.getElementById('app'));
