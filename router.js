const express = require("express");
const router = express.Router();
const moduleaaa = require("./module")

router.post("/sdkHelper", (req, res) => {
    try {
        moduleaaa.ahoyo((err, result) => {
            if (err) return res.json({ok: 1})
            return res.json({ok: 0, result})
        })
    } catch (error) {
        console.log("catch error! ", error)
        res.status(500)
        return res.json({ok: 0, error: error.toString()})
    }
})

module.exports = router;