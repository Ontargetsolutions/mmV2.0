import React, {Component, Fragment} from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';

import {connect} from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// delete confirmation dialog
import DeleteConfirmationDialog
  from '../../../components/DeleteConfirmationDialog/DeleteConfirmationDialog';

import ViewDialog from './ViewUser';

// redux action
import {getWorkersList, deteletUser, getPersonById, manageViewUserDialog} from '../../../actions';

class userTable extends Component {
  state = {
    users: null,
    workerList: [],
    userSelected: '',
    person: '',
  };

  componentWillMount () {
    console.log (`en component will mount de la tabla`);
    this.props.getWorkersList ();
  }

  /**
   * On Delete
   */
  onDelete (data) {
    this.refs.deleteConfirmationDialog.open ();
    this.props.getPersonById (data);
  }

  /**
   * Delete User Permanently
   */
  deleteUserPermanently () {
    console.log (`here in delete ${JSON.stringify (this.props.person)}`);
    this.props.deteletUser (this.props.person.id);
    this.refs.deleteConfirmationDialog.close ();
  }

  formatUserList = list => {
    const rows = list
      ? list.map (dataValue => {
          let dataRow = [];
          for (let key in dataValue) {
            dataRow.push (dataValue[key]);
          }
          return dataRow;
        })
      : '';
    return rows;
  };

  render () {
    let dataOrganized = this.formatUserList (this.props.workerList);
    console.log (`listado de trabajadores`, this.props.workerList);

    return (
      <Fragment>
        {/* {this.props.viewUserDialog && <ViewDialog />} */}
        <ReactTable
          data={
            dataOrganized
              ? dataOrganized.map ((prop, key) => {
                  return {
                    id1: key,
                    id: prop[0],
                    name: prop[1],
                    phone: prop[2],
                    email: prop[5],
                    address: prop[6] +
                      ' ' +
                      prop[7] +
                      ' ' +
                      prop[8] +
                      ',' +
                      ' ' +
                      prop[10] +
                      ' ' +
                      prop[11] +
                      ' ' +
                      prop[9],
                    actions: (
                      <div className="actions-right">
                        <Tooltip title="View order" placement="bottom">
                          <IconButton
                            color="primary"
                            aria-label="View"
                            onClick={e => {
                              e.preventDefault ();
                              this.props.manageViewUserDialog ({userId: prop[0], open:true});
                            }}
                          >
                            <i className="zmdi zmdi-eye" />
                          </IconButton>
                        </Tooltip>
                        <IconButton
                          color="primary"
                          aria-label="Edit"
                          onClick={e => {
                            e.preventDefault ();
                            this.props.OpenModalFunction (e);
                          }}
                        >
                          <i className="zmdi zmdi-edit" />
                        </IconButton>

                        <IconButton
                          className="text-danger"
                          aria-label="Delete"
                          onClick={() => {
                            this.onDelete (prop[0]);
                          }}
                        >
                          <i className="zmdi zmdi-delete" />
                        </IconButton>
                      </div>
                    ),
                  };
                })
              : ''
          }
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
              Header: 'Address',
              accessor: 'address',
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
        <DeleteConfirmationDialog
          ref="deleteConfirmationDialog"
          title="Are You Sure Want To Delete?"
          message="This will delete user permanently."
          onConfirm={() => this.deleteUserPermanently ()}
        />
      </Fragment>
    );
  }
}

// map state to props
const mapStateToProps = ({user}) => {
  const {workerList, person, viewUserDialog} = user;
  return {workerList, person, viewUserDialog};
};

export default connect (mapStateToProps, {
  getWorkersList,
  deteletUser,
  getPersonById,
  manageViewUserDialog
}) (userTable);
