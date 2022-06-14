import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { SwipeableDrawer } from '@mui/material';
import Logo from "../../../images/image 2.svg"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Close, Home, HomeMaxRounded, HomeOutlined, KeyboardArrowDownRounded, LanguageOutlined, LogoutRounded } from '@mui/icons-material';
// import PopoverPopupState from './components/LangDropdown';



const AppBody = () => {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{float: 'right', mt: 2, mr: 2}}>
      <IconButton
        onClick={toggleDrawer(anchor, false)} 
      >
      <Close sx={{fontSize: 16*2.4}}  />
      </IconButton>
      </Box>
      <List sx={{mt: 10}}>
        {['Logout'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{mt: 1}}> 
            <ListItemButton>
              <ListItemIcon>
                <LogoutRounded sx={{fontSize: 16*2.1, color: '#036463'}} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: 16, fontWeight: 600, color: '#626262'}} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
          <ListItem disablePadding sx={{mt: 1}} onClick={() => console.log('HIIII')}> 
            <ListItemButton>
              <ListItemIcon>
                <LanguageOutlined sx={{fontSize: 16*2.1, color: '#036463'}} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: 16, fontWeight: 600, color: '#626262'}} primary={'English'}  />
              <ListItemIcon>
                <KeyboardArrowDownRounded sx={{fontSize: 16*2.1, color: '#036463', mr: 8}} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );


  return (
    <AppBar position="static" sx={{background: 'unset', boxShadow: 'unset', color: '#000'}}>
      <Container maxWidth="xl">
      <Toolbar disableGutters sx={{justifyContent: 'space-between', minHeight: 90}}>
      <Box sx={{ flexGrow: 0, flexDirection: 'row-reverse' ,  display: { xs: 'flex', md: 'none' }, ml: 1 }}>
          <img src={Logo} alt='VT Logo' /> 
      </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} >
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer('right', true)}
              color="inherit"
            >
              <MenuIcon sx={{fontSize: 40}}/>
          </IconButton>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
          </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBody;