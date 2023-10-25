const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Mukarrom hosain");
});

const users = [
  {
    id: 1,
    first_name: "Dalli",
    last_name: "Cattrell",
    email: "dcattrell0@pagesperso-orange.fr",
    gender: "Male",
    ip_address: "213.205.213.41",
  },
  {
    id: 2,
    first_name: "Basile",
    last_name: "Lamasna",
    email: "blamasna1@scribd.com",
    gender: "Male",
    ip_address: "213.202.108.139",
  },
  {
    id: 3,
    first_name: "Ari",
    last_name: "Tolliday",
    email: "atolliday2@statcounter.com",
    gender: "Male",
    ip_address: "237.223.220.231",
  },
  {
    id: 4,
    first_name: "Nils",
    last_name: "Leitche",
    email: "nleitche3@china.com.cn",
    gender: "Male",
    ip_address: "45.127.167.240",
  },
  {
    id: 5,
    first_name: "Olive",
    last_name: "Errett",
    email: "oerrett4@vistaprint.com",
    gender: "Female",
    ip_address: "69.25.227.154",
  },
  {
    id: 6,
    first_name: "Vida",
    last_name: "Bannerman",
    email: "vbannerman5@webs.com",
    gender: "Female",
    ip_address: "180.27.195.60",
  },
  {
    id: 7,
    first_name: "Rachael",
    last_name: "Storm",
    email: "rstorm6@examiner.com",
    gender: "Female",
    ip_address: "41.125.64.166",
  },
];

app.get("/users", (req, res) => {
  if (req.query.email) {
    const search = req.query.email.toLowerCase();
    const matched = users.filter((user) =>
      user.email.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = user.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
