# Package npm : modalmaxoc

    [npm install modalmaxoc](https://www.npmjs.com/package/modalmaxoc)

Pour utiliser le composant il suffit d'éffectuer ces deux imports !

import Modal from "modalmaxoc";
import 'modalmaxoc/dist/style.module.css';

Ensuite la création de la modal est très simple !

Un useState pour garder en tête la position ouverte ou fermer de la modal


  const [isOpen, setIsOpen] = useState(false);

  Noubliez pas de placer

    setIsOpen(true);
  
  Dans la logique de clique qui ouvre la modale



close pour mettre la position a jour

  const close = () => {
    setIsOpen(false);
  };


<Modal
  isOpen={isOpen}
  onClose={close}
  modalContent="Employee Created!"
/>