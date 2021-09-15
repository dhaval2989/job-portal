import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  InputField,
  CheckboxField,
  SelectField,
  DatePickerField,
} from "../../FormFields";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const cities = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "New York",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "Saigon",
  },
];

const states = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "11",
    label: "Florida",
  },
  {
    value: "22",
    label: "Michigan",
  },
  {
    value: "33",
    label: "Texas",
  },
];

const countries = [
  {
    value: null,
    label: "None",
  },
  {
    value: "111",
    label: "United States",
  },
  {
    value: "222",
    label: "Italy",
  },
  {
    value: "333",
    label: "Vietnam",
  },
];

export default function PersonalDetails(props) {
  const {
    formField: {
      DOB,
      imageUploader,
      fullName,
      gender,
      seekerEmailID,
      seekerMobileNumber,
      address,
      locality,
      city,
      state,
      zipcode,
      country,
    },
  } = props;
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className="stepper_name">
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={12} className="mb-4">
            <FormLabel component="legend" className="mb-3">
              Add Profile Image
            </FormLabel>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="file"
                accept="image/*"
                name={imageUploader.name}
                label={imageUploader.label}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
              <div
                style={{
                  height: "110px",
                  width: "110px",
                  border: "3px dashed #565656",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "acsolute",
                  }}
                  ref={imageUploader}
                />
              </div>
              <div
                style={{
                  display: "block",
                  marginLeft: "20px",
                  marginTop: "auto",
                  marginBottom: "20px",
                  marginRright: "40px",
                  fontSize: "17px",
                  fonWeight: "400",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
              >
                Click to upload Image
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} className="mb-4">
            <InputField
              name={DOB.name}
              label={DOB.label}
              type="date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} className="mb-4">
            <InputField name={fullName.name} label={fullName.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} className="mb-3">
            <FormLabel component="legend">Gender</FormLabel>
            <Grid itme xs={12} sm={12}>
              <RadioGroup
                aria-label="gender"
                name={gender.name}
                label={gender.label}
                value={value}
                onChange={handleChange}
                className="gender_radio"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="mb-3">
            <InputField
              name={seekerEmailID.name}
              label={seekerEmailID.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} className="mb-3">
            <InputField
              name={seekerMobileNumber.name}
              label={seekerMobileNumber.label}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* ================ */}
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={12} className="mb-3">
            <FormLabel component="legend">Permanent Residency</FormLabel>
            <InputField name={address.name} label={address.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} className="mb-3">
            <InputField name={locality.name} label={locality.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} className="d-flex justify-content-between">
            <Grid item xs={6} sm={5} className="mb-3">
              <InputField name={zipcode.name} label={zipcode.label} fullWidth />
            </Grid>
            <Grid item xs={6} sm={5} className="mb-3">
              <SelectField
                name={city.name}
                label={city.label}
                data={cities}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="d-flex justify-content-between">
            <Grid item xs={12} sm={5} className="mb-3">
              <SelectField
                name={country.name}
                label={country.label}
                data={countries}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={5} className="mb-3">
              <SelectField
                name={state.name}
                label={state.label}
                data={states}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="mb-3">
            <FormLabel component="legend">Permanent Residency</FormLabel>
            <InputField name={address.name} label={address.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} className="mb-3">
            <InputField name={locality.name} label={locality.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} className="d-flex justify-content-between">
            <Grid item xs={6} sm={5} className="mb-3">
              <InputField name={zipcode.name} label={zipcode.label} fullWidth />
            </Grid>
            <Grid item xs={6} sm={5} className="mb-3">
              <SelectField
                name={city.name}
                label={city.label}
                data={cities}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className="d-flex justify-content-between">
            <Grid item xs={12} sm={5} className="mb-3">
              <SelectField
                name={country.name}
                label={country.label}
                data={countries}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={5} className="mb-3">
              <SelectField
                name={state.name}
                label={state.label}
                data={states}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

