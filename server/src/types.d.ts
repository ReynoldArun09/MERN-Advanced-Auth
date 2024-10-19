import { z } from "zod";
import { Document } from "mongoose";

const EnvVariables = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().min(1).max(4),
  CORS_ORIGIN: z.string().min(1),
  MONGO_DB_URI: z.string().min(1).readonly(),
  JWT_SECRET_KEY: z.string().min(1),
  JWT_EXPIRE_TIME: z.string().min(1),
  EMAIL_FROM: z.string().min(1),
  EMAIL_SERVER_USER: z.string().min(1),
  EMAIL_SERVER_PASSWORD: z.string().min(1),
  EMAIL_SERVER_HOST: z.string().min(1),
  EMAIL_SERVER_PORT: z.string().min(1),
});

declare global {
  namespace NodeJS {
    export interface ProcessEnv extends z.infer<typeof EnvVariables> {}
  }
}

export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  lastLogin: Date | number;
  isVerified: boolean;
  resetPasswordToken: string | null;
  resetPasswordExpires: Date | null | number;
  verificationToken: string | null;
  verificationExpires: Date | null;
}

export interface IJwtPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user: IJwtPayload;
    }
  }
}
