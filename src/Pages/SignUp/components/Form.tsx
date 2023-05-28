/* eslint-disable react/jsx-pascal-case */
import {
  Autocomplete,
  Button,
  Dialog,
  Paper,
  TextField,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import useAccessToken from "../hooks/useAcessToken";
import { StateType } from "../types";
import getCities from "../utils/getCities";
import getStates from "../utils/getStates";
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

const DialogRoot = styled("div")`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 25px;
`;

const Form = () => {
  const [state, setState] = useState<Partial<StateType>>({});
  const [USAStates, setUSAStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const token = useAccessToken();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    getStates(token).then((data) => setUSAStates(data));
  }, [token]);

  const onChange = (fieldName: keyof StateType, value: string) => {
    setState((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  return (
    <_Paper>
      <BaseInfo onChange={onChange} />
      <Autocomplete
        options={USAStates}
        renderInput={(params) => <TextField {...params} label="USA STATES" />}
        onChange={async (e, newVal) => {
          onChange("state", newVal || "");
          await getCities(token, newVal || "").then((data) => setCities(data));
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

      <Button name="submit" onClick={() => setIsSubmitted(true)}>
        Submit
      </Button>
      <Dialog open={isSubmitted} onClose={() => setIsSubmitted(false)}>
        <DialogRoot> your registration has been sent </DialogRoot>
      </Dialog>
    </_Paper>
  );
};

export default Form;
