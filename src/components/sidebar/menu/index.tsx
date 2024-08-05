import { Box, Button } from '@mui/material';
import { menuLists } from '../../../menus/menusLists';

function SideBarMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: '10px',
      }}
    >
      {menuLists.map((menuList, index) => {
        return (
          <Button
            key={index}
            sx={{
              my: '10px',
              p: '10px',
              justifyContent: 'flex-start',
              columnGap: '10px',
              backgroundColor: index === 0 ? '#00ABFF' : '',
              color: '#eee',
              '&:hover': {
                backgroundColor: '#00ABFF6B',
              },
              mb: menuList.end ? '40px' : '0',
            }}
          >
            <menuList.icon /> {menuList.label}
          </Button>
        );
      })}
    </Box>
  );
}

export default SideBarMenu;
