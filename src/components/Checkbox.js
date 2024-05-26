const Checkbox = (prop) => {
  return (
    <div>
      <input type="checkbox" onChange={prop.onChange} checked={prop.state} />
      <label>{prop.title}</label>
    </div>
  );
};

export default Checkbox;
