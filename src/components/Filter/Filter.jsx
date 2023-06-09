import React from "react";
import { PropTypes } from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({value, onChange}) => {
    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput
                type="text"
                name="filter"
                placeholder="Enter name"
                value={value}
                onChange={onChange}
            />
        </FilterLabel>
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
}
export default Filter;
