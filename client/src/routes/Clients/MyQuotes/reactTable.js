import React, {Component} from 'react';
// react component for creating dynamic tables
import IconButton from '@material-ui/core/IconButton';
import ReactTable from 'react-table';

import {connect} from 'react-redux';

// redux action
import {getMyQuotesList} from '../../../actions/QuoteActions';

class MyOrdersTable extends Component {
  componentDidMount () {
    this.props.getMyQuotesList (this.props.userData.id);
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
    let dataOrganized = this.formatUserList (this.props.myOrders);

    return (
      <ReactTable
        data={
          dataOrganized
            ? dataOrganized.map ((prop, key) => {
                return {
                  id1: key,
                  id: prop[0],
                  date: prop[15],
                  size: prop[5],
                  quantity: prop[7],
                  product: prop[6],
                  status: prop[14],
                  cost: prop[1],
                  // actions: (
                  //   <div className="actions-right">
                  //     <IconButton
                  //       color="primary"
                  //       aria-label="Edit"
                  //       onClick={() =>
                  //         alert (
                  //           "You've pressed the edit button on colmun id: " +
                  //             key
                  //         )}
                  //     >
                  //       <i className="zmdi zmdi-eye" />
                  //     </IconButton>
                  //     <IconButton
                  //       color="primary"
                  //       aria-label="Edit"
                  //       onClick={() =>
                  //         alert (
                  //           "pay for this order: " +
                  //             key
                  //         )}
                  //     >
                  //       <i className="zmdi zmdi-money" />
                  //     </IconButton>

                  //   </div>
                  // ),
                };
              })
            : ''
        }
        filterable
        columns={[
          {
            Header: 'Date',
            accessor: 'date',
          },
          {
            Header: 'Product',
            accessor: 'product',
          },
          {
            Header: 'Size',
            accessor: 'size',
          },
          {
            Header: 'Quantity',
            accessor: 'quantity',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Price',
            accessor: 'cost',
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
const mapStateToProps = ({quote, authUser}) => {
  const {myOrders} = quote;
  const {userData} = authUser;
  return {myOrders, userData};
};

export default connect (mapStateToProps, {
  getMyQuotesList,
}) (MyOrdersTable);
