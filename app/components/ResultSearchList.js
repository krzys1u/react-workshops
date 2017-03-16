import React, { Component, PropTypes } from 'react';
import ResultSearchItem from './ResultSearchItem'
export class ResultSearchList extends Component {
    render() {
        const books = this.props.items;

        const list = books.map((item) => {
            return <ResultSearchItem 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    />
        });

        return (
            <div>
                <div>
                    <label> Search results</label>
                    <span className="float-right">
                        Total entries: {books.length}
                    </span>
                </div>
                <div className="list-group">
                    {list}
                </div>
            </div>
        ); 
    }
}

const {arrayOf, shape, string} = PropTypes;

ResultSearchList.propTypes = {
    items: arrayOf(
        shape({
            id: string.isRequired,
            title: string.isRequired,
            subtitle: string,
            author: string,
            image: string
        })
    )
};

export default ResultSearchList;