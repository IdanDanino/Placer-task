import axios from "axios";
import { useEffect, useState } from "react";

const API_TOKEN =
  "j_KHjw5jVECO13ITky0btLFy927Ge3vzh-wP5R0xevw_WwVjNJISVqhXyFtGJFq_0jM";

const useAccessToken = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    axios
      .get("https://www.universal-tutorial.com/api/getaccesstoken", {
        headers: {
          Accept: "application/json",
          "api-token": API_TOKEN,
          "user-email": "idan25100@gmail.com",
        },
      })
      .then((token) => {
        setToken(token.data.auth_token);
      });
  }, []);

  return token;
};

export default useAccessToken;
