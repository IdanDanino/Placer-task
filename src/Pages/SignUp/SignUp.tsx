/* eslint-disable react/jsx-pascal-case */
import { Typography, styled } from "@mui/material";
import { useState } from "react";
import Form from "./components/Form";

type StateType = {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  email: string;
  password: string;
};

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px 0;
  }
`;

const SignUp = () => {
  return (
    <Root>
      <Typography variant="h1">Sign Up</Typography>
      <Form />
    </Root>
  );
};

export default SignUp;
