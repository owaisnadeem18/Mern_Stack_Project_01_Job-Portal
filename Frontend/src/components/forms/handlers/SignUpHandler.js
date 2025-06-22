// Function # 01 in order to handle changes in form values:

export const HandleValueChange = (e, InputValues, SetInputValues) => {
  //   const { name, value } = e.target;
  SetInputValues({ ...InputValues, [e.target.name]: e.target.value });
};
