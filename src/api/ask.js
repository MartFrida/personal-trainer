// const backendPath = import.meta.env.PROD.VITE_BACKEND_PATH

const backendPath = import.meta.env.VITE_BACKEND_PATH

export async function askQuestion(query, language = 'es') {
  console.log(backendPath)
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
