import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.TEST_ENV || 'test';
const environmentFile = path.resolve(process.cwd(), `.env.${environment}`);

dotenv.config({
  path: environmentFile,
  quiet: true,
});

const baseURL = process.env.BASE_URL;
const authUsername = process.env.AUTH_USERNAME;
const authPassword = process.env.AUTH_PASSWORD;

if (!baseURL) {
  throw new Error(`BASE_URL is missing. Check the environment file: .env.${environment}`);
}

if (!authUsername) {
  throw new Error(`AUTH_USERNAME is missing. Check the environment file: .env.${environment}`);
}

if (!authPassword) {
  throw new Error(`AUTH_PASSWORD is missing. Check the environment file: .env.${environment}`);
}

export const environmentConfig = {
  environment,
  baseURL,
  authUsername,
  authPassword,
};
