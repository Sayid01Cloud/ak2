import { useState } from 'react';

function AddForm({ onLeggTilVare }) {
  const [vareNavn, setVareNavn] = useState('');
  const [antall, setAntall] = useState('');
  const [feilmelding, setFeilmelding] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validering
    if (!vareNavn.trim() && !antall) {
      setFeilmelding('Både varenavn og antall må fylles ut');
      return;
    }
    if (!vareNavn.trim()) {
      setFeilmelding('Varenavn må fylles ut');
      return;
    }
    if (!antall) {
      setFeilmelding('Antall må fylles ut');
      return;
    }

    // Legg til vare
    onLeggTilVare(vareNavn, parseInt(antall));

    // Nullstill skjema
    setVareNavn('');
    setAntall('');
    setFeilmelding('');
  };

  return (
    <section>
      <h2>Legg til vare</h2>
      {feilmelding && <p style={{ color: 'red' }}>{feilmelding}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Varenavn"
          value={vareNavn}
          onChange={(e) => setVareNavn(e.target.value)}
        />
        <input
          type="number"
          placeholder="Antall"
          value={antall}
          onChange={(e) => setAntall(e.target.value)}
          min="1"
        />
        <button type="submit">Legg til vare</button>
      </form>
    </section>
  );
}

export default AddForm;