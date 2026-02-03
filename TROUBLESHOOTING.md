# Guide de dépannage - Portfolio

## Si rien ne s'affiche

### 1. Vérifier que les dépendances sont installées
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Vous devriez voir :
```
✓ Ready in Xs
○ Local: http://localhost:3000
```

### 3. Ouvrir le navigateur
Allez sur : http://localhost:3000

### 4. Vérifier les erreurs

**Dans le terminal :**
- Regardez s'il y a des erreurs de compilation
- Les erreurs commencent généralement par `Error:` ou `×`

**Dans le navigateur (F12) :**
- Ouvrez les outils de développement (F12)
- Allez dans l'onglet "Console"
- Regardez s'il y a des erreurs JavaScript

### 5. Nettoyer le cache
```bash
# Supprimer le dossier .next
rm -rf .next

# Relancer le serveur
npm run dev
```

### 6. Vérifier les fichiers essentiels
Assurez-vous que ces fichiers existent :
- ✅ `app/page.tsx`
- ✅ `app/layout.tsx`
- ✅ `app/globals.css`
- ✅ `components/Header.tsx`
- ✅ `components/Footer.tsx`
- ✅ `components/ThemeProvider.tsx`
- ✅ `data/projects.ts`

### 7. Vérifier la version de Node.js
```bash
node --version
```
Doit être >= 18.0.0

### 8. Réinstaller les dépendances
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Erreurs courantes

### "Module not found"
→ Exécutez `npm install`

### "Port 3000 already in use"
→ Arrêtez l'autre processus ou changez le port :
```bash
npm run dev -- -p 3001
```

### Page blanche
→ Vérifiez la console du navigateur (F12) pour les erreurs JavaScript
