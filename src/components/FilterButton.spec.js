import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButton from './FilterButton';

describe('<FilterButton />',()=>{
    let filterButton;
    let filterHandler;

    describe('clicking the filter button',()=>{
        beforeEach(async()=>{
            filterHandler= jest.fn().mockName('filterHandler');
            ({filterButton} = render(<FilterButton name='ALL' ispressed={true} setFilter ={filterHandler}/>));
        });


        it('applies the correct filter',()=>{
            userEvent.click(document.querySelector("button"));
            expect(filterHandler).toHaveBeenCalledWith('ALL');
        });
    });
})