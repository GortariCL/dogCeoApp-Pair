import { BreedList } from "./components/BreedList/BreedList";

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

  return (
    <div>
      <BreedList data={data} />
    </div>
  );
}

export default App;
