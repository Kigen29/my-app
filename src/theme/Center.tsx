import {Box} from '@mui/material';
import React from 'react';

const Center = ({children}: CenteredProps) => {
    return (
        <Box
                display = {"flex"}
                justifyContent = {"center"}
                alignItems = {"center"}
                minHeight = {"100vh"}
        >
            {children}
        </Box>
    );
};

export default Center;