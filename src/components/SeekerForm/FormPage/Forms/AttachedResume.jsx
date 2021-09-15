import React, {useState} from "react";
import { Grid, Typography } from "@material-ui/core";

import Dropzone from "react-dropzone";


export default function AttachedResume(props) {
  const {
    formField: {
somnath
    },
  } = props;
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className="stepper_name">
        Attached Resume
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className="career_details">
            <div className="row">
              <div className="col-md-12">
                <div className="field_block mb-5">
                  <p>
                    <strong>Attached Resume</strong>*
                  </p>

                  <div className="mc-field-group priotrity-field">
                  <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>

      {/* ================== */}
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
