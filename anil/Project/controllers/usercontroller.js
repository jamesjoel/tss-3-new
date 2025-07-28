import user from '../models/user.js';

let SaveUser = async (req, res) => {
    await user.create(req.body);
    res.send({ message: "Data Saved" });
}

let GetAllUser = async (req, res) => {
    let result = await user.find();
    res.send(result);
}

let GetUserById = async (req, res) => {
    console.log(req.query.name, req.query.email);
    let result = await user.find({ name: req.query.name, email: req.query.email });
    console.log(result);
    res.send(result);
}

export { SaveUser, GetAllUser, GetUserById }