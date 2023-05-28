import axios from "axios";

const getCities = (token: String, state: string) => {
  return axios
    .get(`https://www.universal-tutorial.com/api/cities/${state}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((res) =>
      res.data.map(({ city_name }: { city_name: string }) => city_name)
    )
    .catch((e) => console.error(e));
};

export default getCities;
