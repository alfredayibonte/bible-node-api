import App from "./routes";
import { Config } from "./config";

const { port } = Config;

App.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
