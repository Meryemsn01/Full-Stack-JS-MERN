// index.js

const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Clé secrète directement dans le code. À ÉVITER en production !
const JWT_SECRET = 'VotreSecretTresFortEtUnique12345'; 

// Middleware de sanitisation et de validation
const loginValidation = [
  body('username')
    .isString().withMessage('Le nom d\'utilisateur doit être une chaîne de caractères.')
    .trim() 
    .escape(),
  body('password')
    .isString().withMessage('Le mot de passe doit être une chaîne de caractères.')
    .trim()
    .escape(),
];

// Endpoint de connexion
app.post('/login', loginValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      message: 'Erreurs de validation',
      errors: errors.array()
    });
  }

  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin123') {
    const payload = {
      username: username,
      role: 'admin',
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.json({
      success: true,
      message: 'Authentification réussie',
      token: token
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Identifiants incorrects'
    });
  }
});

// Middleware pour vérifier le token
function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

// Endpoint protégé
app.get('/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Accès autorisé à la route protégée.',
        authData: authData
      });
    }
  });
});

// Middleware de gestion des erreurs général
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Une erreur interne du serveur est survenue.'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});