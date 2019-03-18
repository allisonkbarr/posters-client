import React from 'react';

const EventsList = ({ list }) => (
	<React.Fragment>
		{list.map((event, i) => {
			<p key={i}>This is event number {i}: {event}</p>
		})}
	</React.Fragment>
);

export default EventsList;
