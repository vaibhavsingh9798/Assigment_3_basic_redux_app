import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from '@material-ui/core/styles';



function App_Clone() {

  const useStyles = makeStyles(()=> ({
    App :{
     backgroundColor: "#14161a",
     color: "white",
     minHeight: "100vh"
    }
  }))

  const classes = useStyles()
  return (
   <BrowserRouter>
  <div className={classes.App}>
    <Header/>
    <Routes>
    <Route path='/' element={<Homepage />} >
    <Route path='coin' element={<CoinPage />} />
    </Route>
    </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App_Clone;
