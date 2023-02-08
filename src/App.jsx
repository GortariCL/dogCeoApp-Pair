import { BreedList } from "./components/BreedList/BreedList";
import { Form } from "./components/Form/Form";

function App() {
  const data = [
    {
      title: "Breed 1",
      src: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
      alt: "Breed 1",
    },
    {
      title: "Breed 2",
      src: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
      alt: "Breed 2",
    },
    {
      title: "Breed 3",
      src: "https://images.dog.ceo/breeds/affenpinscher/n02110627_10047.jpg",
      alt: "Breed 3",
    },
  ];

  const mockOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  return (
    <div className="app">
      <Form options={mockOptions} />
    </div>
  );
}

export default App;
