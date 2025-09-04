import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="text-center p-8 max-w-md">
      <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-slate-300 mb-6 break-words">{error.message}</p>
      <Button onClick={resetErrorBoundary} variant="outline">
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </Button>
    </div>
  </div>
);

export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ReactErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, errorInfo) => {
      console.error('Error caught by boundary:', error, errorInfo);
    }}
  >
    {children}
  </ReactErrorBoundary>
);