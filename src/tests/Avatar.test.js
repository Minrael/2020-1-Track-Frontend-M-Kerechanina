import React from 'react'
import renderer from 'react-test-renderer'
import Avatar from '../components/Header/Avatar'

it('renders correctly', () => {
    const avatar = renderer
    .create(<Avatar/>)
    .toJSON();
    expect(avatar).toMatchSnapshot();
})