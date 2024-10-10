import React from 'react'
import FetchData from './Components/FetchData'
import FetchYogaData from './Components/FetchYogaData'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function App() {
  return (
 <>
 <Typography variant="h4">First API Call</Typography>
 <FetchData/>
 <Divider sx={{ margin: '20px 0' }} />
 <Typography variant="h4">Second API Call</Typography>
 <FetchYogaData/>
 </>
  )
}

export default App