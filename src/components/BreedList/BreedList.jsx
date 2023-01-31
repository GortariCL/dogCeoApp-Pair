import { Card } from "../Card/Card";

export const BreedList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((breed, index) => {
          return (
            <Card
              breed={breed.title}
              key={index}
              alt={breed.alt}
              src={breed.src}
            />
          );
        })}
    </>
  );
};
