const mailConfig = require("../middleware/config")

const index = async (req,res) => {
    try {
        res.json({ msg: "Welcome to email api"})
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


const sendMail = async (req,res) => {
    try {
        const { to, subject, content } = req.body

        const response = await mailConfig(to,subject,content);

        return res.status(200).json({ msg: "mail sent successfully", response })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const notFound = async (req,res) => {
    try {
        return res.status(404).json({ msg: "Requested path not Found"})
    } catch (err) {
        return res.status(500).json({ msg: err.message})
    }
}

module.exports = { sendMail, notFound,index }