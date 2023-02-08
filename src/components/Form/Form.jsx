export const Form = ({ handler, options }) => {
  return (
    <form onSubmit={handler}>
      <input type="text" />
      <select name="" id="">
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <button>Buscar</button>
    </form>
  );
};
