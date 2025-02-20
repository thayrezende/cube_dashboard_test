import cubejs from "@cubejs-client/core";

const API_URL = "http://localhost:4000/cubejs-api/v1"; // Backend do Cube.js

const cubejsApi = cubejs(import.meta.env.VITE_CUBEJS_API_SECRET, {
  apiUrl: API_URL,
});

export default cubejsApi;
