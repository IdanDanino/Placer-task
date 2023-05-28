import { styled } from "@mui/material";
import { SignUp } from "./Pages";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Root>
      <SignUp />
    </Root>
  );
};

export default App;
