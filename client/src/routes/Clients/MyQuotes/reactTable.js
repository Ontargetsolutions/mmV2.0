import React, { Component } from "react";
// react component for creating dynamic tables
import IconButton from "@material-ui/core/IconButton";
import ReactTable from "react-table";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

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
    console.log(`myorders: ${JSON.stringify(this.props.myOrders)}`);

    return (
      <ReactTable
        data={
          dataOrganized
            ? dataOrganized.map((prop, key) => {
                return {
                  id1: key,
                  id: prop[0],
                  date: prop[17],
                  size: prop[7],
                  quantity: prop[9],
                  product: prop[8],
                  status: prop[16],
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
                        <Tooltip title="View order" placement="bottom">
                          <IconButton color="primary" aria-label="View">
                            <i className="zmdi zmdi-eye" />
                          </IconButton>
                        </Tooltip>
                      </NavLink>
                      {this.props.myOrders[key].Status === "Quotation sent" && (
                        <div>
                          <NavLink
                            to={{
                              pathname: "/app/invoice",
                              quoteid: {
                                id: prop[0]
                              },
                              sourse: {
                                source: "invoice"
                              }
                            }}
                          >
                            <Tooltip title="Invoice" placement="bottom">
                              <IconButton color="primary" aria-label="Invoice">
                                <i className="zmdi zmdi-receipt" />
                              </IconButton>
                            </Tooltip>
                          </NavLink>
                          <NavLink
                            to={{
                              pathname: "/app/checkout",
                              quoteid: {
                                id: prop[0]
                              },
                              source: {
                                source: "checkout"
                              }
                            }}
                          >
                            <Tooltip title="Checkout" placement="bottom">
                              <IconButton color="primary" aria-label="Checkout">
                                <i className="zmdi zmdi-card" />
                              </IconButton>
                            </Tooltip>
                          </NavLink>
                        </div>
                      )}
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
              return moment(date).format("MM-DD-YYYY");
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
