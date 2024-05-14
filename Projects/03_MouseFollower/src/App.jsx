import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  return (
    <>
      <main>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#09f",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: "translate(" + position.x + "px," + position.y + "px)",
          }}
        ></div>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? "Desactivar" : "Activar"} seguir puntero
        </button>
      </main>
    </>
  );
};
function App() {

  return (
    <main>
     <FollowMouse />
    </main>
  );
}
export default App;
