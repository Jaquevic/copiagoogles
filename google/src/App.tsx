// src/App.tsx
import { TextField } from '@mui/material';
import './App.css';
import Pesquisa from './Pesquisag/pesquisa';


function App() {
  return (
    <div className="container">
      <h1 className="logo">Google</h1>

      <TextField 
        label="Pesquise no Google"
        variant="outlined"
        fullWidth
        sx={{ backgroundColor: 'white', borderRadius: '30px', maxWidth: '600px', marginBottom: '20px' }}
      />

       <Pesquisa/>

    </div>
  );
}

export default App;
