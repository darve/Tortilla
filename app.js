
/**
 * Basic static file server
 */
var path     = require('path'),
    express  = require('express'),
    app      = express();

app.use(express.bodyParser());
app.use("/", express.compress());
app.use("/", express.static(path.resolve(__dirname, "app")));
app.use("/", function(req, res, next) {
  res.send(404);
});

app.use(express.logger()); // Log requests to the console
app.all('/', function(req, res) {
  res.sendfile('index.html', { root: "app" });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server listening on port ' + port);
