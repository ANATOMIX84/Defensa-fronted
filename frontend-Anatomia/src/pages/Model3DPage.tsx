import { Link, useSearchParams } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import { sistemas } from "../data/modelos3d/sistemas";
import "./Model3DPage.css";

function Model3DPage() {
  const [params, setParams] = useSearchParams();
  const sistema = sistemas.find((s) => s.id === params.get("sistema")) ?? sistemas[0];

  return (
    <>
      <Navbar />

      <main className="model-page">
        <div className="model-page__content">
          <section className="model-page__description">
            <p>EXPLORACIÓN ANATÓMICA</p>
            <h1>Modelos 3D del cuerpo humano</h1>
            <span>
              Elige un sistema y luego un modelo. Puedes girarlo, acercarlo y hacer clic en cada
              parte para ver qué es y para qué sirve.
            </span>
          </section>

          <nav className="model-page__tabs" aria-label="Sistemas del cuerpo">
            {sistemas.map((s) => (
              <button
                key={s.id}
                type="button"
                className={
                  s.id === sistema.id
                    ? "model-page__tab model-page__tab--active"
                    : "model-page__tab"
                }
                onClick={() => setParams({ sistema: s.id }, { replace: true })}
              >
                {s.titulo.replace("Sistema ", "")}
              </button>
            ))}
          </nav>

          <section className="model-page__system">
            <h2>{sistema.titulo}</h2>
            <p>{sistema.introduccion}</p>
          </section>

          <div className="model-page__grid">
            {sistema.modelos.map((modelo) => (
              <Link
                key={modelo.id}
                to={`/modelo-3d/${sistema.id}/${modelo.id}`}
                className="model-card"
              >
                <div className="model-card__image">
                  <img src={modelo.portada} alt={modelo.titulo} loading="lazy" />
                </div>
                <h3>{modelo.titulo}</h3>
                <p>{modelo.resumen}</p>
                <span>{modelo.partes.length} partes · Ver modelo →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Model3DPage;
