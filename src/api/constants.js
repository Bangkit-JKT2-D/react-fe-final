export const isDevelopment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

const developmentConstants = {
  API_BASE_URL: "http://localhost:5000/"
};

const productionConstants = {
  API_BASE_URL: "https://fresh-rotten-fruit.herokuapp.com/"
};

export default isDevelopment ? developmentConstants : productionConstants;
