# Rock Paper Scissors

Ce depot contient un jeu "Rock Paper Scissors" realise en HTML, CSS et JavaScript vanilla. Le joueur choisit rock, paper ou scissors, l'ordinateur choisit aleatoirement, puis le score est mis a jour jusqu'a ce qu'un gagnant atteigne 5 points.

## Probleme resolu

Ce projet est un exercice pratique pour apprendre la logique JavaScript cote navigateur : selection d'elements du DOM, ecoute d'evenements, conditions, generation aleatoire, mise a jour dynamique de l'interface et gestion d'un score.

## Fonctionnalites

- Trois boutons pour choisir rock, paper ou scissors.
- Choix aleatoire de l'ordinateur a chaque manche.
- Affichage du choix du joueur et du choix de l'ordinateur.
- Affichage du resultat de chaque manche.
- Score humain et ordinateur.
- Detection du gagnant quand l'un des deux atteint 5 points.
- Remise a zero automatique du score apres la victoire finale.

## Regles du jeu

- Rock bat scissors.
- Scissors bat paper.
- Paper bat rock.
- Si les deux choix sont identiques, la manche est une egalite.

## Stack technique

- HTML5
- CSS3
- JavaScript vanilla

## Structure du projet

```txt
rock-papers-scissors/
|-- index.html   # Structure du jeu
|-- style.css    # Mise en forme
`-- script.js    # Logique du jeu
```

## Lancement local

Aucune installation n'est necessaire.

1. Cloner le depot :

```sh
git clone https://github.com/libsss01/rock-papers-scissors.git
```

2. Ouvrir `index.html` dans un navigateur.

## Logique JavaScript

Le fichier `script.js` :

- recupere les boutons du joueur ;
- ajoute un listener sur chaque bouton ;
- convertit le bouton clique en choix humain ;
- genere le choix ordinateur avec `Math.random()` ;
- compare les deux choix ;
- incremente le score correspondant ;
- affiche le gagnant final a 5 points.

## Pistes d'amelioration

- Ajouter un bouton "Reset".
- Corriger les petites fautes de texte comme "Loose" en "Lose".
- Ajouter une animation apres chaque manche.
- Afficher un historique des manches.
- Ajouter un mode meilleur des 3 ou meilleur des 5.
- Ameliorer le responsive mobile.

## Auteur

Mame Libasse Laye Sylla
