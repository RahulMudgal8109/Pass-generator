
const Button = (props) => {
  console.log(props);
  return (
    
    <button className={props.customClass} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
