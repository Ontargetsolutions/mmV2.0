import React, {Component} from 'react';

import RctCollapsibleCard from "../../../components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "./reactTable";
import DeleteConfirmationDialog from "../../../components/DeleteConfirmationDialog/DeleteConfirmationDialog";

class index extends Component {
  render () {
    return (
      <div >
        {/* <RctCollapsibleCard > */}
          {/* <div className="table-responsive"> */}
            {/* <div className="d-flex justify-content-between py-20 px-10 border-bottom">
              <div>
                <a
                  href="#"
                  onClick={e => this.onReload (e)}
                  className="btn-outline-default mr-10"
                >
                  <i className="ti-reload" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  onClick={e => this.opnAddNewUserModal (e)}
                  color="primary"
                  className="caret btn-sm mr-10"
                >
                  Add New User <i className="zmdi zmdi-plus" />
                </a>
              </div>
            </div> */}
            <Table
            //   OpenModalFunction={e => this.opnAddNewUserModal (e)}
            //   refreshTable={false}
            //   onDelete={this.onDelete}
            />
          {/* </div> */}
          {/* {loading && <RctSectionLoader />} */}
        {/* </RctCollapsibleCard> */}

      </div>
    );
  }
}

export default index;
