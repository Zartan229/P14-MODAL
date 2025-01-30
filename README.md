# Package npm : modalmaxoc

Un composant react, facile et rapide d'utilisation

## Installation

[Vous pouvez trouvez le package ici](https://www.npmjs.com/package/modalmaxoc)

```bash
 npm install modalmaxoc
```

## Usage

Pour utiliser le composant il suffit d'éffectuer ces deux imports !

```javascript
import Modal from "modalmaxoc";
import "modalmaxoc/dist/style.module.css";
```

Ensuite la création de la modal est très simple !

Un useState pour garder en tête la position ouverte ou fermer de la modal

```javascript
const [isOpen, setIsOpen] = useState(false);
```

Noubliez pas de placer

```javascript
setIsOpen(true);
```

Dans la logique de clique qui ouvre la modale

```javascript
close pour mettre la position a jour

  const close = () => {
    setIsOpen(false);
  };


<Modal
  isOpen={isOpen}
  onClose={close}
  modalContent="Employee Created!"
/>
```
