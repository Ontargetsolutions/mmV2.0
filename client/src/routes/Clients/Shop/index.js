/**
 * Shop Page
 */
import React, {Component} from 'react';
import {
  InstantSearch,
  Stats,
	SortBy,
  Hits,
  Pagination,
  Configure,
  MenuSelect,
  Panel,
  SearchBox,
} from 'react-instantsearch/dom';
import algoliasearch from 'algoliasearch/lite';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

//Components
import Hit from './HitsArtGallery';
import Filters from './FiltersArtGallery';

const searchClient = algoliasearch (
  'AF197BQP6P',
  'f2989da7735d37c957697a3fc64bbecc'
);

export default class Shop extends Component {
  render () {
    return (
      <div className="shop-wrapper">
        <InstantSearch searchClient={searchClient} indexName="art_mm">
          <div className="mb-30 filter-sm-wrap d-block d-md-none">
            <ExpansionPanel>
              <ExpansionPanelSummary
                className="filter-icon"
                expandIcon={<i className="zmdi zmdi-tune" />}
              >
                <span className="p-0">Filters</span>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className="d-sm-flex justify-content-between w-100">
                  <Panel className="mx-10 mb-20 mb-sm-0" header="Search">
                    <SearchBox
                      translations={{placeholder: 'Search Products'}}
                      showLoadingIndicator
                    />
                  </Panel>
                  <Panel className="mx-10 mb-20 mb-sm-0" header="Category">
                    <div className="app-selectbox-sm">
                      <MenuSelect attribute="category" limit={5} />
                    </div>
                  </Panel>
                  <Panel className="mx-10 mb-20 mb-sm-0" header="Material">
                    <div className="app-selectbox-sm">
                      <MenuSelect attribute="material" limit={5} />
                    </div>
                  </Panel>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <Filters art={true} />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="shop-content">
                {/* <div className="stats-info d-flex mb-30 justify-content-between align-items-center">
                  <div className="app-selectbox-sm w-30">
                    <SortBy
                      defaultRefinement="instant_search"
                      items={[
                        {value: 'instant_search', label: 'Featured'},
                        {
                          value: 'instant_search_price_asc',
                          label: 'Lowest Price',
                        },
                        {
                          value: 'instant_search_price_desc',
                          label: 'Highest Price',
                        },
                      ]}
                    />
                  </div>
                  <Stats />
                </div> */}
                <Configure hitsPerPage={12} />
                <Hits
                  hitComponent={props => <Hit {...props} art={true} />}
                  className="mb-30"
                  showLoadingIndicator
                />
                <div className="pagination mb-30">
                  <Pagination
                    totalPages={5}
                    showFirst
                    showLast
                    showNext
                    showPrevious
                  />
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}


