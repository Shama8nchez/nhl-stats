import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink, Route, Routes } from 'react-router-dom';
import Teams from '../Teams/Teams';
import TeamPage from '../TeamPage/TeamPage';
import PlayerPage from '../Pages/PlayerPage/PlayerPage';
import NotFound from '../Pages/NotFound/NotFound';
import MainPage from '../Pages/MainPage/MainPage';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Main', 'Teams', 'About'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink to={`/${item.toLocaleLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <ListItemText primary={item} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* {<Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>} */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', marginRight: '25px' }}>
                <NavLink to={`/${item.toLocaleLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {item}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/teams/:id' element={<TeamPage />} />
          <Route path='/player/:id' element={<PlayerPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}