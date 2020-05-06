/**
 * Sidebar Content
 */
import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import IntlMessages from '../../util/IntlMessages';

import NavMenuItem from './NavMenuItem';

// redux actions
import {onToggleMenu, getUser} from '../../actions';

class SidebarContent extends Component {
  componentDidMount () {
    this.props.getUser (this.props.userAuthe);
  }

  toggleMenu (menu, stateCategory) {
    let data = {
      menu,
      stateCategory,
    };
    this.props.onToggleMenu (data);
  }

  render () {
    const {userAuthe, userData} = this.props;
    const {sidebarMenus} = this.props.sidebar;
    return (
      <div className="rct-sidebar-nav">
        <nav className="navigation">
          {userData.Rol === 'Client' &&
            <div>
              <List
                className="rct-mainMenu p-0 m-0 list-unstyled"
                subheader={
                  <ListSubheader className="side-title" component="li">
                    <IntlMessages id="sidebar.general" />
                  </ListSubheader>
                }
              >
                {sidebarMenus.category1.map ((menu, key) => (
                  <NavMenuItem
                    menu={menu}
                    key={key}
                    onToggleMenu={() => this.toggleMenu (menu, 'category1')}
                  />
                ))}
              </List>
              <List
                className="rct-mainMenu p-0 m-0 list-unstyled"
                subheader={
                  <ListSubheader className="side-title" component="li">
                    <IntlMessages id="sidebar.customProduct" />
                  </ListSubheader>
                }
              >
                {sidebarMenus.category2.map ((menu, key) => (
                  <NavMenuItem
                    menu={menu}
                    key={key}
                    onToggleMenu={() => this.toggleMenu (menu, 'category2')}
                  />
                ))}
              </List>
              <List
                className="rct-mainMenu p-0 m-0 list-unstyled"
                subheader={
                  <ListSubheader className="side-title" component="li">
                    <IntlMessages id="sidebar.MyData" />
                  </ListSubheader>
                }
              >
                {sidebarMenus.category3.map ((menu, key) => (
                  <NavMenuItem
                    menu={menu}
                    key={key}
                    onToggleMenu={() => this.toggleMenu (menu, 'category3')}
                  />
                ))}
              </List>
            </div>}

          {(userData.Rol === 'Seller' ||
            userData.Rol === 'Admin') &&
              <div>
                <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={
                    <ListSubheader className="side-title" component="li">
                      <IntlMessages id="sidebar.general" />
                    </ListSubheader>
                  }
                >
                  {sidebarMenus.category4.map ((menu, key) => (
                    <NavMenuItem
                      menu={menu}
                      key={key}
                      onToggleMenu={() => this.toggleMenu (menu, 'category4')}
                    />
                  ))}
                </List>
                <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={
                    <ListSubheader className="side-title" component="li">
                      <IntlMessages id="sidebar.data" />
                    </ListSubheader>
                  }
                >
                  {sidebarMenus.category6.map ((menu, key) => (
                    <NavMenuItem
                      menu={menu}
                      key={key}
                      onToggleMenu={() => this.toggleMenu (menu, 'category6')}
                    />
                  ))}
                </List>
                <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={
                    <ListSubheader className="side-title" component="li">
                      <IntlMessages id="sidebar.reports" />
                    </ListSubheader>
                  }
                >
                  {sidebarMenus.category7.map ((menu, key) => (
                    <NavMenuItem
                      menu={menu}
                      key={key}
                      onToggleMenu={() => this.toggleMenu (menu, 'category7')}
                    />
                  ))}
                </List>
              </div>}

          {userData.Rol === 'Admin' &&
            <List
              className="rct-mainMenu p-0 m-0 list-unstyled"
              subheader={
                <ListSubheader className="side-title" component="li">
                  <IntlMessages id="sidebar.reports" />
                </ListSubheader>
              }
            >
              {sidebarMenus.category5.map ((menu, key) => (
                <NavMenuItem
                  menu={menu}
                  key={key}
                  onToggleMenu={() => this.toggleMenu (menu, 'category5')}
                />
              ))}
            </List>}
        </nav>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({sidebar, authUser}) => {
  const {userAuthe, userData} = authUser;
  return {sidebar, userData, userAuthe};
};

export default withRouter (
  connect (mapStateToProps, {
    onToggleMenu,
    getUser,
  }) (SidebarContent)
);
