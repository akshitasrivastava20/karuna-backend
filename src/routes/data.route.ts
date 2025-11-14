import express from 'express';
import { getAllDocs, getAllHospitals, getDocsBySpec, searchDocsByName, searchHospitalsByName } from './data.controller';

const router = express.Router();

// Route to fetch all doctors
router.get('/docs', getAllDocs as express.RequestHandler);

// Route to fetch all hospitals
router.get('/hospitals', getAllHospitals as express.RequestHandler);

// Route to search doctors by name
router.post('/docs', searchDocsByName as express.RequestHandler);

router.post('/search', getDocsBySpec as express.RequestHandler);

// Route to search hospitals by name
router.post('/hospitals', searchHospitalsByName as express.RequestHandler);

export default router;
