import React, {Component} from 'react';
// react component for creating dynamic tables
import IconButton from '@material-ui/core/IconButton';
import ReactTable from 'react-table';

import {connect} from 'react-redux';
import Moment from "react-moment";

// redux action
import {getUserList, deteletUser} from '../../../actions';

class ClientsTable extends Component {
  state = {
    users: null,
    userList: [],
  };

  componentDidMount () {
    this.props.getUserList ();
  }

  formatUserList = list => {
    const rows = list ? list.map (dataValue => {
      let dataRow = [];
      for (let key in dataValue) {
        dataRow.push (dataValue[key]);
      }
      return dataRow;
    }): '';
    return rows;
  };

  render () {
    let dataOrganized = this.formatUserList (this.props.usersList);

    return (
      <ReactTable
        data={dataOrganized ? dataOrganized.map ((prop, key) => {
          return {
            id1: key,
            id: prop[0],
            name: prop[1],
            phone: prop[2],
            email: prop[5],
            rol: prop[14],
            actions: (
              <div className="actions-right">
                <IconButton
                  color="primary"
                  aria-label="Edit"
                  onClick={() =>
                    alert (
                      "You've pressed the edit button on colmun id: " + key
                    )}
                >
                  <i className="zmdi zmdi-edit" />
                </IconButton>

                <IconButton
                  className="text-danger"
                  aria-label="Delete"
                  onClick={() => {
                    console.log ('id' + prop[0]);
                    console.log(this);
                    this.props.deteletUser (prop[0]);
                  }}
                >
                  <i className="zmdi zmdi-delete" />
                </IconButton>
              </div>
            ),
          };
        }):''}
        filterable
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Signup date',
            accessor: 'rol',
            Cell: props => {
              return <Moment format="YYYY/MM/DD">{props.value}</Moment>;
            }
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            sortable: false,
            filterable: false,
          },
        ]}
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={true}
        className="-striped -highlight"
      />
    );
  }
}

// map state to props
const mapStateToProps = ({user}) => {
  const {usersList} = user;
  return {usersList};
};

export default connect (mapStateToProps, {
  getUserList,
  deteletUser
}) (ClientsTable);
