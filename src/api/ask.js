
// src/api/ask.js

const backendPath = import.meta.env.VITE_BACKEND_PATH;

export async function askQuestion(query) {
  const res = await fetch(backendPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const data = await res.json();
  return data;
}
