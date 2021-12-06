import "./styles.css";

export default function App() {
  return (
    <div className="En-tete1">
      <h1>&ensp; Nom du Site</h1>
      <nav>
        <ul>
          <li class="deroulant">
            <a href="#">Magazines &ensp;</a>
            <ul class="sous">
              <li>
                <a href="#">?</a>
              </li>
            </ul>
          </li>
          <li class="deroulant">
            <a href="#">Atelier &ensp;</a>
            <ul class="sous">
              <li>
                <a href="#">Exo 1</a>
              </li>
              <li>
                <a href="#">Exo 2</a>
              </li>
              <li>
                <a href="#">Exo 3</a>
              </li>
            </ul>
          </li>
          <li class="deroulant">
            <a href="#">Outils&ensp;</a>
            <ul class="sous">
              <li>
                <a href="#">Lexique</a>
              </li>
              <li>
                <a href="#">Guide grammatical</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">A propos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
