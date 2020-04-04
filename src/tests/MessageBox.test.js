import React from 'react'
import renderer from 'react-test-renderer'
import MessageBox from '../components/MessageList/MessageBox'

it('renders correctly', () => {
    const message = renderer
    .create(<MessageBox messageText = "What's up?" key = {1000} />)
    .toJSON();
    expect(message).toMatchSnapshot();
})


it('renders correctly with emoji', () => {
    const messageEmoji = renderer
    .create(<MessageBox messageText = '&#sad#&' key = {1111} />)
    .toJSON();
    expect(messageEmoji).toMatchSnapshot();
})