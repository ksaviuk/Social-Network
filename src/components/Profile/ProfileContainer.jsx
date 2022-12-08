import React from 'react';
import style from './Profile.module.css'
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import axios from 'axios';
import { connect } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';



function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data);
    })
  };



  render() {
    return (
      <div className={style.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

// const TakeParams = (props) => {
//   return <ProfileContainer {...props} params={useParams()} />
// }

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
};


let UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(UrlDataContainerComponent);