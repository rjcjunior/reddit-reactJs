import React from "react";
import { ListItemStyle } from './style';
import PropTypes from 'prop-types'


  
const ListItem = ({title, imgSrc, created, author, url }) => {
      return (
          <ListItemStyle>
              <img className="listItem__img" src={imgSrc} alt="thumbnail" />
        
              <div className="listItem__content">
                <h2 className="listItem__title">
                    {title}
                </h2>
                <p className="listItem__info">
                    <span class="gray">
                        enviado a {created} horas 
                    </span>
                    por 
                    <span class="orange"> 
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
