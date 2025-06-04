import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <main style={styles.wrapper}>
      <div style={styles.left}>
        <img
          src="https://vitejs.dev/logo.svg"
          alt="Vite Logo"
          style={styles.logo}
        />
        <h3>Manifest Design System</h3>
      </div>

      <div style={styles.right}>
        <h1>Test Button Component</h1>

        <Section label="Primary">
          <Button variant="primary">Primary</Button>
        </Section>

        <Section label="Secondary">
          <Button variant="secondary">Secondary</Button>
        </Section>

        <Section label="Text">
          <Button variant="text">Text</Button>
        </Section>

        <Section label="Ghost">
          <Button variant="ghost">Ghost</Button>
        </Section>

        <Section label="Disabled">
          <Button variant="primary" disabled>Disabled</Button>
        </Section>
      </div>
    </main>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3>{label}</h3>
      {children}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    padding: "2rem",
    gap: "3rem",
    alignItems: "flex-start",
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
    minHeight: "100vh",
  },
  left: {
    flex: "0 0 200px",
    textAlign: "center",
  },
  logo: {
    width: "100px",
    marginBottom: "1rem",
  },
  right: {
    flex: 1,
    maxWidth: "600px",
  },
};

export default App;
