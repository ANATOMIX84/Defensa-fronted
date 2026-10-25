import "@google/model-viewer";
import type { ModelViewerElement } from "@google/model-viewer";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, PointerEvent } from "react";
import "./Visor3D.css";

interface Visor3DProps {
  modelo: string;
  orbita: string;
  objetivo: string;
  titulo: string;
  partes: string[];
  seleccionada: string | null;
  onSeleccionar: (id: string | null) => void;
}

export function Visor3D({ modelo, orbita, objetivo, titulo, partes, seleccionada, onSeleccionar }: Visor3DProps) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const visorRef = useRef<HTMLElement>(null);
  const inicioClick = useRef({ x: 0, y: 0 });
  const colores = useRef(new Map<string, number[]>());
  const seleccionRef = useRef(seleccionada);
  const [autoGiro, setAutoGiro] = useState(false);

  useEffect(() => {
    seleccionRef.current = seleccionada;
    const visor = visorRef.current as ModelViewerElement | null;
    if (!visor) return;

    const pintar = () => {
      for (const material of visor.model?.materials ?? []) {
        const pbr = material.pbrMetallicRoughness;

        if (!colores.current.has(material.name)) {
          colores.current.set(material.name, [...pbr.baseColorFactor]);
        }

        const [r, g, b, a] = colores.current.get(material.name)!;

        // solo lo semitransparente va en BLEND: en ese modo no se escribe profundidad
        // y en los modelos de cuerpo entero se verían los músculos de atrás por delante
        if (!seleccionRef.current) {
          pbr.setBaseColorFactor([r, g, b, a]);
          material.setAlphaMode(a < 1 ? "BLEND" : "OPAQUE");
          material.setEmissiveFactor([0, 0, 0]);
        } else if (material.name === seleccionRef.current) {
          pbr.setBaseColorFactor([r, g, b, 1]);
          material.setAlphaMode("OPAQUE");
          material.setEmissiveFactor([r * 0.22, g * 0.22, b * 0.22]);
        } else {
          pbr.setBaseColorFactor([r * 0.45 + 0.3, g * 0.45 + 0.3, b * 0.45 + 0.3, 0.12]);
          material.setAlphaMode("BLEND");
          material.setEmissiveFactor([0, 0, 0]);
        }
      }
    };

    pintar();
    visor.addEventListener("load", pintar);
    return () => visor.removeEventListener("load", pintar);
  }, [seleccionada, modelo]);

  const handlePointerDown = (e: PointerEvent) => {
    inicioClick.current = { x: e.clientX, y: e.clientY };
  };

  const handleClick = (e: MouseEvent) => {
    const dx = Math.abs(e.clientX - inicioClick.current.x);
    const dy = Math.abs(e.clientY - inicioClick.current.y);
    if (dx > 5 || dy > 5) return;

    const visor = visorRef.current as ModelViewerElement | null;
    const material = visor?.materialFromPoint(e.clientX, e.clientY);
    onSeleccionar(material && partes.includes(material.name) ? material.name : null);
  };

  const reiniciarVista = () => {
    const visor = visorRef.current as ModelViewerElement | null;
    if (!visor) return;
    visor.cameraOrbit = orbita;
    visor.cameraTarget = objetivo;
    visor.fieldOfView = "auto";
    visor.jumpCameraToGoal();
    setAutoGiro(false);
  };

  return (
    <div className="visor" ref={contenedorRef}>
      <aside className="visor__herramientas">
        <button type="button" onClick={reiniciarVista} title="Restablecer vista">
          ◈
        </button>
        <button
          type="button"
          onClick={() => setAutoGiro((actual) => !actual)}
          title="Activar o detener giro automático"
          className={autoGiro ? "visor__herramienta--activa" : ""}
        >
          ↻
        </button>
      </aside>

      <model-viewer
        ref={visorRef}
        src={modelo}
        alt={`Modelo 3D: ${titulo}`}
        camera-controls
        auto-rotate={autoGiro || undefined}
        camera-orbit={orbita}
        camera-target={objetivo}
        interaction-prompt="none"
        shadow-intensity="0.6"
        exposure="1"
        onPointerDown={handlePointerDown}
        onClick={handleClick}
      />

      <button
        type="button"
        className="visor__pantalla-completa"
        onClick={() => contenedorRef.current?.requestFullscreen()}
        title="Pantalla completa"
      >
        ⛶
      </button>
    </div>
  );
}
