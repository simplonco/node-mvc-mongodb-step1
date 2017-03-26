<img src="readme/img/simplon.jpg" width="400">

----------------------

# ARCHITECTURE MVC
Découper les différentes étapes d'une architecture MVC avec node et mongo

Ce chapitre s'inscrit dans le module [Diagramme UML](https://github.com/simplonco/Diagrammes-UML).

1. [x] [Diagramme Use-Case](https://github.com/simplonco/node-mvc-mongodb-step1)
	
2. [ ] [Diagramme de Séquence](https://github.com/simplonco/node-mvc-mongodb-step2)
	
3. [ ] [Diagramme d'Intéraction](https://github.com/simplonco/node-mvc-mongodb-step3)

Vous pouvez trouver ce module dans les parcours suivants :

+ Développeur Web Fullstack

------------
MVC, qu’est-ce que c’est ?

Le design pattern Model-View-Controller est une façon d’organiser son code.

Pour gagner en :
	+ lisibilité
	+ sécurité
	+ scalabilité

Mais concrètement, c’est quoi une view, un model, un controller ?

Voyons ça en prenant en nous aidant de l’exemple d’un restaurant.

Imaginons que je commande un plat, je vais request ce plat (url) à mon serveur.
Le serveur pourra alors envoyer (router) cette commande à un cuisinier (controller).
```express.get(’users’, userController);```
Il va utiliser la recette (méthode) correspondante au plat (url).
```express.get(’users’, userController.find);```
Le cuisinier pourra utiliser des ingrédients (data) fournit par un grossiste (db engine) pour répondre à cette commande.
```db.users.find(...).then(...)```
Et le serveur pourra renvoyer le plat au client (view);
```res.send(...)```

On va donc commencer par bien séparer les différents espaces ( salle, cuisine, et grossiste ) pour mieux organiser notre code.
Et laisser ne pas enfermer notre server et son menu (route) dans un des espaces afin qu’il puisse accéder librement à tous.
On a donc notre dossier public, api et database et server.js et routes.js à l’extérieur. 


Mais comment exactement s’éxecute le traitement de cette requête ?
