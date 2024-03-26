import { Outlet } from 'react-router-dom';
// @mui
import { Box, Container, Link, Stack, Typography } from '@mui/material';
// components
import Logo from '../../components/Logo';
//
import GuestHeader from './GuestHeader';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function GuestLayout() {
  // const { pathname } = useLocation();

  // const isHome = pathname === '/';
  const isHome = true;

  return (
    <Stack sx={{ minHeight: 1 }}>
      <Outlet />

      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}
