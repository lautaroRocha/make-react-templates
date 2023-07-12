import '@testing-library/jest-dom';
import Test from './Test';
// import React from 'react';
import { RenderResult, render } from '@testing-library/react';

describe('< Test />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Test/>)
        expect(component.container).toBeInTheDocument()
    })
})
