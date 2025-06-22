export const HandleValueChange = (e, InputValues , SetInputValues) => {
    SetInputValues({...InputValues , [e.target.name]: e.target.value })
    console.log("function triggered")
}

export const FileHandler = (e , InputValues , SetInputValues) => {
    SetInputValues({...InputValues , File:e.target.files?.[0]})
}

export const HandleSubmit = async (e , InputValues ) => {
    e.preventDefault()
    console.log("Form Submitted Successfully")
    console.log(InputValues)
}

