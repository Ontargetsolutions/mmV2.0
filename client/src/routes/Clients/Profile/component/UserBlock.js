/**
 * User Block
 */
import React, { Component } from 'react';
import { connect } from "react-redux";

// redux action
// import { getUser} from '../../../../actions';

class UserBlock extends Component {

    render() {
        const { userData} = this.props;
        return (
            <div className="profile-top mb-20">
                <img src={require('../../../../assets/img/profile-bg.jpg')} alt="profile banner" className="img-fluid" width="1920" height="345" />
                <div className="profile-content">
                    <div className="media">
                        {/* <img src={require('../../../../assets/avatars/user-15.jpg')} alt="user profile" className="rounded-circle mr-30 bordered" width="140" height="140" /> */}
                        <div className="media-body pt-25">
                            <div className="mb-20">
                                <h2>{userData.Name}</h2>
                                <p>{userData.Email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({authUser}) => {
    const { userData, userAuthe } = authUser;
    return { userData, userAuthe};
  };
  
  export default connect(mapStateToProps,
    // getUser
  )(UserBlock);


