export const initialState = {
	events: {
		meta: {
			isFetching: false,
			error: null
		},
			items: []
	},
	searchLocation: null
};

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const REJECT_EVENTS = 'REJECT_EVENTS';

export default function (state = initialState, action) {
	switch (action.type) {
			case REQUEST_EVENTS:
				return {
					...state,
					searchLocation: '',
					events: {
						...state.events,
						meta: {
							isFetching: true,
							error: null
						}
					}
				};
			case RECEIVE_EVENTS:
				return {
					...state,
					searchLocation: action.searchLocation,
					events: {
						...state.events,
						meta: {
							isFetching: false,
							error: null
						},
						events: action.events
					}
				};
			case REJECT_EVENTS:
				return {
					...state,
					events: {
						...state.events,
						meta: {
							isFetching: false,
							error: action.error
						}
					}
				}
			default:
				return state;
    }
}