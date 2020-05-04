// /**
//  * Update User Details Form
//  */
// import React from "react";
// import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

// const UpdateUserForm = ({ user, onUpdateUserDetail }) => (
//   <Form>
//     <Row sm={12}>
//       <Col sm={8}>
//         <FormGroup>
//           <Label for="userName">Name</Label>
//           <Input
//             type="text"
//             name="userName"
//             id="userName"
//             placeholder="Enter Name"
//             value={addNewUserDetails.name}
//             onChange={e => onChangeAddNewUserDetails("name", e.target.value)}
//           />
//         </FormGroup>
//       </Col>
//       <Col sm={4}>
//         <FormGroup>
//           <Label for="userPhone">Phone</Label>
//           <Input
//             type="phone"
//             name="userPhone"
//             id="userPhone"
//             placeholder="Enter Phone"
//             value={addNewUserDetails.phone}
//             onChange={e => onChangeAddNewUserDetails("phone", e.target.value)}
//           />
//         </FormGroup>
//       </Col>
//     </Row>

//     <Row>
//       <Col sm={8}>
//         <FormGroup>
//           <Label for="userEmail">Email</Label>
//           <Input
//             type="email"
//             name="userEmail"
//             id="userEmail"
//             placeholder="Enter Email"
//             value={addNewUserDetails.email}
//             onChange={e => onChangeAddNewUserDetails("email", e.target.value)}
//           />
//         </FormGroup>
//       </Col>
//       <Col sm={4}>
//         <FormGroup>
//           <Label for="accountType">Account Type</Label>
//           <Input
//             className="mb-20"
//             name="accountType"
//             type="select"
//             id="accountType"
//             value={addNewUserDetails.rol}
//             onChange={e => onChangeAddNewUserDetails("rol", e.target.value)}
//           >
//             <option>Admin</option>
//             <option>Seller</option>
//           </Input>
//         </FormGroup>
//       </Col>
//     </Row>
//     <Row>
//       <Col sm={8}>
//         <FormGroup>
//           <Label for="userEmail">Address 1</Label>
//           <Input
//             value={addNewUserDetails.address1}
//             type="text"
//             name="user-address1"
//             id="address1"
//             className="has-input input-lg"
//             placeholder="Address 1"
//             onChange={e =>
//               onChangeAddNewUserDetails("address1", e.target.value)
//             }
//           />
//         </FormGroup>
//       </Col>
//       <Col sm={4}>
//         <FormGroup>
//           <Label for="userEmail">Address 2</Label>
//           <Input
//             value={addNewUserDetails.address2}
//             type="text"
//             name="user-address2"
//             id="address2"
//             className="has-input input-lg"
//             placeholder="Address 2"
//             onChange={e =>
//               onChangeAddNewUserDetails("address2", e.target.value)
//             }
//           />
//         </FormGroup>
//       </Col>
//     </Row>
//     <Row>
//       <Col sm={8}>
//         <FormGroup>
//           <Label for="userEmail">Country</Label>
//           <Input
//             className="mb-20"
//             type="select"
//             bsSize="lg"
//             id="country"
//             onChange={e => onChangeAddNewUserDetails("country", e.target.value)}
//           >
//             {countries
//               ? countries.map((count, index) => {
//                   return (
//                     <option value={count.code} key={index}>
//                       {count.name}
//                     </option>
//                   );
//                 })
//               : ""}
//           </Input>
//         </FormGroup>
//       </Col>
//       <Col sm={4}>
//         <FormGroup>
//           <Label for="userEmail">State</Label>
//           <Input
//             className="mb-20"
//             type="select"
//             bsSize="lg"
//             id="state"
//             onChange={e => onChangeAddNewUserDetails("stateC", e.target.value)}
//           >
//             {states
//               ? states.map((state, index) => {
//                   return (
//                     <option value={state.region} key={index}>
//                       {state.region}
//                     </option>
//                   );
//                 })
//               : ""}
//           </Input>
//         </FormGroup>
//       </Col>
//     </Row>
//     <Row>
//       <Col sm={8}>
//         <FormGroup>
//           <Label for="userEmail">City</Label>
//           <Input
//             value={addNewUserDetails.city}
//             type="text"
//             name="user-city"
//             id="city"
//             className="has-input input-lg"
//             placeholder="City"
//             onChange={e => onChangeAddNewUserDetails("city", e.target.value)}
//           />
//         </FormGroup>
//       </Col>
//       <Col sm={4}>
//         <FormGroup>
//           <Label for="userEmail">Zipcode</Label>
//           <Input
//             value={addNewUserDetails.zipcode}
//             type="text"
//             name="user-zipcode"
//             id="zipcode"
//             className="has-input input-lg"
//             placeholder="Zip code"
//             onChange={e => onChangeAddNewUserDetails("zipcode", e.target.value)}
//           />
//         </FormGroup>
//       </Col>
//     </Row>
//   </Form>
// );

// export default UpdateUserForm;
