import React from 'react'
import { FiltersModel } from '../../../models/Filters'
import FilterItem from './filterItem'
import './Filters.css';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
export interface IFilterProps {
    filtersList: FiltersModel[],
}

const Filters = ({ filtersList }: IFilterProps) => {
    return (
        <div className='filters'>
            <div className='filterItem'>
                {<TuneRoundedIcon />}
                <div className='filterName'>
                    Filters
                </div>
            </div>
            {
                filtersList && filtersList.map((filter) => {
                    return <FilterItem
                        filter={filter}
                        key={filter.id}
                    />
                })
            }
        </div>)
}


export default Filters