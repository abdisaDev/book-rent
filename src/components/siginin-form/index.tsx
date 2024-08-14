import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { SignInFormType } from '../../types';
import { useMutation } from '@tanstack/react-query';
import useLoginUser from '../../hooks/loginUser';

const formSchema = z.object({
  email: z.string({ message: 'Required' }).email(),
  password: z.string({ message: 'Required' }),
});

const initialValues: SignInFormType = {
  email: '',
  password: '',
};

function SignInForm() {
  const loginUser = useLoginUser;
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (loginPayload: SignInFormType) => {
      return loginUser(loginPayload);
    },
  });

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          await mutation.mutateAsync(values);
          resetForm();
          localStorage.getItem('user') && navigate('/app/dashboard');
        }}
        validationSchema={toFormikValidationSchema(formSchema)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
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
                  value={values.email}
                  error={Boolean(errors.email && touched.email)}
                  helperText={<span>{touched.email && errors.email}</span>}
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
                  value={values.password}
                  error={Boolean(errors.password && touched.password)}
                  helperText={
                    <span>{touched.password && errors.password}</span>
                  }
                  fullWidth
                />
              </Box>
              <Box>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  onClick={() => {
                    if (mutation.isSuccess) navigate('/app/dashboard');
                  }}
                >
                  LogIn
                </Button>
              </Box>
              <Box>
                <Typography textAlign='center'>
                  Have not an account ?
                  <Link to='/auth/register' color='primary'>
                    Sign Up
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

export default SignInForm;
