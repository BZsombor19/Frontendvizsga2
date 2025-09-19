import {useEffect, useState} from "react";
import './index.css'



export default function App() {
  const [cats, setCats] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    fetch("/api/cats")
    .then(res => res.json())
    .then(data => setCats(data));
  });


  const filtered = cats.filter(cat => {
    if (query.trim() === "") return true;
    const q = query.toLowerCase();

    return (
      cat.name.toLowerCase().includes(q) ||
      cat.color.toLowerCase().includes(q) ||
      cat.gender.toLowerCase().includes(q) ||
      cat.age.toString() === query
    );
  });


  const handleDelete = (id) => {
    setCats(cats.filter(cat => cat.id !== id));
  };



  return(
    <div className="container mt-4">
      <nav className="navbar navbar-dark bg-dark px-3 mb-4">
        <h1 className="navbar-brand">Cat Adoption</h1>
        <div className="d-flex">
          <input
            className="form-control me-2"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </nav>
      </div>
  )
}


