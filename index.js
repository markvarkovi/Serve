import express from "express"; //importing express module
const app = express(); //variable for usinge express

// app.get('/users/:userId', (req, res) => {
//     res.send(`The user id is: ${req.params.userId}`);
//   });

app.get("/math/:op", (req, res) => { //math is the route, :op is a placeholder for operation name
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  const { op } = req.params;

  const result =
    op === "add"
      ? x + y
      : op === "subtract"
      ? x - y
      : op === "multiply"
      ? x * y
      : op === "divide"
      ? x / y
      : false;

const resultObject = {
    numbers: {
        x: x,
        y: y
    },
    operation: op,
    result: result ? result : `Unrecognizable operation name`
}
 
      res.send(resultObject)
});

app.listen(3000, () => {
  //first arguement listens for a port, second is a callback function that logs if the srv is running
  console.log("Open this link in your browser http://127.0.0.1:3000");
});
