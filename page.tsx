async function chargerPatients() {
  const res = await fetch("/api/patients");
  const data = await res.json();
  if (Array.isArray(data)) {
    setPatients(data);
  } else {
    setPatients([]);
  }
  setLoading(false);
}