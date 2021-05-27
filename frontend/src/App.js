import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentScreen from './screens/PaymentScreen';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <ScrollToTop />
          <Switch>
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route exact path='/search/:keyword' component={HomeScreen} />
            <Route exact path='/page/:pageNumber' component={HomeScreen} />
            <Route exact path='/search/:keyword/page/:pageNumber' component={HomeScreen} />
            <Route exact path='/' component={HomeScreen} />
            <Route path='/' component={Page404} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
