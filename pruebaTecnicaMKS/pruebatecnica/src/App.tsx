import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';


import General from './components/General';


const queryClient = new QueryClient();


const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <General/>
    </QueryClientProvider>
  );
};

export default App;