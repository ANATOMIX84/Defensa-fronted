import { NavLink } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__brand">
          <h2>ANATOMIX</h2>
          <p>Aprende anatomía como un profesional.</p>
        </section>

        <section className="footer__links">
          <h3>Enlaces rápidos</h3>

          <div className="footer__links-grid">
            <NavLink to="/home">Inicio</NavLink>
            
            <NavLink to="/juego">Juego</NavLink>
            <NavLink to="/modelo-3d">Modelo 3D</NavLink>
            
            
          </div>
        </section>

        <section className="footer__copyright">
          <p>© 2026 ANATOMIX</p>
          <p>Todos los derechos reservados</p>
        </section>
      </div>
    </footer>
  );
}