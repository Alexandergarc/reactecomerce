import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return(
        data.map(libro=><Item key={libro.id} info={libro}/>)
    );
}

export default ItemList;
