const CORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
  res.header(
    "access-control-allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  return next();
};

module.exports = CORS;
