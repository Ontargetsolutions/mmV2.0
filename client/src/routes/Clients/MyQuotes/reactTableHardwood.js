import React, { Component } from "react";
// react component for creating dynamic tables
import IconButton from "@material-ui/core/IconButton";
import ReactTable from "react-table";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

import { connect } from "react-redux";
import Moment from "react-moment";

// redux action
import { getMyQuotesList, quoteToView} from "../../../actions/QuoteActions";

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

  filterData = data =>{
    let dataFilteredArray = data.filter(product => product.Product === "HardwoodFlooring");
    return dataFilteredArray;
  }

  render() {
    let datafiltered = this.filterData(this.props.myOrders);
    let dataOrganized = this.formatUserList(datafiltered);
 console.log(`dataOrganized`, dataOrganized);
    return (
      <ReactTable
        data={
          dataOrganized
            ? dataOrganized.map((prop, key) => {
                return {
                  id1: key,
                  id: prop[0],
                  date: prop[25],
                  thickness: prop[18],
                  width: prop[19],
                  length: prop[20],
                  type: prop[21],
                  style: prop[22],
                  finish: prop[23],
                  quantity: prop[27],
                  status: prop[16],
                  cost: prop[1],
                  actions: (
                    <div className="actions-right">
                      <NavLink
                        to={{
                          pathname: "/app/viewQuote",
                          quoteid: {
                            id: prop[0],
                            product: "hardwood"
                          }
                        }}
                      >
                        <Tooltip title="View order" placement="bottom">
                          <IconButton color="primary" aria-label="View" onClick={()=>this.props.quoteToView({quoteId: prop[0]})}>
                            <i className="zmdi zmdi-eye" />
                          </IconButton>
                        </Tooltip>
                      </NavLink>
                      {this.props.myOrders[key].Status === "Quotation sent" && (
                        <div>
                          {/* {this.props.quoteToView({quoteId: prop[0], sourse: "invoice"})} */}
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
                              <IconButton color="primary" aria-label="Invoice" onClick={()=>this.props.quoteToView({quoteId: prop[0], source: "invoice"})}>
                                <i className="zmdi zmdi-receipt" />
                              </IconButton>
                            </Tooltip>
                          </NavLink>
                          <NavLink
                            to={{
                              pathname: "/app/checkout"
                            }}
                          >
                            <Tooltip title="Checkout" placement="bottom">
                              <IconButton color="primary" aria-label="Checkout" onClick={()=>this.props.quoteToView({quoteId: prop[0], source: "checkout"})}>
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
            Cell: props => {
              return <Moment format="YYYY/MM/DD">{props.value}</Moment>;
            }
          },
          {
            Header: "Type",
            accessor: "type"
          },
          {
            Header: "Style",
            accessor: "style"
          },
          {
            Header: "Finish",
            accessor: "finish"
          },
          {
            Header: "Thickness",
            accessor: "thickness"
          },
          {
            Header: "Width",
            accessor: "width"
          },
          {
            Header: "Length",
            accessor: "length"
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
  getMyQuotesList, quoteToView
})(MyOrdersTable);
