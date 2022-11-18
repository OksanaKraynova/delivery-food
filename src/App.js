import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getUserAuth } from './action';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Main from './pages/Main';
import Success from './pages/Success';
import ScrollToTop from './utils/scrollToTop';

function App(props) {
  const getUser = () => props.getUserAuth()

  useEffect(() => getUser())

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/order' element={<Success />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps =state => {
  return {user: state.userState.user}
}

const mapDispatchToProps = dispatch => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default  connect(mapStateToProps, mapDispatchToProps)(App);
