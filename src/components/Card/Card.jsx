export const Card = ({ breed, src, alt }) => {
  return (
    <>
      <h1>{breed}</h1>
      <img src={src} alt={alt} />
    </>
  );
};
