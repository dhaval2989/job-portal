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
const firstChoice = [
  { value: "Noida", label: "Noida" },
  { value: "Delhi", label: "Delhi" },
  { value: "Gorakhpur", label: "Gorakhpur" },
];
const secondChoice = [
  { value: "Noida", label: "Noida" },
  { value: "Delhi", label: "Delhi" },
  { value: "Gorakhpur", label: "Gorakhpur" },
];
const thirdChoice = [
  { value: "Noida", label: "Noida" },
  { value: "Delhi", label: "Delhi" },
  { value: "Gorakhpur", label: "Gorakhpur" },
];
const exprienceType = [
  { value: "Intern", label: "Intern" },
  { value: "Part Time", label: "Part Time" },
  { value: "Full Time", label: "Full Time" },
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
export default function PersonalDetails(props) {
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
        Career Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className="career_details">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex choose-filed mb-5">
                  <div className="field_block col-md-6 mb-4">
                    <p>
                      <strong>What are you currently looking for ?</strong>*
                    </p>

                    <div className="mc-field-group input-group option-flex">
                      <div className="custom-radio">
                        <div className="radio-item">
                          <input
                            type="radio"
                            value="1"
                            name="radio"
                            id="radio-0"
                            required
                          />
                          <label className="label-icon option1" for="radio-0">
                            Internship
                          </label>
                        </div>

                        <div className="radio-item">
                          <input
                            type="radio"
                            value="2"
                            name="radio"
                            id="radio-1"
                          />
                          <label className="label-icon option2" for="radio-1">
                            Full Time
                          </label>
                        </div>
                        <div className="radio-item">
                          <input
                            type="radio"
                            value="3"
                            name="radio"
                            id="radio-3"
                            required
                          />
                          <label className="label-icon option3" for="radio-3">
                            Part Time
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field_block col-md-6 mb-4">
                    <p>
                      <strong>
                        {" "}
                        Which of the following internship type(s) are you
                        looking for?
                      </strong>
                      *
                    </p>

                    <div className="mc-field-group input-group option-flex">
                      <div className="custom-radio">
                        <div className="radio-item">
                          <input
                            type="radio"
                            value="1"
                            name="internship-type"
                            id="internship-type-0"
                            required
                          />
                          <label
                            className="label-icon option1"
                            for="internship-type-0"
                          >
                            Office
                          </label>
                        </div>

                        <div className="radio-item">
                          <input
                            type="radio"
                            value="2"
                            name="internship-type"
                            id="internship-type-1"
                          />
                          <label
                            className="label-icon option2"
                            for="internship-type-1"
                          >
                            Work From Home
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field_block mb-5">
                  <p>
                    <strong>Which fields are you willing to work in? *</strong>*
                  </p>

                  <div className="mc-field-group priotrity-field">
                    <Grid item xs={12} sm={12} className="working-choice">
                      <Grid item xs={12} sm={3}>
                        <FormLabel component="legend">Priotrity 1</FormLabel>
                        <Select options={firstChoice} />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormLabel component="legend">Priotrity 2</FormLabel>
                        <Select options={secondChoice} />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormLabel component="legend">Priotrity 3</FormLabel>
                        <Select options={thirdChoice} />
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="field_block mb-5">
                  <p>
                    <strong>Which cities would you like to work in?</strong>*
                  </p>

                  <div className="mc-field-group priotrity-field">
                    <Grid item xs={12} sm={12} className="working-choice">
                      <Grid item xs={12} sm={3}>
                        <FormLabel component="legend">Priotrity 1</FormLabel>
                        <Select options={firstChoice} />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormLabel component="legend">Priotrity 2</FormLabel>
                        <Select options={secondChoice} />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormLabel component="legend">Priotrity 3</FormLabel>
                        <Select options={thirdChoice} />
                      </Grid>
                    </Grid>
                  </div>
                </div>

                <div className="field_block mb-5">
                  <p>
                    <strong>Which cities would you like to work in?</strong>*
                  </p>

                  <div className="mc-field-group priotrity-field">
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="start">Exprience Type</TableCell>
                            <TableCell align="start">Duration</TableCell>
                            <TableCell align="start">
                              Institute / Company Name
                            </TableCell>
                            <TableCell align="start">Position</TableCell>
                            <TableCell align="start">Key Skills</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Grid item md={12}>
                                <Select options={exprienceType} />
                              </Grid>
                            </TableCell>

                            <TableCell>
                              <Grid item md={12} xs={12} className="duration">
                                <Select
                                  className="timeP"
                                  options={durationMOnths}
                                />

                                <Select
                                  className="timeP"
                                  options={durationYear}
                                />
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid item md={12}>
                                <InputField name="companyName" fullWidth />
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid item md={12}>
                                <InputField name="positions" fullWidth />
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid item md={12} xs={12}>
                                <Select
                                  defaultValue={[
                                    colourOptions[2],
                                    colourOptions[3],
                                  ]}
                                  isMulti
                                  name="colors"
                                  options={colourOptions}
                                  className="basic-multi-select"
                                  classNamePrefix="select"
                                />
                              </Grid>
                            </TableCell>
                          </TableRow>
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
