import "dotenv/config";
import "./db";
import "./Post";
import app from "./server";

const PORT = 8000;

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(process.env.PORT || PORT, handleListening);