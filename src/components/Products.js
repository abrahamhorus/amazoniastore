import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Product from './Product';
import '../css/products.css';



export default function Products() {
  return (
    <Box  sx={{ flexGrow: 1 }} className='root'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}> 
        <Product/>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={3} md={4} lg={3}>
        <Product/>
        </Grid>
      </Grid>
    </Box>
  );
}
