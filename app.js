import express from "express";
import colors from "colors";

const app = express();

const PORT = 3030;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let workouts = [];

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/summary", (req, res) => {
  const workout = {
    workoutType: req.body.workoutType,
    duration: req.body.duration,
    intensity: req.body.intensity,
    date: req.body.date,
    notes: req.body.notes,
  };
  workouts.push(workout);
  res.render("summary", { workouts });
});

app.listen(PORT, () => {
  console.log(PORT, `Server is running at http://localhost:${PORT}`.bgBlue);
});
