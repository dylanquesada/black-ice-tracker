const app = require("./app");
const port = 5001;

app.listen(port, () => {
  console.log(`Black Ice Track Node API listening at http://localhost:${port}`);
});
