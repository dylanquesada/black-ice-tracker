const app = require("./app");
const port = 5005;

app.listen(port, () => {
  console.log(`Black Ice Track Node API listening at http://localhost:${port}`);
});
