import React, { useState, useEffect } from "react";
import { Grid, Typography, FormLabel } from "@material-ui/core";
import { InputField, DatePickerField } from "../../FormFields";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Select from "react-select";

import "./style.css";
const firstChoice = [
  { value: "Noida", label: "Noida" },
  { value: "Delhi", label: "Delhi" },
  { value: "Gorakhpur", label: "Gorakhpur" },
];
export default function EducationalDetails(props) {
  const {
    formField: { },
  } = props;
  // ===========================

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Educational Details
      </Typography>
      <Grid container spacing={3}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell >Board Name</TableCell>
                <TableCell >School / College Name </TableCell>
                <TableCell >Specialization</TableCell>
                <TableCell >% / CGPA</TableCell>
                <TableCell >Passing Year</TableCell>
                <TableCell >Attached Certificate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  10<sup>th</sup>*
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <InputField
                      name="{seekerEmailID.name}"
                      label="{seekerEmailID.label}"
                      fullWidth
                    />
                  </Grid>
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <InputField
                      name="School Name"
                      label="School Name"
                      fullWidth
                    />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <InputField
                      name="Specialization"
                      label="Specialization"
                      fullWidth
                    />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <InputField
                      name="Specialization"
                      label="Specialization"
                      fullWidth
                    />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <InputField
                      name="Specialization"
                      label="Specialization"
                      fullWidth
                    />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <div class="upload-btn-wrapper">
                      <button class="btn"> Attached File </button>
                      <input type="file" name="myfile" />
                    </div>
                  </Grid>
                </TableCell>
              </TableRow>
              {/* ============= */}
              <TableRow>
                <TableCell component="th" scope="row">
                  12<sup>th</sup>
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <input type="number" name="% / CGPA" label="% / CGPA" fullWidth pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <div class="upload-btn-wrapper">
                      <button class="btn"> Attached File </button>
                      <input type="file" name="myfile" />
                    </div>
                  </Grid>
                </TableCell>
              </TableRow>
              {/* ===================== */}
              <TableRow>
                <TableCell component="th" scope="row">
                  Diploma
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <input type="number" name="% / CGPA" label="% / CGPA" fullWidth pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <div class="upload-btn-wrapper">
                      <button class="btn"> Attached File </button>
                      <input type="file" name="myfile" />
                    </div>
                  </Grid>
                </TableCell>
              </TableRow>
              {/* ===================== */}
              <TableRow>
                <TableCell component="th" scope="row">
                  Graduation
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <input type="number" name="% / CGPA" label="% / CGPA" fullWidth pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <div class="upload-btn-wrapper">
                      <button class="btn"> Attached File </button>
                      <input type="file" name="myfile" />
                    </div>
                  </Grid>
                </TableCell>
              </TableRow>
              {/* =================== */}
              <TableRow>
                <TableCell component="th" scope="row">
                  Post Graduation
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <input type="number" name="% / CGPA" label="% / CGPA" fullWidth pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==2) return false;" />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <Select options={firstChoice} />
                  </Grid>
                </TableCell>
                <TableCell  >
                  <Grid item md={12}>
                    <div class="upload-btn-wrapper">
                      <button class="btn"> Attached File </button>
                      <input type="file" name="myfile" />
                    </div>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>



      </Grid>
    </React.Fragment>
  );
}

