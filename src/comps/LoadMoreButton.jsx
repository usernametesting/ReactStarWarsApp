import React from 'react';
import { Button, Box } from '@mui/material';

const LoadMoreButton = ({ loadMore }) => {
    return (
        <Box display="flex" justifyContent="center" my={2}>
            <Button variant="contained" onClick={loadMore}>more items</Button>
        </Box>
    );
}

export default LoadMoreButton;
