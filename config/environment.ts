import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.TEST_ENV || 'test';
const environmentFile = path.resolve(process.cwd(), `.env.${environment}`);

dotenv.config({
  path: environmentFile,
  quiet: true,
});

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error(`BASE_URL is missing. Check the environment file: .env.${environment}`);
}

export const environmentConfig = {
  environment,
  baseURL,
};

export function getAuthCredentials(): {
  username: string;
  password: string;
} {
  const username = process.env.AUTH_USERNAME;
  const password = process.env.AUTH_PASSWORD;

  if (!username) {
    throw new Error(`AUTH_USERNAME is missing. Check the environment file: .env.${environment}`);
  }

  if (!password) {
    throw new Error(`AUTH_PASSWORD is missing. Check the environment file: .env.${environment}`);
  }

  return {
    username,
    password,
  };
}
