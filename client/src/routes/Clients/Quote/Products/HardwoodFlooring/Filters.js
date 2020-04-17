/**
 * Filters Component
 */
import React from 'react';
import {
   RefinementList,
   Panel,
   ClearRefinements,
   SearchBox
} from 'react-instantsearch/dom';

// Card Component
import { RctCard, RctCardContent } from '../../../../../components/RctCard';


const Filters = () => {
   return (
      <div className="filters-wrapper">
         <RctCard>
            <RctCardContent>
               <SearchBox
                  translations={{ placeholder: 'Search Products' }}
                  showLoadingIndicator
               />
            </RctCardContent>
         </RctCard>

         <RctCard className="categories">
            <RctCardContent>
               <Panel header="Finish">
                  <RefinementList
                     attribute="finish"
                     // searchable
                     limit={10}
                  />
               </Panel>
            </RctCardContent>
         </RctCard>
         <RctCard>
            <RctCardContent>
               <ClearRefinements />
            </RctCardContent>
         </RctCard>
      </div>
   )
}
export default Filters;