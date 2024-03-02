import { InputContainer, InputComponent, InputLabel } from "./styles";
import { InputProps } from "./types";

function Input({ 
  id, 
  disabled = false,
  name, 
  placeholder, 
  label,
  value,
  onChange,
   type="text" }
  :InputProps) {
  return (
    <InputContainer>
      <InputLabel htmlFor={id} >
        {label}
      </InputLabel>
      <InputComponent
       value={value}
       onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      />
    </InputContainer>
  );
}

export default Input;