import React from 'react'
import renderer from 'react-test-renderer'
import { BackButton } from '../components/Header'

it('renders correctly', () => {
    const tree = renderer;
    .create(<BackButton/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})