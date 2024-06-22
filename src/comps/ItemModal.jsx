import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const ItemModal = ({ open, handleClose, item }) => {
    if (!item) return null;
    
    return (
        <Modal open={open} onClose={handleClose}>
            <Box p={4} bgcolor="black" margin="auto" width={400}>
                <Typography variant="h6">{item.title || item.name}</Typography>
                <Typography>{item.opening_crawl || item.description}</Typography>
            </Box>
        </Modal>
    );
}

export default ItemModal;
