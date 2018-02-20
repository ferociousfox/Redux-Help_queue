import ticketListReducer from './../../src/reducers/ticket-list-reducer';

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
  test('Shold successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
  });
});
