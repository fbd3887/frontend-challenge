import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { FormValues, submitValues } from 'actions/actions';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useSelector } from 'react-redux';
import store from 'store/configureStore';
import * as yup from 'yup';
import DataTable from '../DataTable';

const HomePage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = yup.object().shape({
    name: yup.string().required('Required*'),
    email: yup.string().email('Invalid email').required('Required*'),
    message: yup
      .string()
      .min(3, 'Too Short!')
      .max(250, 'Too Long!')
      .required('Required*'),
  });

  const existingValues = useSelector((state: any) => state.form.values);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      let shouldSubmit = true;
      if (
        typeof existingValues === 'object' &&
        Array.isArray(Object.values(existingValues))
      ) {
        const valuesArray = Object.values(existingValues) as FormValues[];
        valuesArray.map((item: FormValues) => {
          if (item.name === values.name || item.email === values.email) {
            enqueueSnackbar('Name or email already exists', {
              variant: 'error',
            });
            shouldSubmit = false;
          }
        });
      }
      if (shouldSubmit) {
        enqueueSnackbar('Submission Successful', { variant: 'success' });
        store.dispatch(submitValues(values));
        formik.resetForm();
      }
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: (theme) => theme.spacing(50),
        gap: (theme) => theme.spacing(40),
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          '& .MuiBox-root': { width: '70%' },
          '& .MuiTextField-root': { width: '70%' },
          '& .MuiButton-root': { width: '70%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: (theme) => theme.spacing(20),
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            padding: (theme) => theme.spacing(5),
            background: (theme) => theme.palette.primary.light,
            borderRadius: 1,
          }}
        >
          FORM
        </Typography>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <LoadingButton variant="contained" color="primary" type="submit">
          Submit
        </LoadingButton>
      </Box>
      <Box
        sx={{
          '& .MuiBox-root': { width: '70%' },
          '& .MuiTextField-root': { width: '70%' },
          '& .MuiButton-root': { width: '70%' },
        }}
      >
        <DataTable />
      </Box>
    </Box>
  );
};

export default HomePage;
