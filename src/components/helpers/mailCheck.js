
const mailCheck = ({email}) => {
    const emailErr = {};
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
        emailErr.msg = "Given email is incorrect!!";
    }
    return emailErr;
}

export default mailCheck;