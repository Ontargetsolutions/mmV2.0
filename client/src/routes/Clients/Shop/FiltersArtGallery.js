/**
 * Filters Component
 */
import React from 'react';
import {
  RefinementList,
  RatingMenu,
  NumericMenu,
  Panel,
  ClearRefinements,
  RangeInput,
  SearchBox,
} from 'react-instantsearch/dom';

// Card Component
import {RctCard, RctCardContent} from '../../../components/RctCard';

const Filters = ({props}) => {
  return (
    <div className="filters-wrapper">
      <RctCard>
        <RctCardContent>
          <SearchBox
            translations={{placeholder: 'Search Products'}}
            showLoadingIndicator
          />
        </RctCardContent>
      </RctCard>

      <RctCard className="categories">
        <RctCardContent>
          <Panel header="Collection">
            <RefinementList attribute="collection" searchable limit={5} />
          </Panel>
        </RctCardContent>
      </RctCard>

      <RctCard className="categories">
        <RctCardContent>
          <Panel header="Material">
            <RefinementList attribute="material" searchable limit={5} />
          </Panel>
        </RctCardContent>
      </RctCard>

      <RctCard className="categories">
        <RctCardContent>
          <Panel header="Dimentions">
            <RefinementList
              attribute="dimentions"
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
  );
};
export default Filters;
