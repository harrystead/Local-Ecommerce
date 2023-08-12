import { ReactElement } from 'react';

export default function NotFound(): ReactElement {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
    </div>
  );
}
