"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="py-20 text-center px-6">
            <p className="text-[#F5E6CA]/40 text-sm font-cormorant">
              Something went wrong loading this section.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
