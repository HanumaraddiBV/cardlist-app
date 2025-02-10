
import './App.css';
import CardList from './pages/CardList';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">Card List</h1>
      <CardList />
    </div>
  );
}

export default App;
