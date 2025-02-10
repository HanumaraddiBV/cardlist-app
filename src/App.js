
import './App.css';
import CardList from './pages/CardList';

function App() {
  return (
    <div className="bg-gradient-to-tr from-[#C9D6FF] to-[#E2E2E2] flex flex-col items-center  min-h-screen bg-gray-100 top-1">
      <h1 className="text-3xl font-bold mb-5 mt-2">Cards List</h1>
      <CardList />
    </div>
  );
}

export default App;
