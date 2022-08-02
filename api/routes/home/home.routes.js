import express from 'express';


const router = express.Router();

router.get('/mango', (req, res) => {
    console.log('Y0u have reached the home page');
})

export default router;