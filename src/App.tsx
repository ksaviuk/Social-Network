import './App.css';
import React, { useState } from 'react';
import HeaderCountainer from './components/Header/HeaderCountainer';
import Nav from './components/Nav/Nav';
import Info from './components/Info/Info';
import Friends from './components/Friends/Friends';
import { UsersPage } from './components/Users/UsersPage';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { useDispatch } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import ChatPage from './Pages/Chat/ChatPage';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from './redux/redux-store';



type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}


class App extends React.Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.initializeApp();
  }

  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderCountainer />
        <Nav />
        <div className='app-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />

            <Route path='/profile/' element={<ProfileContainer />} />

            <Route path='/friends' element={<Friends />} />

            <Route path='/messages' element={<MessagesContainer />} />

            <Route path='/users' element={<UsersPage />} />

            <Route path='/login' element={<Login />} />

            <Route path='/chat' element={<ChatPage />} />

            <Route path='/info' element={<Info />} />

            <Route path='/' element={<ProfileContainer />} />

            <Route path='/*' element={<div className='not-found'>Uncorrect address</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
  }


const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);




