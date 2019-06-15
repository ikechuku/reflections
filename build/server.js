"use strict";

var _express = _interopRequireDefault(require("express"));

var _Reflection = _interopRequireDefault(require("./src/controllers/Reflection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'YAY! Congratulations! Your first endpoint is working'
  });
});
app.post('/api/v1/reflections', _Reflection["default"].create);
app.get('/api/v1/reflections', _Reflection["default"].getAll);
app.get('/api/v1/reflections/:id', _Reflection["default"].getOne);
app.put('/api/v1/reflections/:id', _Reflection["default"].update);
app["delete"]('/api/v1/reflections/:id', _Reflection["default"]["delete"]);
app.listen(3000);
console.log('app running on port ', 3000);