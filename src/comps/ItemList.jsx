import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { List, ListItem, ListItemText, Button } from '@mui/material';

const ItemList = ({ items, handleOpenModal }) => {
    return (
        <List>
            {items.map(item => (
                <ListItem  key={uuidv4()} onClick={() => handleOpenModal(item)}>
                    <ListItemText primary={item.title || item.name} />
                </ListItem>
            ))}
        </List>
    );
}

export default ItemList;
