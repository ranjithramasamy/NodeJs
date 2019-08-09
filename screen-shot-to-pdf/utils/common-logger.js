const logInfo = (className, message) => {
    console.log(className + " :: " + message);
}

module.exports = {
    info: logInfo
};