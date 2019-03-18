import React from 'react';
import { connect } from 'react-redux';
import { REJECT_EVENTS, RECEIVE_EVENTS, REQUEST_EVENTS } from '../reducer';
import { xhr, buildQuery } from '../utils';

const eventfulApiKey = 'rBmx7tdzZVSd4mCQ';
const eventfulSearchEndpoint = 'http://api.eventful.com/json/events/search';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			hasValidationError: false
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.updateInputValue = this.updateInputValue.bind(this);
	};

	onSubmit(e) {
		e.preventDefault();
		const inputValue = this.state.inputValue.trim();
		if (!inputValue) {
			this.setState({ hasValidationError: true });
			return;
		}

		this.props.search(inputValue);
	}

	updateInputValue(e) {
		e.preventDefault();
		const value = e.target.value;
		this.setState({ inputValue: value })
	}

	render() {
		return (
			<form className="section" onSubmit={this.onSubmit}>
				<input className="input" value={this.state.inputValue} onChange={this.updateInputValue} />
				<button className="button is-primary" type="submit">Search</button>
				{this.state.hasValidationError && <p className="is-error">Please enter a location</p>}
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	search: async (searchLocation) => {
		dispatch({ type: REQUEST_EVENTS });
		try {
			const query = buildQuery({ app_key: eventfulApiKey, location: searchLocation, page_size: 10 });
			const url = `${eventfulSearchEndpoint}?${query}`;
			const response = await xhr('GET', url, { mode: 'cors' });
			const events = await response.json().events;
			dispatch({ type: RECEIVE_EVENTS, events, searchLocation })
		} catch (error) {
			dispatch({ type: REJECT_EVENTS, error: error.message });
			return;
		}
	}
});

export default connect(null, mapDispatchToProps)(Search);
