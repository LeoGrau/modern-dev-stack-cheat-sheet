import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from docker!")
})

const staticData = {
  name: "Johan",
  age: "22",
  email: "johan@gmail.com"
}

app.get("/data", (req, res) => {
  res.json(staticData)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`🟢 Servidor corriendo en http://localhost:${PORT}`);
});

console.log(app)