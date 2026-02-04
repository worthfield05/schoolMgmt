export const setToken = (statusCode, user, res) => {
  const token = user.setJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.EXPIRE_COOKIE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  const userObj = user.toObject();
  delete userObj.password
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    data:userObj,
    token,
  });
};