const router = require('express').Router();


// api health check. its need for every server
router.get('/health', (_req, res) => {
    // throw new Error('Error');
    res.status(200).json({ message: "Success" })
})

module.exports = router;