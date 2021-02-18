let viewEngine = "";

function setViewEngine(engine = "ejs") {
    return (viewEngine = engine);
}

module.exports = {
    viewEngine,
    setViewEngine,
};
