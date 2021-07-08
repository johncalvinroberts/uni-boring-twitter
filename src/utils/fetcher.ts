import { BACKEND_BASE_URL } from '../constants';

const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

type FetcherMethod = typeof GET | typeof POST | typeof PATCH | typeof DELETE;

type FetcherBody = Record<string, unknown>;

const fetcher = async (
  path: string,
  method: FetcherMethod = GET,
  body?: FetcherBody
): Promise<unknown> => {
  const headers = {
    'content-type': 'application/json',
    accept: 'application/json, text/plain, */*',
  };

  const options = {
    headers,
    method,
    ...(method !== GET ? { body: JSON.stringify(body) } : null),
  };
  const url = `${BACKEND_BASE_URL}${path}`;
  const res = await fetch(url, options);
  const value = await res.json();
  if (!res.ok) {
    throw value;
  } else {
    return value;
  }
};

export default fetcher;
