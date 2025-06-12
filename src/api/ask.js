
// src/api/ask.js

const backendPath = import.meta.env.PROD
  ? 'https://cieptis-backend.vercel.app/ask'
  : 'http://localhost:3000/ask';

export async function askQuestion(query, language = 'es') {
  const res = await fetch(backendPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, language })
  });

  const data = await res.json();
  return data;
}
