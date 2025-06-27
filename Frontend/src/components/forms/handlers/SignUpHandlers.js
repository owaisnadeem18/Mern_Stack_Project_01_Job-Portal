export const HandleSubmitSignUp = (e , SignUpValues , setSignUpValues) => {
    e.preventDefault()  
    setSignUpValues({...SignUpValues , [e.target.name]:e.target.value})    
    console.log("The Full name is => ", SignUpValues.fullName)
    console.log("The Email is => ", SignUpValues.email)
    console.log("The PhoneNumber is => ", SignUpValues.phoneNumber)
    console.log("The Password is => ", SignUpValues.password)
    console.log("The file is => ", SignUpValues.file)
    console.log("The Role is => ", SignUpValues.role)
}