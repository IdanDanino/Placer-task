import { Input } from "@mui/material";
import { StateType } from "../types";

type BaseInfoProps = {
  onChange: (fieldName: keyof StateType, value: string) => void;
};

const BaseInfo = ({ onChange }: BaseInfoProps) => {
  return (
    <>
      <Input
        required
        placeholder="First name"
        onChange={(e) => onChange("firstName", e.target.value)}
      />
      <Input
        required
        placeholder="Last name"
        onChange={(e) => onChange("lastName", e.target.value)}
      />
      <Input
        type="email"
        required
        placeholder="email@email.com"
        onChange={(e) => onChange("email", e.target.value)}
      />
      <Input
        required
        placeholder="password"
        type="password"
        onChange={(e) => onChange("password", e.target.value)}
      />
    </>
  );
};

export default BaseInfo;
