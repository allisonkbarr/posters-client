import React from 'react';
import { connect } from 'react-redux';
import EventsList from '../components/EventsList';

const Events = ({ searchLocation, eventsList, isFetching, hasError }) => (
	<div className="section">
		{isFetching && <p>Loading...</p>}
		{hasError && <p>Sorry, there was a problem loading the events. Please try again.</p>}
		{!isFetching && !hasError &&
			<React.Fragment>
				{searchLocation && <p>Events in {searchLocation}</p>}
				<EventsList list={eventsList} />
			</React.Fragment>
		}
	</div>
);

const mapStateToProps = ({ events, searchLocation }) => ({
	searchLocation,
	eventsList: events.items,
	isFetching: !!events.meta.isFetching,
	hasError: !!events.meta.error
});

export default connect(mapStateToProps)(Events);
