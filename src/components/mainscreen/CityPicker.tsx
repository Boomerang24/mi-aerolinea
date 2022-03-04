/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  setCityType,
  setDestinationCity,
  setOriginCity,
} from "../../actions/cities";
import Swal from "sweetalert2";
import { ICity } from "../../actions/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

interface CityPickerProps {
  site: string;
}

export const CityPicker = ({ site }: CityPickerProps) => {
  const classes = useStyles();
  const [cityCode, setCityCode] = useState<string | number>("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { availableCities, cityType, originCity } = useSelector(
    (state: RootStateOrAny) => state.cities
  );

  const handleChange = (event: any) => {
    const { value } = event.target;
    setCityCode(value as number);
    if (cityType === "origin") {
      dispatch(setOriginCity(value));
    }
    if (originCity !== "" && value === originCity) {
      Swal.fire(
        "Error",
        "Origin and Destination can't be the same city",
        "error"
      ).then(() => setCityCode(""));
    } else {
      dispatch(setDestinationCity(value));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    dispatch(setCityType(site));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cityCode}
          onChange={(e) => handleChange(e)}
        >
          {availableCities.map((city: ICity) => (
            <MenuItem key={city.id} value={city.id}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
