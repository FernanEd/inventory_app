import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = "";
const PORT = process.env.PORT || 4001;

export default { MONGODB_URI, PORT };
