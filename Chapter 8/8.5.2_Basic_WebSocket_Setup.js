// src/hooks/useLiveUpdates.js
import { useEffect, useRef, useState } from 'react';

export function useLiveUpdates(topic) {
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(`wss://live.example.com/${topic}`);
    ws.current.onmessage = e => {
      const data = JSON.parse(e.data);
      setMessages(prev => [data, ...prev]);
    };
    ws.current.onerror = e => console.error('WS error', e);
    return () => ws.current.close();
  }, [topic]);

  return messages;
}
