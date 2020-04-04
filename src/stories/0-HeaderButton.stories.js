import React from 'react';
import HeaderButton from '../components/Header/HeaderButton'
import search from '../static/search.svg';
import more from '../static/more.svg';

export default {
  title: 'HeaderButton',
  component: HeaderButton,
};

export const SearchButton = () => <HeaderButton name = 'search-button' src = {search} />;
export const MoreButton = () => <HeaderButton name = 'more-button' src = {more} />;

