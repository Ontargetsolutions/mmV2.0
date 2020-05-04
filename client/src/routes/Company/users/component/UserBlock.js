// /**
//  * User Block
//  */
// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import api from '../../../../api';

// class UserBlock extends Component {
//     componentDidMount(){
//         const email = this.props.userAuthe;
//         let email1 = email.replace (/['"]+/g, '');
//         console.log (`email despues de la funcion ${JSON.stringify (email1)}`);
//         this.props.getUser (email1);
//     }

//     render() {
//         const {userAuthe, userData} = this.props;
//         console.log(`userdata ${JSON.stringify(this.props)}`)
//         console.log(`authData en block user ${JSON.stringify(userData)}`)
//         return (
//             <div className="profile-top mb-20">
//                 <img src={require('Assets/img/profile-bg.jpg')} alt="profile banner" className="img-fluid" width="1920" height="345" />
//                 <div className="profile-content">
//                     <div className="media">
//                         <img src={require('Assets/avatars/user-15.jpg')} alt="user profile" className="rounded-circle mr-30 bordered" width="140" height="140" />
//                         <div className="media-body pt-25">
//                             <div className="mb-20">
//                                 <h2>{userData.Name}</h2>
//                                 <p>{userData.Email}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// // map state to props
// const mapStateToProps = ( authUser) => {
//     const {userAuthe, userData} = authUser;
//     return { userAuthe, userData};
//   };
  
//   export default connect(mapStateToProps, getUser 
//   )(UserBlock);


