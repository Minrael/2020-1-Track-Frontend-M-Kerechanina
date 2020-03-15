import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Msg from '../components/Msg'

/*const mockStore  = configureStore([]);

describe ( () => {
    let component;
    let store;

    beforeEach = ( () => {
        store = mockStore({
            store: {message: {}}
        });
        component = renderer.create(
            <Provider store = {store}>
                <Msg />
            </Provider>

            )
    })

    it ( () => {
        expect(component.toJSON()).toMatchSnapshot;
    });

});*/