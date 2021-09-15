import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';
import SeekerDetails from './SeekerDetails';
import PersonalData from './PersonalData';
import PersonalDetails from './PersonalDetails';

export default function ReviewData() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seeker Details 
      </Typography>
      <SeekerDetails />
      <Grid container spacing={2}>
        <PersonalData formValues={formValues} />
        <PersonalDetails formValues={formValues} />
      
      </Grid>
    </React.Fragment>
  );
}
