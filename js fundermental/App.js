import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <Header />
      <Profile name="John Doe" email="john@example.com" />
      <Counter />
    </div>
  );
}

export default App;
