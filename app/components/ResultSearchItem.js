import React, {PropTypes} from 'react';


const ResultSearchItem = ({id, title, subtitle, author, image}) => {
    return (
        <div className="list-group-item card">
            <img className="card-img-left" src={image} style={{width: 100}}
            alt={title} />
            <div className="card-block">
                <h4 className="card-title">{title.substr(0, 20)}</h4>
                <p className="card-text">{subtitle}</p>
            </div>
        </div>
    );    
}

const {string} = PropTypes;

ResultSearchItem.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    subtitle: string,
    author: string,
    image: string
};

export default ResultSearchItem;