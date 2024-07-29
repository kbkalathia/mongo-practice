export const Success = (res, data = {}, message = "Success") => {
  return res.status(200).json({ status: 200, message, data });
};

export const Created = (res, data = {}, message = "Created") => {
  return res.status(201).json({ status: 201, message, data });
};

export const ServerFailure = (res, message = "Server Error") => {
  return res.status(500).json({ status: 500, message });
};
