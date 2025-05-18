// src/App.tsx
import { TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="logo">Google</h1>

      {/* Campo de texto do Material UI */}
      <TextField 
        label="Pesquise no Google"
        variant="outlined"
        fullWidth
        sx={{ backgroundColor: 'white', borderRadius: '30px', maxWidth: '600px', marginBottom: '20px' }}
      />
      
    </div>
  );
}

export default App;
