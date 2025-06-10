// deno-lint-ignore-file no-explicit-any jsx-button-has-type
import { Component, ComponentChildren } from "preact";

interface ErrorBoundaryProps {
  children: ComponentChildren;
  fallback?: ComponentChildren | ((error: Error) => ComponentChildren);
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary
  extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static override getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      const { fallback } = this.props;

      if (typeof fallback === "function" && this.state.error) {
        return fallback(this.state.error);
      }

      if (fallback) {
        return fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
          <h2 className="text-2xl font-bold text-tertiary-dark mb-4">
            Something went wrong
          </h2>
          <p className="text-base-foreground mb-6">
            We're sorry, but an error occurred while rendering this component.
          </p>
          <button
            className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded transition-colors"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
