export const HandleValueChange = (e, InputValues, SetInputValues) => {
  SetInputValues({ ...InputValues, [e.target.name]: e.target.value });
};

export const FileHandler = (e, InputValues, SetInputValues) => {
  SetInputValues({ ...InputValues, file: e.target.files?.[0] });
};