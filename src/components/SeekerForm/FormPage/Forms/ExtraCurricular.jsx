import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../FormFields";
import FormLabel from "@material-ui/core/FormLabel";
import "./style.css";
import Select from "react-select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
const firstChoice = [
  { value: "Noida", label: "Noida" },
  { value: "Delhi", label: "Delhi" },
  { value: "Gorakhpur", label: "Gorakhpur" },
];
const durationMOnths = [
  { value: "1 Months", label: "1 Months" },
  { value: "2 Months", label: "2 Months" },
  { value: "3 Months", label: "3 Months" },
];
const durationYear = [
  { value: "1 Year", label: "1 Year" },
  { value: "2 Year", label: "2 Year" },
  { value: "3 Year", label: "3 Year" },
];
const colourOptions = [
  { value: "Java", label: "Java" },
  { value: "JavaScript", label: "JavaScript" },
];
export default function ExtraCurricular(props) {
  const {
    formField: { fullName },
  } = props;
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className="stepper_name">
        Extra Curricular
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className="career_details">
            <div className="row">
              <div className="col-md-12">
                <div className="field_block mb-5">
                  <p>
                    <strong>Language</strong>*
                  </p>

                  <div className="mc-field-group priotrity-field">
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="start">Language Name</TableCell>
                            <TableCell align="start">Read</TableCell>
                            <TableCell align="start">Write</TableCell>
                            <TableCell align="start">Speak</TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Grid item md={12}>
                                <Select options={firstChoice} />
                              </Grid>
                            </TableCell>

                            <TableCell>
                              <Grid item md={12} xs={12}>
                                <div class="switch-field">
                                  <input
                                    type="radio"
                                    id="read-yes"
                                    name="read"
                                    value="yes"
                                    checked
                                  />
                                  <label for="read-yes">Yes</label>
                                  <input
                                    type="radio"
                                    id="read-no"
                                    name="read"
                                    value="no"
                                  />
                                  <label for="read-no">No</label>
                                </div>
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid item md={12} xs={12}>
                                <div class="switch-field">
                                  <input
                                    type="radio"
                                    id="write-yes"
                                    name="write"
                                    value="yes"
                                    checked
                                  />
                                  <label for="write-yes">Yes</label>
                                  <input
                                    type="radio"
                                    id="write-no"
                                    name="write"
                                    value="no"
                                  />
                                  <label for="write-no">No</label>
                                </div>
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid item md={12} xs={12}>
                                <div class="switch-field">
                                  <input
                                    type="radio"
                                    id="speak-yes"
                                    name="speak"
                                    value="yes"
                                    checked
                                  />
                                  <label for="speak-yes">Yes</label>
                                  <input
                                    type="radio"
                                    id="speak-no"
                                    name="speak"
                                    value="no"
                                  />
                                  <label for="speak-no">No</label>
                                </div>
                              </Grid>
                            </TableCell>
                          </TableRow>
                          <div className="add_more_data">
                            <Button variant="contained" color="primary">
                              <AddIcon /> Add More
                            </Button>
                          </div>
                        </TableBody>
                      </Table>
                    </TableContainer>
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
