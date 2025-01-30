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

# Style

Vous pouvez biensur changer le design selon ce qu'il vous plait

Créer un fichier .css

Et ajoutez les classes suivante !

```css
._blocker_1qs5p_1 {
    background-color: rgba(0, 0, 0, 0.6) !important; 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  ._modal_1qs5p_45 {
    background-color: white !important;
    border-radius: 8px !important;
    z-index: 10000; 
  }
  
  ._closeModal_1qs5p_97 {
    color: #ff0000 !important; 
    font-size: 16px !important; 
    cursor: pointer;
    text-decoration: underline;
  }
  
  ._closeModal_1qs5p_97:hover {
    color: #d40000 !important;
    text-decoration: none; 
  }
  
  ._modal_1qs5p_45 ._closeModal_1qs5p_97 {
    color: green !important; 
    font-size: 18px !important; 
    font-weight: bold; 
  }

```

Ainsi vous pouvez utilitsez ces classes pour surcharger les classes existante et changer le style !