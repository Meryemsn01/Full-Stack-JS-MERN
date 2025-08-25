
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Configuration du middleware de session
// Un secret fort est crucial pour la sécurité des sessions
const SESSION_SECRET = 'votre_secret_fort_pour_session';
app.use(session({
  secret: SESSION_SECRET,
  resave: false, // Évite de sauvegarder la session si elle n'a pas été modifiée
  saveUninitialized: false, // Évite de créer une session pour les utilisateurs non authentifiés
  cookie: { 
    secure: false, // À mettre sur true en production avec HTTPS
    httpOnly: true, // Le cookie n'est accessible que par le serveur
    maxAge: 1000 * 60 * 60 // 1 heure de validité
  }
}));

// Base de données simulée en mémoire pour les utilisateurs
const users = [];

// Route d'enregistrement
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Vérifie si l'utilisateur existe déjà
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'Le nom d\'utilisateur existe déjà.' });
  }

  try {
    // Hache le mot de passe avant de le stocker pour des raisons de sécurité
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    
    res.status(201).json({ message: 'Enregistrement réussi.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement.' });
  }
});

// Route de connexion
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Trouve l'utilisateur
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Identifiants invalides.' });
  }

  try {
    // Compare le mot de passe entré avec le mot de passe haché
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Si les mots de passe correspondent, crée une session
      req.session.user = { username: user.username };
      res.json({ message: 'Connexion réussie.', user: req.session.user });
    } else {
      res.status(401).json({ message: 'Identifiants invalides.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
});

// Middleware pour protéger les routes
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    // L'utilisateur est authentifié, continue vers la route protégée
    next();
  } else {
    // L'utilisateur n'est pas authentifié, refuse l'accès
    res.status(401).json({ message: 'Accès non autorisé. Veuillez vous connecter.' });
  }
}

// Route protégée
app.get('/protected', isAuthenticated, (req, res) => {
  res.json({ 
    message: `Bienvenue, ${req.session.user.username}! C'est une route protégée.`,
    user: req.session.user
  });
});

// Route de déconnexion
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la déconnexion.' });
    }
    res.clearCookie('connect.sid'); // Nom du cookie de session par défaut
    res.json({ message: 'Déconnexion réussie.' });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server en cours d'exécution sur le port ${PORT}`);
});
