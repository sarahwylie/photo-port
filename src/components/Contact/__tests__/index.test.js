import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

describe('ContactForm', () => {
    it('renders', () => {
        render(<Contact/>);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('header and submit button are visible', () => {
    it('shows contact me and submit', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})