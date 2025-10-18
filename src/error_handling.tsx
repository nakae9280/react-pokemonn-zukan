import React from 'react';

type ErrorHandlingProps = {
  isLoading?: boolean;
  error?: unknown;
  children?: React.ReactNode;
};

const ErrorHandling: React.FC<ErrorHandlingProps> = ({ isLoading, error, children }) => {
  if (isLoading) return <div>読み込み中...</div>;
  if (error instanceof Error) return <div>エラー: {error.message}</div>;
  return <>{children}</>;
};

export default ErrorHandling;

