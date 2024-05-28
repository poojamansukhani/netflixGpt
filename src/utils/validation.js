export const validate = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{4,}$/.test(password);
    //const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
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