const passwordCheck = ({password}) => {
    const passwordErr = {};
    if (password.length < 6) {
        passwordErr.msg = "Password is incorrect, it should have at least 6 characters!";
    }
    return passwordErr;
}

export default passwordCheck;