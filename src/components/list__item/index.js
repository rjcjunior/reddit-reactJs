import React from "react";
import { ListItemStyle } from './style';
import PropTypes from 'prop-types'


const imgDefault = "https://static.thenounproject.com/png/340719-200.png";
const ListItem = ({title, imgSrc, created, author, url }) => {
      return (
          <ListItemStyle>
              <img className="listItem__img" src={imgSrc === 'self' ||
               imgSrc === 'default' ? imgDefault : imgSrc } alt="thumbnail" />
        
              <div className="listItem__content">
                <h2 className="listItem__title">
                    {title}
                </h2>
                <p className="listItem__info">
                    <span className="gray">
                        Enviado {created} 
                    </span>
                    por 
                    <span className="orange"> 
                        {author}
                    </span>
                </p>
                <a href={url} className="listItem__link">
                    {url}
                </a>
              </div>    
          </ListItemStyle>
      );
};

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default ListItem;
