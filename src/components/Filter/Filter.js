import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Filter.css';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const Filter = ({ value, onChangeFilter }) => (
    <div className="Filter">
        <h2 className="FilterName">Find contacts by name</h2>
        <input className="FilterInput"
            type="text"
            placeholder="Enter name"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
        />
    </div>
);

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func
};

const mapStateToProps = state => ({
    value: contactsSelectors.getFilter(state)
});

const mapDispatchToProps = {
    onChangeFilter: contactsActions.changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);