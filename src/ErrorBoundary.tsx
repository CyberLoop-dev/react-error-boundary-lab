import React, { type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode; onReset: () => void };
type State = { error: Error | null };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, _info: ErrorInfo) {
    console.error("Error boundary caught a render error:", error.message);
  }

  render() {
    if (this.state.error) {
      return (
        <section className="fallback" role="alert">
          <p className="eyebrow">BOUNDARY FALLBACK</p>
          <h2>The child view failed to render.</h2>
          <code>{this.state.error.message}</code>
          <button onClick={this.props.onReset}>Reset boundary</button>
        </section>
      );
    }
    return this.props.children;
  }
}
