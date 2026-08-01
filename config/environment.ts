import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.TEST_ENV || 'test';
const environmentFile = path.resolve(process.cwd(), `.env.${environment}`);

dotenv.config({ path: environmentFile });

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error(
    `BASE_URL is missing. Check the environment file: .env.${environment}`
  );
}

export const environmentConfig = {
  environment,
  baseURL,
};