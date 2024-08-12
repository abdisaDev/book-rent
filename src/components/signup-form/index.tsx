import { Box, Button, Input, TextField, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  phone_number: z.string(),
  confirm_password: z.string(),
  location: z.string(),
});

interface SignUpFormType {
  email: string;
  password: string;
  phone_number: string;
  confirm_password: string;
  location: string;
}

const initialValues: SignUpFormType = {
  email: '',
  password: '',
  confirm_password: '',
  location: '',
  phone_number: '',
};

function SignUpForm() {
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={toFormikValidationSchema(formSchema)}
      >
        {({ handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              sx={{
                rowGap: '10px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box>
                <TextField
                  name='email'
                  label='E-mail'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name='password'
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name='confirm_password'
                  label='Confirm Password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name='location'
                  label='Location'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name='phone_number'
                  label='Phone Number'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: 2,
                }}
              >
                <Input type='checkbox' name='aggrement' />
                <Typography>I accept the Term and Conditions.</Typography>
              </Box>
              <Box>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  disableElevation
                >
                  Sign Up
                </Button>
              </Box>
              <Box>
                <Typography textAlign='center'>
                  Already have an account{' '}
                  <Link to='#' color='primary'>
                    Login
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default SignUpForm;
