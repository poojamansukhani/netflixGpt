export const validate = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if(!isEmailValid){
        return "Email id is not valid";
    }
    if(!isPasswordValid){
        return "Password is not valid";
    }
    return null;
}