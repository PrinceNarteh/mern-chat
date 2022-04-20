import { CorsOptions } from "cors";

const allowedOrigins = ["http://localhost:3000"];
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || (origin && allowedOrigins.includes(origin))) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
};
