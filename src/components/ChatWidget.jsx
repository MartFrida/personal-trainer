// src/components/ChatForm.jsx
import { useState } from 'react';
import { askQuestion } from '../api/ask';

export default function ChatWidget() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await askQuestion(query);
    setResponse(res.answer);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Задай вопрос"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? 'Жду...' : 'Отправить'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-2 bg-gray-100 rounded">{response}</div>
      )}
    </div>
  );
}
