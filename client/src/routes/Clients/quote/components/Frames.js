/**
 * Shop Page
 */
import React, { Component } from 'react'
import {
	InstantSearch,
	Hits,
	Pagination,
	Configure,
	MenuSelect,
	Panel
} from 'react-instantsearch/dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

//Components
import Hit from './Hits';
import Filters from './Filters';



export default class Shop extends Component {
	render() {
	
		return (
			<div className="shop-wrapper">
				<InstantSearch
					appId="AF197BQP6P"
					apiKey="f2989da7735d37c957697a3fc64bbecc"
					indexName="frames_mm"
				>
					<div className="mb-30 filter-sm-wrap d-block d-md-none">
						<ExpansionPanel>
							<ExpansionPanelSummary className="filter-icon" expandIcon={<i className="zmdi zmdi-tune"></i>}>
								<span className="p-0">Filters</span>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className="d-sm-flex justify-content-between w-100">
									<Panel
										className="mx-10 mb-20 mb-sm-0"
										header="Category"
									>
										<div className="app-selectbox-sm">
											<MenuSelect
												attribute="category"
												limit={5}
											/>
										</div>
									</Panel>
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-4 d-none d-md-block">
							<Filters />
						</div>
						<div className="col-lg-9 col-md-8 col-sm-12">
							<div className="shop-content">
								<Configure hitsPerPage={12} />
								<Hits
									hitComponent={props => (<Hit {...props} />)}
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
		)
	}
}
