import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsForNavigate = (state) => {
    return {
    isAuth: state.auth.isAuth
    }
  }

export const withAuthNavigate = (Component) => {

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/login' />
              }
              return <Component {...this.props} />
            }
        }
        let ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);
        
        return ConnectAuthNavigateComponent
    }