import React from 'react'
import { FiltersModel } from '../../../../models/Filters'
import './filterItem.css';
import { Chip } from '@mui/material';
import { withStyles } from "@mui/material/styles";


interface IFilterItemProps {
    filter: FiltersModel;
}
const FilterItem = ({ filter }: IFilterItemProps) => {
    return (
        <div className='filterItem' onClick={() => { alert(filter.title) }}>
            <div className='filterName cur-po'>
                {filter.title}
            </div>
        </div>
    )
}

export default FilterItem

