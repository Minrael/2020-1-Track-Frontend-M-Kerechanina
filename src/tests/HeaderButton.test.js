import React from 'react'
import renderer from 'react-test-renderer'
import HeaderButton from '../components/Header/Header'
import search from '../static/search.svg';

it('renders correctly', () => {
    const SearchButton = renderer
    .create(<HeaderButton name = 'search-button' src = {search}/>)
    .toJSON();
    expect(SearchButton).toMatchSnapshot();
})