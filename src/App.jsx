import React, { useContext } from 'react';
import { Container, Typography, Grid2, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
        Интернет-магазин
      </Typography>
      <IconButton onClick={toggleTheme} sx={{
        position: 'absolute', top: 16, right:
          16
      }}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={9}>
          <ProductList />
        </Grid2>
        <Grid2 item xs={12} md={3}>
          <Cart />
        </Grid2>
      </Grid2>
    </Container>
  );
}
export default App;


