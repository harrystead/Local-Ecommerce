import { ReactElement } from 'react';
import Navbar from 'components/navbar/navbar';
import CardDisplay from 'pages/cardDisplay/cardDisplay';
import Home from 'pages/home/home';
import NotFound from 'pages/notFound/notFound';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient({});

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productNo" element={<CardDisplay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
