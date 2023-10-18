export const validate = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    const isNameValid = /[a-zA-Z]+\\.?/.test(name);
    // if(!isNameValid){
    //     return "Name is not valid";
    // }
    if(!isEmailValid){
        return "Email id is not valid";
    }
    if(!isPasswordValid){
        return "Password is not valid";
    }
    return null;
}