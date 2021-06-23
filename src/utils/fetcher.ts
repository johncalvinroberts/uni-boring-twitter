const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

interface FetcherOptions {
  url: string;
  method: string;
  body?: Record<string, unknown>;
}

const niceFetch = async ({
  url,
  method,
  body = {},
}: FetcherOptions): Promise<unknown> => {
  const headers = {
    'content-type': 'application/json',
    accept: 'application/json, text/plain, */*',
  };

  const options = {
    headers,
    method,
    ...(method !== GET ? { body: JSON.stringify(body) } : null),
  };
  const res = await fetch(url, options);
  const value = await res.json();
  if (!res.ok) {
    throw value;
  } else {
    return value;
  }
};

const fetcher = {
  get: (url: string) => niceFetch({ url, method: GET }),
  post: (url: string, body: Record<string, unknown>) =>
    niceFetch({ url, method: POST, body }),
  patch: (url: string, body: Record<string, unknown>) =>
    niceFetch({ url, method: PATCH, body }),
  delete: (url: string) => niceFetch({ url, method: DELETE }),
};

export default fetcher;
