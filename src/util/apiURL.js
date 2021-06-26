export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://pacific-sands-68301.herokuapp.com";
};