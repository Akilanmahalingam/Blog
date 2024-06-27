import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navv from './Navv';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Signup from './Signup';
import Login from './Login';





function App() {

  const initialUsers = new Map([
    ['user1', { password: 'password1' }],
    ['user2', { password: 'password2' }],
    ['user3', { password: 'password3' }],
    ['user4', { password: 'password4' }],
    ['user5', { password: 'password5' }],
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const history = useHistory();

  // useEffect(() => {
  //   // Load users from localStorage when the component mounts
  //   const storedUsers = localStorage.getItem('users');
  //   if (storedUsers) {
  //     setUsers(new Map(JSON.parse(storedUsers)));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save users to localStorage whenever it changes
  //   localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
  // }, [users]);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    if (status) {
      history.push('/show');
    } else {
      history.push('/signup');
    }
  };

  const handleSignupSuccess = (username, password) => {
    setUsers((prevUsers) => {
      const updatedUsers = new Map(prevUsers).set(username, { password });
      console.log("Updated Users Map: ", Array.from(updatedUsers.entries()));
      return updatedUsers;
    });
    setIsLoggedIn(true);
    history.push('/show');
  };

  return (
    <div className='App'>
      {isLoggedIn && <Navv />} {/* Conditionally render Navv */}
      <Switch>
        <Route exact path="/" component={() => <Login onLogin={handleLogin} users={users} />} />
        <Route exact path="/show" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/blogs/:idd" component={BlogDetails} />
        <Route path="/signup" component={() => <Signup onSignupSuccess={handleSignupSuccess} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;