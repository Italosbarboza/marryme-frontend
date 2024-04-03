import { Outlet } from 'react-router-dom';
// @mui
import { Box, Stack } from '@mui/material';


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
