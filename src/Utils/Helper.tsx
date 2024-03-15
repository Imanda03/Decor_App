export const validateEMail = (email: string) => {
    if(email.length == 0 ){
        return false
    }
    return true
}