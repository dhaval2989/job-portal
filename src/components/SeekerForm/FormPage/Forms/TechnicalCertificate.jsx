import React, { useState } from "react";
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
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import { v4 as uuidv4 } from "uuid";
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
export default function TechnicalCertificate(props) {
  const {
    formField: {country},
  } = props;

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), country },
  ]);



  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[country] = country;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(),country },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className="stepper_name">
        Technical Certificate
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className="career_details">
            <div className="row">
              <div className="col-md-12">
                <div className="field_block mb-5">
                  <p>
                    <strong>Which cities would you like to work in?</strong>*
                  </p>

                  <div className="mc-field-group priotrity-field">
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="start">
                              Certificate Name
                            </TableCell>
                            <TableCell align="start">Institute Name</TableCell>
                            <TableCell align="start">Type</TableCell>
                            <TableCell align="start">Duration</TableCell>
                            <TableCell align="start">
                              Attached Certificate
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {inputFields.map((inputField) => (
                            <TableRow key={inputField.id}>
                              <TableCell>
                                <Grid item md={12}>
                                  <InputField
                                    name="Company Name"
                                    label="Certificate Name"
                                  
                                    fullWidth
                                  />
                                </Grid>
                              </TableCell>

                              <TableCell>
                                <Grid item md={12} xs={12}>
                                  <InputField
                                    name={country.name}
                                    value={country.id}
                                    label="Som Name"
                                
                                    fullWidth
                                  />
                                </Grid>
                              </TableCell>
                              <TableCell>
                                <Grid item md={12}>
                                  <Select options={firstChoice} />
                                </Grid>
                              </TableCell>
                              <TableCell>
                                <Grid item md={12}>
                                  <Grid
                                    item
                                    md={12}
                                    xs={12}
                                    className="duration"
                                  >
                                    <Select
                                      className="timeP"
                                      options={durationMOnths}
                                    />

                                    <Select
                                      className="timeP"
                                      options={durationYear}
                                    />
                                  </Grid>
                                </Grid>
                              </TableCell>
                              <TableCell>
                                <Grid item md={12} xs={12}>
                                  <div class="upload-btn-wrapper">
                                    <button class="btn"> Attached File </button>
                                    <input type="file" name="myfile" />
                                  </div>
                                </Grid>
                              </TableCell>
                              <TableCell>
                                <IconButton
                                  disabled={inputFields.length === 1}
                                  onClick={() =>
                                    handleRemoveFields(inputField.id)
                                  }
                                >
                                  <RemoveIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                          <div className="add_more_data">
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleAddFields}
                            >
                              <AddIcon /> Add More
                            </Button>
                          </div>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>

                <div className="field_block mb-5">
                  <p className="mb-3">
                    <strong>Exam (like Hackethon, Hackerearth etc)</strong>*
                  </p>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="start">Exam Name </TableCell>
                          <TableCell align="start">
                            Online Profile URL
                          </TableCell>
                          <TableCell align="start">Marks / Score </TableCell>

                          <TableCell align="start">
                            Attached Certificate
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Grid item md={12}>
                              <InputField
                                name="Company Name"
                                label="Certificate Name"
                                fullWidth
                              />
                            </Grid>
                          </TableCell>

                          <TableCell>
                            <Grid item md={12} xs={12}>
                              <InputField
                                name="Company Name"
                                label="Institute Name"
                                fullWidth
                              />
                            </Grid>
                          </TableCell>
                          <TableCell>
                            <Grid item md={12}>
                              <InputField
                                name="Marks / Score"
                                label="Marks / Score"
                                fullWidth
                              />
                            </Grid>
                          </TableCell>

                          <TableCell>
                            <Grid item md={12} xs={12}>
                              <div class="upload-btn-wrapper">
                                <button class="btn"> Attached File </button>
                                <input type="file" name="myfile" />
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
