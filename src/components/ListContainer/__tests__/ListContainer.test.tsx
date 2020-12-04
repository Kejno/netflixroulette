import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { initialState as fakeStore } from '../../../constants/mainConstants';
import { createStore } from 'redux';
import ListContainer from '../ListContainer';
import { reducer } from '../../../store';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('ListContainer component', () => {
  let getWrapper: any;
  let mockStore: any;

  beforeEach(() => {
    mockStore = createStore(reducer, fakeStore);
    getWrapper = () =>
      mount(
        <Provider store={mockStore}>
          <ListContainer />
        </Provider>
      );
  });

  describe('Test Snapshot & Components', () => {
    it('should match snapshot', () => {
      mockStore.dispatch = jest.fn();
      const wrapper = getWrapper(mockStore);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should display tag div', () => {
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore).find('div');
    expect(wrapper.length).toBe(2);
  });
});
