export default function PatientList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('/patients')
      .then(r => r.json())
      .then(data => setList(data))
  }, []);
  /* render list */
}