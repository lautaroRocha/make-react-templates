import '@testing-library/jest-dom';
import { Counter } from '..';
import { RenderResult, render } from '@testing-library/react';

describe('< {{pascalCase name}} />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Counter/>)
        expect(component.container).toBeInTheDocument()
    })
})
