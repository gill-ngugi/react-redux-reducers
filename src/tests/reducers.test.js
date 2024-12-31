import counterReducer from '../reducers/counterReducer';
import { INCREMENT, DECREMENT, RESET } from '../actions';

describe('Counter Reducer', () => {
  const initialState = {
    count: 0
  };

  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INCREMENT', () => {
    expect(
      counterReducer(initialState, {
        type: INCREMENT
      })
    ).toEqual({
      count: 1
    });
  });

  it('should handle DECREMENT', () => {
    expect(
      counterReducer(initialState, {
        type: DECREMENT
      })
    ).toEqual({
      count: -1
    });
  });

  it('should handle RESET', () => {
    expect(
      counterReducer({ count: 5 }, {
        type: RESET
      })
    ).toEqual({
      count: 0
    });
  });
});
