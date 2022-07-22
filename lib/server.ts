import env from "./environment";
import app from "./config/app";
const PORT = env.getPort();
app.listen(PORT, () => {
  console.log("Express listening port " + PORT);
});
