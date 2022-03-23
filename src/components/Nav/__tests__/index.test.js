import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
/* eslint-disable */

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav
        categories={categories}
        currentCategory={mockCurrentCategory}
        setCurrentCategory={mockSetCurrentCategory}
        contactSelected={mockContactSelected}
        mockSetContactSelected={mockSetContactSelected}
        />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav       
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}/>);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}/>);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        //Arrange
        const { getByTestId } = render(<Nav 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}/>);
        //Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})

describe('onClick events', () => {
    it('calls the click handler when clicked', () => {
      const { getByText } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />);
      fireEvent.click(getByText('About me'))
      fireEvent.click(getByText('Contact'))
      fireEvent.click(getByText('Portraits'))
  
      expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
    });
  })