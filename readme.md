# TP1 - Automatisations

Un TP fait par : SANGARE Mamourou

II/ Husky: Gérer des Git Hook

1/Installer Husky en tant que dépendance de développement :
npm install husky --save-dev

2/Création d’un hook de test avec la commande init :
npx husky init
changemement: création d'un dossier .husky contenant le fichier precommit

3/ Tenter de faire un commit et indiquer ce que vous constatez.

4/Nous allons à présent éditer le fichier .husky/pre-commit , remplacer son contenu par:
echo "Je m'exécute avant un commit"

III/Changeset : Journal des changements

1/Installer Changesets en tant que dépendance de développement: npm install --save-dev @changesets/cli

2/Initialiser Changesets dans votre projet : npx changeset init
changements: création du répertoire changesets

3/Nous allons produire un changement. Pour cela, créer un fichier coucou.js

4/Créer un changeset pour ce changement : npx changeset add
changement: ajout du dossier .changeset

5/ Générer le changelog automatiquement : npx changeset version  
changement: création du fichier CHANGELOG.md

6/La commande suivante permet de vérifier la présence de changesets sur la branche master de notre projet: npx changeset status --since=master

7/Automatiser la vérification de la présence de changesets avant chaque commit: mettre la commande `npx changeset status` dans le dossier .husky/pre-commit

IV/ Prettier: La mise en forme

1/Editer le fichier coucou.js pour qu’il ressemble à ça (n’oublié pas de remplacer par votre nom la partie en orange) : fichier coucou.js

2/Créer un fichier .prettierrc.json pour configurer Prettier. Ajoutez-y les règles suivantes :

"printWidth": 80 → Limite la largeur des lignes à 80 caractères.
"tabWidth": 2 → Définit la largeur d’une tabulation à 2 espaces.
"useTabs": false → Utilise des espaces au lieu des tabulations.
"semi": true → Ajoute des points-virgules à la fin des lignes.
"singleQuote": true → Utilise des guillemets simples au lieu des doubles.
"trailingComma": "all" → Ajoute une virgule à la fin des objets et des tableaux pour éviter des erreurs lors des modifications.
"bracketSpacing": true → Ajoute un espace entre { et les propriétés d’un objet ({ key: value }).
"arrowParens": "always" → Ajoute toujours des parenthèses autour des paramètres des fonctions fléchées ((x) => {}).
"endOfLine": "crlf" → Utilise les fins de ligne CRLF (Windows).

3/Pour pouvoir exécuter Prettier dans notre projet, il faut rajouter la ligne suivante dans la partie scripts de notre fichier package.json : "format": "prettier --write ."

4/Exécuter Prettier pour formater le code: npm run format
changement: Prettier a analysé tous les fichiers du projet et appliqué les règles définies dans .prettierrc.json. 


5/Automatiser l’exécution de Prettier avant chaque commit:
mettre la commande npm run format dans le fichier pre-commit  


V/ ESLint : La cohérence

1/ Installer ESLint comme dépendance de développement :
npm install --save-dev eslint

2/Initialiser ESLint avec la commande :
npm init @eslint/config@latest

3/Tester le bon fonctionnement d’ESLint avec la commande: npx eslint --version 

4/Analyser le code avec ESLint avec la commande :    npx eslint 
résultat: pas de changement observé

5/Ajouter la ligne suivante au fichier coucou.js et relancer l'analyse: const jeSersARien = 42;
résultat: message d'erreur ('jeSersARien' is assigned a value but never used  @typescript-eslint/no-unused-vars
✖ 1 problem (1 error, 0 warnings))


6/Modifiez votre package.json pour y ajouter un script nommé lint qui exécutera la commande eslint


7/Ajoutez la règle no-alert qui devra déclenchera une erreur pour chaque appel de la fonction alert() puisque cette fonction n’est pas disponible dans un contexte serveur comme le nôtre. Tester le bon fonctionnement de votre règle en ajoutant une alert dans votre fichier coucou.js.


VI/

1/


2/

3/

4/

5/




