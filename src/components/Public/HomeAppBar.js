import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Avatar,
  useMediaQuery,
  Divider,
} from '@mui/material';
import {
  MenuRounded as MenuRoundedIcon,
  CloseRounded as CloseRoundedIcon,
  Monitor as MonitorIcon,
  MiscellaneousServices as MiscellaneousServicesIcon,
  SupportAgent as SupportAgentIcon,
  Contacts as ContactsIcon,
  AccountTree as AccountTreeIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  ExpandLess,
  ExpandMore,
  Factory as FactoryIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  {
    path: "/home",
    label: "Home",
    icon: <HomeIcon />,
    color: "#2ad1be",
  },
  {
    path: "/about",
    label: "About",
    icon: <MonitorIcon />,
    color: "#ffeb3b",
  },
  {
    path: "/industries",
    label: "Industries",
    icon: <FactoryIcon />,
    color: "#86236d",
    children: [
      {
        path: "/industries/automobile",
        label: "Automobile",
        icon: <BusinessIcon />,
        color: "#e53935",
      },
      {
        path: "/industries/aerospace",
        label: "Aerospace",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      {
        path: "/industries/informationtechnology",
        label: "Information Technology",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      {
        path: "/industries/telecommunication",
        label: "Telecommunication",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      {
        path: "/industries/infrastructure",
        label: "Infrastructure",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
      {
        path: "/industries/minymettall",
        label: "Miny & Mettal",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
    ],
  },
  {
    path: "/ittech",
    label: "Group of Company",
    icon: <AccountTreeIcon />,
    color: "#b71c1c",
    children: [
      {
        path: "/ittech/company1",
        label: "Company One",
        icon: <BusinessIcon />,
        color: "#e53935",
      },
      {
        path: "/ittech/company2",
        label: "Company Two",
        icon: <BusinessIcon />,
        color: "#d32f2f",
      },
    ],
  },
  {
    path: "/blog",
    label: "Blog",
    icon: <MiscellaneousServicesIcon />,
    color: "#4caf50",
  },
  {
    path: "/career",
    label: "Career",
    icon: <SupportAgentIcon />,
    color: "#03a9f4",
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <ContactsIcon />,
    color: "#cddc39",
  },
];

const HomeAppBar = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
    setExpandedMenu(null);
  };

  const handleMenuExpand = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <>
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 1300,
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{
              bgcolor: '#fff',
              boxShadow: 3,
              width: 48,
              height: 48,
              '&:hover': {
                bgcolor: '#f5f5f5',
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
        </Box>
      )}

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            background: 'linear-gradient(to bottom right, #e0f7fa, #f1f8e9)',
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            boxShadow: 4,
          },
        }}
      >
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <List disablePadding>
            {sections.map((section, index) => (
              <React.Fragment key={section.path}>
                <ListItem
                  button
                  component={section.children ? 'div' : Link}
                  to={!section.children ? section.path : undefined}
                  onClick={() =>
                    section.children ? handleMenuExpand(index) : toggleDrawer()
                  }
                  sx={{
                    gap: 2,
                    px: 3,
                    py: 1.5,
                    bgcolor: pathname === section.path ? '#b2dfdb' : 'transparent',
                    borderLeft: pathname === section.path ? '4px solid #00796b' : 'none',
                    '&:hover': {
                      backgroundColor: '#e0f2f1',
                      borderLeft: '4px solid #00acc1',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Avatar sx={{ bgcolor: section.color, width: 32, height: 32 }}>
                      {section.icon}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={section.label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: pathname === section.path ? 'bold' : 500,
                        color: '#212121',
                        textTransform: 'capitalize',
                      },
                    }}
                  />
                  {section.children && (expandedMenu === index ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>

                {section.children && (
                  <Collapse in={expandedMenu === index} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {section.children.map((child) => (
                        <ListItem
                          key={child.path}
                          button
                          component={Link}
                          to={child.path}
                          onClick={toggleDrawer}
                          sx={{
                            pl: 8,
                            py: 1,
                            gap: 2,
                            bgcolor: pathname === child.path ? '#c8e6c9' : 'transparent',
                            '&:hover': {
                              backgroundColor: '#e8f5e9',
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Avatar sx={{ bgcolor: child.color, width: 28, height: 28 }}>
                              {child.icon}
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{
                              sx: {
                                fontSize: '0.85rem',
                                fontWeight: pathname === child.path ? 'bold' : 500,
                                color: '#424242',
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default HomeAppBar;
