const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
app.use(cors());
app.use(express.json());
// Récupérer les utilisateurs
app.get("/", (req, res) => {
db.query("SELECT * FROM users", (err, results) => {
if (err) {
res.status(500).send("Erreur avec la base de données");
return;
}
res.json(results);
});
});
// Ajouter un utilisateur
app.post("/add-user", (req, res) => {
const { name, email } = req.body;
db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email],
(err) => {
if (err) {
res.status(500).send("Erreur lors de l'insertion");
return;
}
res.send({ message: "Utilisateur ajouté !" });
});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Backend running on port ${PORT}`);
});
