import React from "react";
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Making sure that the starwars logo renders on screen', () => {
  const wrapper = rtl.render(<App />)
  const logoImg = wrapper.getByAltText(/^logo$/i)
  expect(logoImg).toBeInTheDocument()
})

test('Making sure buttons render on screen', () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId('prev')
  getByTestId('next')
})