const cors = require("cors");
const express = require("express");
const path = require('path');
const mysql =  require("mysql2")
const { promisePool }  = require("./PromisePool.js");
const PORT = 8080;
const app = express();
const corsOptions = {
    origin: ["http:// localhost:3000"], 
    optionSuccessStatus:200,
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//In server.js use the express.static() middleware to serve static assets from the public folder.
app.use(express.static(path.join(__dirname, '../public')));

//serve one asset from the public folder
// app.get('/', cors(corsOptions), async (req, res)=> {
//     const ABSOLUTE_PATH = path.join(__dirname, '../public/index.html');
//     res.sendFile(ABSOLUTE_PATH);
// });


//GET with params: given the endpoint: '/users/:id', 
//retrieve user data from the database and send to client
app.get("/users/:id", cors(corsOptions), async(req, res) => {
const userID = req.params.id;
const [ userWithID ] = await promisePool.query(
    "SELECT * FROM users WHERE id = ? ", userID);
res.send(userWithID);
});

//GET with query: given the endpoint: '/users/?name={Michael Johnson}&age={41}',
//retrieve user data from the database and send to client
app.get('/users/', cors(corsOptions), async(req, res)=>{
    const usersName = req.query.name;
    const age = req.query.age;
    const usersAge = parseInt(age)
    const [ usersInformation ] = await promisePool.query(
        "Select * FROM users WHERE name = ? AND age = ? ", [usersName , age]);
        res.send(usersInformation);
})

//POST with body: endpoint: '/users', create a new user based on the following properties passed in through req.body.
// {name: Billy Bob, age: 28, followers: 1000, verified: false, country: Germany}
app.post('/users', cors(corsOptions), async (req, res) =>{ 
    const newUserInfo = req.body;
    const [ newUserInfoAdded ] = await promisePool.execute(
        "INSERT INTO users (name, age, followers, verified, country) VALUES(?, ?, ?, ?, ?)",
        [newUserInfo.name, newUserInfo.age, newUserInfo.followers, newUserInfo.verified, newUserInfo.country]);
    newUserInfoAdded ? res.send(newUserInfoAdded): res.status(404).send({ message: "Not found" });
//     const  newUsersIDJustAdded = newUserInfoAdded.insertId;
//     console.log(newUsersIDJustAdded)
//     const [ newUsersInfoJustAdded ] = await promisePool.query("SELECT * FROM users WHERE id = ?", newUsersIDJustAdded);
//     res.send( newUsersInfoJustAdded[0] );
 });

//PUT with params: endpoint: '/users/:id', id = 6 update user based on id from params.
app.put('/users/:id', cors(corsOptions), async(req, res) => {
    usersID = req.params.id
    const [ updatedUserStatus ] = await promisePool.execute(
        "UPDATE users SET followers = ? WHERE id = ? ", [600, usersID]);
        res.send( updatedUserStatus);
})

//DELETE with params: endpoint: '/users/:id', id = 10 delete user based on id from params.
app.delete('/users/:id', cors(corsOptions), async (req, res) => {  
    const usersID2Delete = req.params.id;
    console.log(usersID2Delete);
    const [ usersID2DeleteStatus ] = await promisePool.execute(
        "DELETE FROM users WHERE id = ?", [ usersID2Delete ]);
    res.send(usersID2DeleteStatus);
})
app.listen(PORT, () => {
    console.log(`Express web api running on port: ${PORT}.`)
});