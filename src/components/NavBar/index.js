import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import './NavBar.css'

let NavBar = (props) => {
    const loginOrProfile = () => { return(
       props.user ? 
        <div>
          <div className="log">
            <Link tag={Link} to="/login">  Logout  </Link>
          </div>
          <div className="text">
             {props.user.firstName}  
          </div>
        </div>
      : 
        <div>
          <div className="log">
            <Link tag={Link} to="/login">Log in</Link>
          </div>
        </div>)
    };
    return (
        <div className="navbar">
          {loginOrProfile(props)}
        </div>
    );
  };

  function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}


  
export default connect(mapState, actionCreators)(NavBar); 