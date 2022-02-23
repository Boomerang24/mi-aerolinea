import { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { cities } from "../../data/citiesData";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  setCityType,
  setDestinationCity,
  setOriginCity,
} from "../../actions/cities";

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
  const { cityType } = useSelector((state: RootStateOrAny) => state.cities);

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown | string }>
  ) => {
    const { value } = event.target;
    setCityCode(value as string);
    if (cityType === "origin") {
      dispatch(setOriginCity(value));
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

  const filteredCities = cities.filter((city) => city.name !== "Cancun");

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
          onChange={handleChange}
        >
          {filteredCities.map((city) => (
            <MenuItem key={city.id} value={city.name}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
