import React, {PropTypes} from 'react';
import classnames from 'classnames';

export const SearchLoadingBar = ({ isLoading }) => {
    return (
        <div className={classnames({'loader': true,'loader-visible': isLoading})}>
            Loading ...
        </div>
    )
};

SearchLoadingBar.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default SearchLoadingBar