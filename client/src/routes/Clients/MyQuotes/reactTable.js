import React, { Component } from "react";
// react component for creating dynamic tables
import IconButton from "@material-ui/core/IconButton";
import ReactTable from "react-table";
import moment from "moment";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

// redux action
import { getMyQuotesList } from "../../../actions/QuoteActions";

class MyOrdersTable extends Component {
  componentDidMount() {
    this.props.getMyQuotesList(this.props.userData.id);
  }

  formatUserList = list => {
    const rows = list
      ? list.map(dataValue => {
          let dataRow = [];
          for (let key in dataValue) {
            dataRow.push(dataValue[key]);
          }
          return dataRow;
        })
      : "";
    return rows;
  };

  render() {
    let dataOrganized = this.formatUserList(this.props.myOrders);

    return (
      <ReactTable
        data={
          dataOrganized
            ? dataOrganized.map((prop, key) => {
                return {
                  id1: key,
                  id: prop[0],
                  date: prop[15].toDateString,
                  size: prop[5],
                  quantity: prop[7],
                  product: prop[6],
                  status: prop[14],
                  cost: prop[1],
                  actions: (
                    <div className="actions-right">
                      <NavLink
                        to={{
                          pathname: "/app/viewQuote",
                          quoteid: {
                            id: prop[0]
                          }
                        }}
                      >
                        <IconButton
                          color="primary"
                          aria-label="View"
                        >
                          <i className="zmdi zmdi-eye" />
                        </IconButton>
                      </NavLink>
                      <NavLink
                        to={{
                          pathname: "/app/invoice",
                          quoteid: {
                            id: prop[0]
                          }
                        }}
                      >
                        <IconButton
                          color="primary"
                          aria-label="Invoice"
                        >
                          <i className="zmdi zmdi-receipt" />
                        </IconButton>
                      </NavLink>
                      <NavLink
                        to={{
                          pathname: "/app/checkout",
                          quoteid: {
                            id: prop[0]
                          }
                        }}
                      >
                        <IconButton
                          color="primary"
                          aria-label="Checkout"
                        >
                          <i className="zmdi zmdi-card" />
                        </IconButton>
                      </NavLink>
                    </div>
                  )
                };
              })
            : ""
        }
        filterable
        columns={[
          {
            Header: "Date",
            accessor: "date",
            Cell: date => {
              return moment(date.updated_at)
                .local()
                .format("MM-DD-YYYY");
            }
          },
          {
            Header: "Product",
            accessor: "product"
          },
          {
            Header: "Size (sqft)",
            accessor: "size"
          },
          {
            Header: "Quantity",
            accessor: "quantity"
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Price (USD)",
            accessor: "cost"
          },
          {
            Header: "Actions",
            accessor: "actions",
            sortable: false,
            filterable: false
          }
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
const mapStateToProps = ({ quote, authUser }) => {
  const { myOrders } = quote;
  const { userData } = authUser;
  return { myOrders, userData };
};

export default connect(mapStateToProps, {
  getMyQuotesList
})(MyOrdersTable);
