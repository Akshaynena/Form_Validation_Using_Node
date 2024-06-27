const User = require("../models/user");

const createUserController = async (req, res) => {
    const { name, email, jobtitle, religion, income, address, mobilenumber, } = req.body;

    if (!name || !email || !jobtitle || !religion || !income || !address || !mobilenumber) {
        return res.status(200).send({
            success: false,
            message: "Some fields are empty."
        });
    }
    else if (mobilenumber.length !== 10) {
        return res.status(200).send({
            success: false,
            message: "PhoneNumber is not correct."
        });
    }
    try {

        const user = await new User({
            name, email, jobtitle, religion, income, address, mobilenumber

        });
        await user.save();

        res.status(200).send({
            success: true,
            message: "Successfully Added."
        });

    }
    catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        });
    };

}



const editUserController = async (req, res) => {

    const { id } = req.params;
    const { name, email, jobtitle, religion, income, address, mobilenumber } = req.body;

    if (!name || !email || !jobtitle || !religion || !income || !address || !mobilenumber) {
        return res.status(200).send({
            success: false,
            message: "Some fields are empty."
        });
    }
    try {

        const user = await User.findByIdAndUpdate(id, { name, email, jobtitle, religion, income, address, mobilenumber }, { new: true });
        await user.save();

        res.status(200).send({
            success: true,
            message: "Successfully Edited."
        });

    }
    catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        });
    }
    
    }
   






const removeUserController = async (req, res) => {

    const { id } = req.params;

    try {

        await User.findByIdAndDelete(id);

        res.status(200).send({
            success: true,
            message: "Successfully Deleted."
        });
    }
    catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        });
    }

};

const getUsersController = async (req, res) => {

    try {
        const users = await User.find({});

        // res.status(200).send({
        //     success: true,
        //     message: "Successfully Deleted.",
        //     users
        // });
        const html = `${users.map((data) => `<h2>${data.name}</h2>`).join("")}`;
        res.send(html);
    }
    catch (error) {
        res.status(501).send({
            success: false,
            message: error.message
        });
    }

};

module.exports = {
    createUserController,
    editUserController,
    removeUserController,
    getUsersController
}