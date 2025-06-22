import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const InputGroup = ({
  label,
  name,
  type,
  placeholder,
  valueInput,
  onChangeFunction,
}) => {
  return (
    <div className="flex flex-col">
      <Label className={"mb-2 px-1.5"} htmlFor={name}>
        {label}
      </Label>
      <Input
        value={valueInput}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChangeFunction}
      />
    </div>
  );
};

export default InputGroup;
