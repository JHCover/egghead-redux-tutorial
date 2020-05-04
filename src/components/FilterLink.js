import React from "react";
import { connect } from 'react-redux';
import { setVisibilityFilter } from "../actionCreators/todoActions";

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href='#'
           onClick={e => {
               e.preventDefault();
               onClick();
           }}
        >
            {children}
        </a>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter ===
            state.visibilityFilter
    };
};

const mapDispatchToProps = (
    dispatch, ownProps
) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);