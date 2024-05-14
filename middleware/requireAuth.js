const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const { Authorization } = req.headers;

  if (!Authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = Authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).json({ error: "not id" });
    }

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
