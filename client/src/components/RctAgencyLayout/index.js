/**
 * Rct Horizontal Menu Layout
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from "react-redux";

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ThemeOptions from 'components/ThemeOptions/ThemeOptions';
import AgencyMenu from '../AgencyMenu/AgencyMenu';

class RctAgencyLayout extends Component {

   renderPage() {
      const { pathname } = this.props.location;
      const { children, match } = this.props;
      if (pathname === `${match.url}/chat` || pathname.startsWith(`${match.url}/mail`) || pathname === `${match.url}/todo`) {
         return (
            <div className="rct-page-content p-0" style={{ height: 'calc(100vh - 15.5rem)' }}>
               {children}
            </div>
         );
      }
      return (
         <Scrollbars
            className="rct-scroll"
            autoHide
            autoHideDuration={100}
            style={{ height: 'calc(100vh - 15.5rem)' }}
         >
            <div className="rct-page-content">
               {children}
            </div>
         </Scrollbars>
      );
   }
   getActiveLayoutBg() {
      const { agencyLayoutBgColors, enableBgImage} = this.props;
      if(!enableBgImage) {
         for (const layoutBg of agencyLayoutBgColors) {
            if (layoutBg.active) {
               return layoutBg.class
            }
         }
      } else {
         return "app-boxed-v2"
      }
   }

   render() {
      const { bgImagePath } = this.props;
      return (
         <div 
            style={{ backgroundImage: `url(${bgImagePath})`}}
            className="app-boxed" 
         >
            <div className="app-container">
               <div className="rct-page-wrapper">
                  <div className="rct-app-content">
                     <div className="app-header">
                        <Header agencyMenu />
                     </div>
                     <div className="rct-page">
                        <AgencyMenu />
                        {this.renderPage()}
                     </div>
                     <ThemeOptions />
                     <Footer />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ settings }) => {
   const { agencyLayoutBgColors, bgImagePath } = settings;
   return { agencyLayoutBgColors, bgImagePath }
}

export default connect(mapStateToProps)(withRouter(RctAgencyLayout));
