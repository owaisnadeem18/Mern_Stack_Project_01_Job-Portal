export const HandleSubmitLogin = (e , LoginValues , SetLoginValues) => {
    e.preventDefault()
    SetLoginValues({...LoginValues , [e.target.name] : e.target.value })
    console.log("Values For Name is => ", LoginValues.email)
    console.log("Values For Pasword is =>" , LoginValues.password)
    console.log("Values For Role is is => ", LoginValues.role)
}

 