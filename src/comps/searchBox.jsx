import React, { useState, useEffect } from 'react';

import { TextField, Box } from '@mui/material';

const SearchBar = ({ filteredItems, setFilteredItems, items ,filterKey}) => {
    
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        filteredItems = items.filter((item) => item[filterKey].toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredItems(filteredItems);
    }, [searchQuery]);

    return (
        <Box display="flex" justifyContent="center" my={2}>
            <TextField
                label="Ara"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputLabelProps={{
                    style: { color: '#fff' },
                }}
                InputProps={{
                    style: { color: '#fff' },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                            borderColor: '#fff',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                        '& input': {
                            color: '#fff',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#fff',
                    },
                }}
            />
        </Box>
    );
}

export default SearchBar;
