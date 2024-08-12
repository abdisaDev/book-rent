import { Box, Divider, Typography } from '@mui/material';
import SignUpForm from '../../../components/signup-form';
import Logo from '../../../assets/logo.svg';

function SignUp() {
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: '#171B36',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <img
            src={Logo}
            alt='Book Rent Logo'
            color='#eee'
            width={500}
            height={300}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100vh',
          mx: '150px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <img
              src={Logo}
              alt='Book Rent Logo'
              color='#60cbff'
              width={50}
              height={50}
            />
          </Box>
          <Box>
            <Typography variant='h5'>Book Rent</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 2,
            mb: 4,
            rowGap: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h5'>SignUp as Owner</Typography>
          <Divider />
        </Box>
        <Box>
          <SignUpForm />
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
