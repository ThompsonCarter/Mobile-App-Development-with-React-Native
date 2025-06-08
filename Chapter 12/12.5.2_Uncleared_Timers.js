useEffect(() => {
  const timer = setInterval(fetchData, 10000);
  return () => clearInterval(timer);
}, []);