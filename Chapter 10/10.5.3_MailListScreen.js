export default function MailList() {
  const [mails, setMails] = useState(initialMails);

  function handleDelete(id) {
    setMails(ms => ms.filter(m => m.id !== id));
  }

  return (
    <FlatList
      data={mails}
      keyExtractor={m => m.id.toString()}
      renderItem={({ item }) => (
        <MailItem mail={item} onDelete={handleDelete} />
      )}
    />
  );
}