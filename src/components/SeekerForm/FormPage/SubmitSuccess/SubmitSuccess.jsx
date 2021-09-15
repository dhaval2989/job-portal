import React from 'react';
import { Typography } from '@material-ui/core';

function SubmitSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you .
      </Typography>
      <Typography variant="subtitle1">
      Submited Sucessfully
      </Typography>
    </React.Fragment>
  );
}

export default SubmitSuccess;
