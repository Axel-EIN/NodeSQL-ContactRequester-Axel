import express from 'express';
import cors from 'cors';
import contactRoutes from './src/routes/contact.route.js';

const BACK_PORT = 8080;

// Configuration de la BDD
import './src/models/index.js';

// Création serveur nodeJs / Express
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/contact', contactRoutes);

const PORT = BACK_PORT || 8080;

app.listen(PORT, () => {
    console.log(`API ouverte à l'URL http://localhost:${PORT}`);
})