import axios from "axios";

const getStates = (token: string) => {
  return axios
    .get("https://www.universal-tutorial.com/api/states/United States", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((res) => {
      return res.data.map(
        ({ state_name }: { state_name: string }) => state_name
      );
    })
    .catch((e) => console.error(e));
};

export default getStates;
