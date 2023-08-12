import { ReactElement } from 'react';

interface ErrorProps {
  children: React.ReactNode;
}

export default function Error({ children }: ErrorProps): ReactElement {
  return <div>{children}</div>;
}
