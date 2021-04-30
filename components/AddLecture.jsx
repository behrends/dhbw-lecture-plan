export default function AddLecture() {
  return (
    <div>
      <div>
        <label>Titel der Vorlesung</label>
        <input type="text" />
      </div>
      <div>
        <label>Anzahl der Stunden</label>
        <input type="text" />
      </div>
      <div>
        <label>Klausur einplanen?</label>
        <input type="checkbox" />
        <input type="text" />
        <label>Minuten</label>
      </div>
      <div>
        <button>Vorlesung erstellen</button>
      </div>
    </div>
  );
}
