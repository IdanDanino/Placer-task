/* eslint-disable react/jsx-pascal-case */
import {
  Autocomplete,
  Button,
  Input,
  Paper,
  TextField,
  styled,
} from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import useAccessToken from "../hooks/useAcessToken";
import { StateType } from "../types";
import BaseInfo from "./BaseInfo";

const _Paper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 25px;
  min-width: 750px;
  > * {
    margin: 10px;
  }
`;

const Form = () => {
  const [state, setState] = useState<Partial<StateType>>({});
  const [USAStates, setUSAStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const token = useAccessToken();

  useEffect(() => {
    axios
      .get("https://www.universal-tutorial.com/api/states/United States", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
      .then((res) =>
        setUSAStates(
          res.data.map(({ state_name }: { state_name: string }) => state_name)
        )
      )
      .catch((e) => console.error(e));
  }, [token]);

  const getCities = useCallback(() => {
    axios
      .get(`https://www.universal-tutorial.com/api/cities/${state.state}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
      .then((res) =>
        setCities(
          res.data.map(({ city_name }: { city_name: string }) => city_name)
        )
      )
      .catch((e) => console.error(e));
  }, [state.state, token]);

  const onChange = (fieldName: keyof StateType, value: string) => {
    setState((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <_Paper>
      <BaseInfo onChange={onChange} />
      <Autocomplete
        options={USAStates}
        renderInput={(params) => <TextField {...params} label="USA STATES" />}
        onChange={(e, newVal) => {
          onChange("state", newVal || "");
          getCities();
        }}
      />
      <Autocomplete
        options={cities}
        disabled={!state.state}
        loading={!state.state}
        renderInput={(params) => <TextField {...params} label="Cities" />}
        onChange={(e, newVal) => {
          onChange("city", newVal || "");
        }}
      />

      <Button name="submit" onClick={onSubmit}>
        Submit
      </Button>
    </_Paper>
  );
};

export default Form;
