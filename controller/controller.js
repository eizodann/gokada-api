const axios = require("axios");

exports.estimateFare = (req, res, next) => {
  //   console.log("req.body :>> ", req.body);
  const data = JSON.stringify(req.body);

  const config = {
    method: "post",
    url: "https://api.gokada.ng/api/developer/order_estimate",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).json({ sucess: true, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ sucess: false, error });
    });
};

exports.createOrder = (req, res, next) => {
  //   console.log("req.body :>> ", req.body);
  const data = JSON.stringify(req.body);

  var config = {
    method: "post",
    url:
      "https://private-anon-5bf39fe3ca-gokada2.apiary-proxy.com/api/developer/order_create",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).json({ sucess: true, data: response.data });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ sucess: false, error: error.response.data });
    });
};
