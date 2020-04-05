import React from 'react';
import MessageBox from '../components/MessageBox'

export default {
  title: 'Message',
  component: MessageBox,
};

export const Text = () => <MessageBox messageText = 'Hello, Harry!' key = {5858} />;
export const Emoji = () => <MessageBox messageText = 'Hello, Harry! &#mask#&' key = {1414} />;

Emoji.story = {
    name: 'with emoji',
  };