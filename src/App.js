import './App.css';
import themeOptions from './Theme.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Navbar from './components/Navbar'

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
