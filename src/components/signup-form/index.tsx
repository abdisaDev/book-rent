import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { SignUpFormType } from "../../types";
import useRegisterUser from "../../hooks/registerUser";
import { useMutation } from "@tanstack/react-query";

const formSchema = z
  .object({
    name: z.string({ message: "Required" }),
    email: z.string({ message: "Required" }).email(),
    phone_number: z
      .string({ message: "Required" })
      .regex(/^(0|\+251|251)(9|7)[0-9]{8}$/, {
        message:
          "Invalid Phone Number, The phone number has to be either safari or ethio telecom",
      }),
    password: z
      .string({ message: "Required" })
      .min(8, "Password must be at least 8 characters long"),
    confirm_password: z.string({ message: "Required" }),
    location: z.string({ message: "Required" }),
    aggrement: z.boolean({ message: "Please Accept the Terms and Conditions" }),
  })
  .refine((schema) => schema.password === schema.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

const initialValues: SignUpFormType = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  location: "",
  phone_number: "",
  aggrement: false,
};

function SignUpForm() {
  const registerUser = useRegisterUser;

  const mutation = useMutation({
    mutationFn: (registrationPayload: SignUpFormType) => {
      return registerUser(registrationPayload);
    },
  });

  const navigate = useNavigate();

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          mutation.mutate(values);
          resetForm();
          if (mutation.isSuccess) navigate("/auth/login");
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
                rowGap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <TextField
                  name="name"
                  label="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={Boolean(errors.name && touched.name)}
                  helperText={<span>{touched.name && errors.name}</span>}
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name="email"
                  label="E-mail"
                  type="email"
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
                  name="password"
                  label="Password"
                  type="password"
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
                <TextField
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                  error={Boolean(
                    errors.confirm_password && touched.confirm_password
                  )}
                  helperText={
                    <span>
                      {touched.confirm_password && errors.confirm_password}
                    </span>
                  }
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name="location"
                  label="Location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                  error={Boolean(errors.location && touched.location)}
                  helperText={
                    <span>{touched.location && errors.location}</span>
                  }
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  name="phone_number"
                  label="Phone Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone_number}
                  error={Boolean(errors.phone_number && touched.phone_number)}
                  helperText={
                    <span>{touched.phone_number && errors.phone_number}</span>
                  }
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  columnGap: 1,
                  alignItems: "center",
                }}
              >
                <Input
                  type="checkbox"
                  name="aggrement"
                  id="aggrement"
                  value={values.aggrement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.aggrement && touched.aggrement)}
                />
                {<span>{touched.aggrement && errors.aggrement}</span>}
                <label htmlFor="aggrement">
                  I accept the Term and Conditions.
                </label>
              </Box>
              <Box>
                <Button type="submit" variant="contained" fullWidth>
                  Sign Up
                </Button>
              </Box>
              <Box>
                <Typography textAlign="center">
                  Already have an account{" "}
                  <Link to="/auth/login" color="primary">
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
