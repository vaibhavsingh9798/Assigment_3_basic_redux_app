import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";


const Homepage = () =>{
    return(
       <AppBar color="transparent" position="static">
           <Container>
               <Toolbar>
                   <Typography>Crypto Hunter</Typography>
                     <Select>
                       <MenuItem>USD</MenuItem>
                       <MenuItem>INR</MenuItem>
                     </Select>
               </Toolbar>
           </Container>
       </AppBar>
    )
}

export default Homepage;