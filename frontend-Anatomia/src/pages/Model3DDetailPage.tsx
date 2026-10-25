import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";
import { Visor3D } from "../components/model3d/Visor3D";
import { sistemas } from "../data/modelos3d/sistemas";
import "./Model3DDetailPage.css";

function Model3DDetailPage() {
  const { sistemaId, modeloId } = useParams();
  const sistema = sistemas.find((s) => s.id === sistemaId);
  const modelo = sistema?.modelos.find((m) => m.id === modeloId);
  const [seleccion, setSeleccion] = useState({ modelo: "", parte: "" });

  // al venir desde la lista la página quedaría con el scroll de abajo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [modeloId]);

  if (!sistema || !modelo) {
    return <Navigate to="/modelo-3d" replace />;
  }

  const seleccionada = seleccion.modelo === modelo.id && seleccion.parte ? seleccion.parte : null;
  const seleccionar = (parte: string | null) => setSeleccion({ modelo: modelo.id, parte: parte ?? "" });
  const parte = modelo.partes.find((p) => p.id === seleccionada);

  return (
    <>
      <Navbar />

      <main className="model-detail">
        <div className="model-detail__content">
          <Link to={`/modelo-3d?sistema=${sistema.id}`} className="model-detail__back">
            ← Volver a {sistema.titulo}
          </Link>

          <section className="model-detail__description">
            <p>{sistema.titulo.toUpperCase()}</p>
            <h1>{modelo.titulo}</h1>
            <span>{modelo.resumen}</span>
          </section>

          <section className="model-detail__card">
            <aside className="model-detail__parts">
              <h2>Partes</h2>
              <ul>
                {modelo.partes.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      className={
                        p.id === seleccionada
                          ? "model-detail__part model-detail__part--active"
                          : "model-detail__part"
                      }
                      onClick={() => seleccionar(p.id === seleccionada ? null : p.id)}
                    >
                      <span className="model-detail__color" style={{ background: p.color }} />
                      {p.nombre}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <Visor3D
              key={modelo.modelo}
              modelo={modelo.modelo}
              orbita={modelo.orbita}
              objetivo={modelo.objetivo}
              titulo={modelo.titulo}
              partes={modelo.partes.map((p) => p.id)}
              seleccionada={seleccionada}
              onSeleccionar={seleccionar}
            />

            <section className="model-detail__info">
              {parte ? (
                <>
                  <h2>
                    <span className="model-detail__color" style={{ background: parte.color }} />
                    {parte.nombre}
                  </h2>
                  <p>{parte.descripcion}</p>
                  <button type="button" className="model-detail__reset" onClick={() => seleccionar(null)}>
                    ← Volver a la información general
                  </button>
                </>
              ) : (
                <>
                  <h2>¿Qué es?</h2>
                  <p>{modelo.queEs}</p>
                  <h3>Funciones</h3>
                  <ul>
                    {modelo.funciones.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <p className="model-detail__hint">Haz clic en una parte del modelo para ver su descripción.</p>
                </>
              )}
            </section>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Model3DDetailPage;
