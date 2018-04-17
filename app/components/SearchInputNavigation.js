import React, {PropTypes, Component} from 'react';
import _ from 'lodash';

export class SearchInputNavigation extends Component {
    constructor(props) {
        super(props);       
        this.delayedCallback = _.debounce((event) => {
            this.props.onPhraseChanged(this.inputRef.value);               
        }, 300);
    };

    onChange(e) {
        //e.persist();
        this.delayedCallback(e);
    };

    render() {
        return(
            <div className="form-group">
                <label> Phrase to search </label>
                <input className="form-control" 
                       type="text" 
                       defaultValue={this.props.initialPhrase} 
                       placeholder="Please write here search phrase" 
                       ref={(ref) => {this.inputRef = ref}} 
                       onChange={this.onChange.bind(this)}
                       />
            </div>
        );
    };
};

const {string, func} = PropTypes;

SearchInputNavigation.PropTypes = {
    initialPhrase: string.isRequired,
    onPhraseChanged: func.isRequired
}

export default SearchInputNavigation;