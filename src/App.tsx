import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

function FragilePanel({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) throw new Error("Demo render error: the child deliberately failed.");
  return <div className="healthy"><span className="status-dot" /> Child component rendered successfully.</div>;
}

export default function App() {
  const [shouldThrow, setShouldThrow] = useState(false);
  const [boundaryKey, setBoundaryKey] = useState(0);
  const [eventMessage, setEventMessage] = useState("No event-handler error has been raised.");

  function demonstrateEventError() {
    try {
      throw new Error("Event handlers are not caught by error boundaries.");
    } catch (error) {
      setEventMessage(error instanceof Error ? error.message : "Unknown error");
    }
  }

  function reset() {
    setShouldThrow(false);
    setBoundaryKey(value => value + 1);
  }

  return <main className="shell">
    <header><p className="eyebrow">REACT RECOVERY STUDY</p><h1>Error Boundary Lab</h1><p>See which errors React boundaries catch, and how a failed subtree can recover.</p></header>
    <section className="panel">
      <h2>Render error boundary</h2>
      <div className="actions"><button onClick={() => setShouldThrow(true)}>Trigger render error</button><button className="secondary" onClick={reset}>Reset demo</button></div>
      <ErrorBoundary key={boundaryKey} onReset={reset}>
        <FragilePanel shouldThrow={shouldThrow}/>
      </ErrorBoundary>
    </section>
    <section className="panel">
      <h2>Event-handler contrast</h2>
      <p>Errors thrown in event handlers are not caught by error boundaries. Handle them at the event boundary.</p>
      <button className="secondary" onClick={demonstrateEventError}>Run caught event example</button>
      <output>{eventMessage}</output>
    </section>
    <footer>Tip: boundaries catch descendant render, lifecycle, and constructor errors, but not every asynchronous or event-handler failure.</footer>
  </main>;
}
