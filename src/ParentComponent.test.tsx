import React from 'react';
import { render, screen } from '@testing-library/react'
import ParentComponent from './components/ParentComponent';
import '@testing-library/jest-dom';


describe('Parent Component', () => {
    it('renders the child Counter component with a counter', () => {
        const testNumber = 8;
        render(<ParentComponent counterText={testNumber} />)

        expect(screen.getByText(testNumber)).toBeInTheDocument();
    })
})