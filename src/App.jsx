import NavBar from "./components/NavBar"
import Button from "./components/Button"
import "./styles/App.css"

function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      <section className="landing">
        <div className="titulo">
          <h1 className="subtitulo">SOMOS</h1>
          <h1 className="DM">Soporte Caribe</h1>
        </div>
        <div className="parrafo">
          <p>
            Somos una empresa que brinda soluciones integrales en el área de
            tecnología, con el objetivo de satisfacer las necesidades de
            nuestros clientes, ofreciendo productos y servicios de calidad,
            con personal calificado y comprometido con la mejora continua.
          </p>
        </div>
        <div className="botones">
          <Button title="Cotiza con Nosotros" />
          <Button title="Mira nuestro trabajo" />
        </div>
      </section>
    </>
  )
}

export default App
