import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import Moment from 'moment';

describe('ticketListReducer', () => {
  let action;
  const sampleTicketData = {
    names : 'Rick & Morty',
    location : '4D',
    issue : 'May have ruined this instance of earth...',
    timeOpen : 1500000000000,
    id : 0
  };
  test('Should return default state if no action is recognized', () => {
    expect(ticketListReducer({}, {type:null})).toEqual({});
  });
  test('New ticket should include Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });
  test('Should add freshly-calculated Moment-formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'UPDATED_TIME',
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(ticketListReducer({ [id] : sampleTicketData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });
});
