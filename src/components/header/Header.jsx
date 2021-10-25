  import Logo from "../logo/Logo.jsx";
   import Container from "@mui/material/Container";
   import Grid from "@mui/material/Grid"
   import Paper from '@mui/material/Paper';
   import { styled } from '@mui/material/styles';

   const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
   function Header() {
   
   return (
       <div>
 <Container maxWidth="xl">
       <Logo type='muted'/>
       </Container>
     </div>
   );
   }

   export default Header;




