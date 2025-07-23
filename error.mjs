const errorController = (err, req, res, next) => {
  if (err.isManual) {
    res.statusCode = err.statusCode;
    res.json({ error: err.message });
  } else {
    console.log(err);
    res.statusCode = 500;
    res.json({ error: "something is not ok" });
  }
};

const undefinedRouteHandler = (req, res) => {
  res.json({ message: "wrong route" });
};

class serverError extends Error {
  constructor(stsusCode, errorMessage) {
    super(errorMessage);
    this.statusCode = stsusCode;
    this.isManual = true;
  }
}

export { errorController, undefinedRouteHandler, serverError };
