// src/api/ask.js
export async function askQuestion(query) {
  const res = await fetch('http://localhost:3000/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const data = await res.json();
  return data;
}
