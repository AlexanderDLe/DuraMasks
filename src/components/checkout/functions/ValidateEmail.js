export default (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};
