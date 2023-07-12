import '@testing-library/jest-dom';
import Test2 from './Test2';
// import React from 'react';
import { RenderResult, render } from '@testing-library/react';

describe('< Test2 />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Test2/>)
        expect(component.container).toBeInTheDocument()
    })
})
