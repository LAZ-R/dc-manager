const googleDocIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/18/Google_Docs_icon_%282026%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original';
const folderIconUrl = 'https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/folder-icon.png';
const successIconUrl = 'https://cdn-icons-png.flaticon.com/512/16853/16853146.png';

export const MAIN_FOLDER_LINK = {
  id: 'main_folder',
  label: 'Dossier drive',
  desc: 'Le dossier général du projet dans le drive (où vivent toutes les ressources ci-après)',
  url: 'https://drive.google.com/drive/folders/1xE_drHk_MgfX525bV3cB1viUlc7FHhcT?usp=drive_link',
  img_src: 'https://cdn-icons-png.flaticon.com/512/3448/3448561.png',
  filter: 'grayscale(.2) hue-rotate(130deg) brightness(.8); transform: scale(1.4) translateY(5px)',
}

export const LORE_LINKS = [
  {
    id: 'world',
    label: 'Monde hors du donjon',
    desc: 'Le lore du monde l\'origine de l\'équipe',
    url: 'https://docs.google.com/document/d/17Cj6tEsinUN6EFaCIbTiQV-7bC8j5TxQkCVwibPn1w0/edit?usp=drive_link',
    img_src: googleDocIconUrl,
  },
  {
    id: 'mythos',
    label: 'Mythologie & Biomes du donjon',
    desc: 'Les Divinités et leurs biomes associés, et le lore du donjon',
    url: 'https://docs.google.com/document/d/1IaVq2_RilrTV5g513UyyY5XaaQeZFV0tYxGWUhVWu5s/edit?usp=drive_link',
    img_src: googleDocIconUrl,
  },
];

export const SPECS_LINKS = [
  {
    id: 'func_specs',
    label: 'Specs fonctionnelles',
    desc: 'Les spécifications fonctionnelles du projet',
    url: 'https://docs.google.com/document/d/1dlrODNJ8jxQJ11ijxTPlnFzdruGJnWNov9ZlS35uBLc/edit?usp=drive_link',
    img_src: googleDocIconUrl,
  },
  {
    id: 'classes',
    label: 'CLASSES',
    desc: 'Les spécifications des classes jouables',
    url: 'https://docs.google.com/document/d/1Z6EbBW5np7JPP8euVrDnzlnt3XMdscL6mqsrLm5pdo0/edit?usp=drive_link',
    img_src: googleDocIconUrl,
  },
  {
    id: 'money',
    label: 'Modèle économique',
    desc: 'La discussion sur la stratégie de monétisation du jeu',
    url: 'https://docs.google.com/document/d/19Ejvo8TxeDQqZVYBUL2zmZ4cg2vP4ZmPQ0nDkaLZWrk/edit?usp=drive_link',
    img_src: googleDocIconUrl,
  },
  {
    id: 'success',
    label: 'Succès',
    desc: 'La liste des succès à déverrouiller',
    url: 'https://docs.google.com/spreadsheets/d/1_FwYn1dzEGE8uhiz4gBfwNu-6Eo8MF5yb7EYJ7YIr5o/edit?usp=drive_link',
    img_src: successIconUrl,
  },
];

export const TECH_LINKS = [
  {
    id: 'func_specs',
    label: 'Specs techniques',
    desc: 'Les spécifications techniques du projet',
    url: 'https://docs.google.com/document/d/1rDNGBTbnKeRddg6CqCoN-McJHoRdofX2aX0CKWMQrdU/edit?usp=drive_link',
    img_src: googleDocIconUrl,
  },
];

export const ARTBOOK_CLASSES_FOLDERS = [
  {
    id: 'yuhl',
    label: 'Yuhl',
    desc: '',
    url: 'https://drive.google.com/drive/folders/1CmM27j72oQKk8kjXLpOYt79_qBwd84tS?usp=drive_link',
    img_src: folderIconUrl,
    filter: 'grayscale(.2) hue-rotate(130deg) brightness(.8)',
  },
  {
    id: 'scargol',
    label: 'Scargol',
    desc: '',
    url: 'https://drive.google.com/drive/folders/1cFOyVg71oy3cUNhZRcpytiGSaEP-CWai?usp=drive_link',
    img_src: folderIconUrl,
    filter: 'grayscale(0) hue-rotate(200deg) saturate(1.5) brightness(.8)',
  },
  {
    id: 'ranger',
    label: 'Ranger',
    desc: '',
    url: 'https://drive.google.com/drive/folders/1ZZD5Ds2YY4BSX10TnkLAz74JFWukycNA?usp=drive_link',
    img_src: folderIconUrl,
    filter: 'grayscale(.45) hue-rotate(-10deg)',
  },
  {
    id: 'vastari',
    label: 'Vastari',
    desc: '',
    url: 'https://drive.google.com/drive/folders/1rkMJERIsU25QEtv2ZK4D2KpiQjrX9Uj5?usp=drive_link',
    img_src: folderIconUrl,
    filter: 'grayscale(0) hue-rotate(-60deg) brightness(.9) saturate(1.7)',
  },
];

export const ARTBOOK_MOBS_FOLDERS = [
  {
    id: 'mobs',
    label: 'Mobs',
    desc: 'Les ennemis de base du jeu',
    url: 'https://drive.google.com/drive/folders/1JjhC-yV-3fsIoUlG2BKe1QGJMJe6LBV0?usp=drive_link',
    img_src: folderIconUrl,
  },
  {
    id: 'arpenteurs',
    label: 'Arpenteurs',
    desc: 'Les ennemis versatiles du jeu',
    url: 'https://drive.google.com/drive/folders/1Q0DiVF-c8VHlrSGtmNP2uHByxtGFK7FL?usp=drive_link',
    img_src: folderIconUrl,
  },
  {
    id: 'boss',
    label: 'Boss',
    desc: 'Les gardiens de chaque étage',
    url: 'https://drive.google.com/drive/folders/1DooSgGhEwObQV0c0Wne4yAoBw_7OvALe?usp=drive_link',
    img_src: folderIconUrl,
  },
];

export const ARTBOOK_DECORS_FOLDERS = [
  {
    id: 'env',
    label: 'Environnement',
    desc: 'Le monde en dehors du donjon',
    url: 'https://drive.google.com/drive/folders/12Fxu6vKLvUKjEzFrmRsJixLQi57CZSs8?usp=drive_link',
    img_src: folderIconUrl,
  },
  {
    id: 'portal',
    label: 'Portail',
    desc: 'Le portail vers le donjon',
    url: 'https://drive.google.com/drive/folders/1lwHJGbimZ-7LkEiHNrqhcoOklGeTclBO?usp=drive_link',
    img_src: folderIconUrl,
  },
  {
    id: 'dungeon',
    label: 'Donjon',
    desc: 'L\'intérieur du donjon',
    url: 'https://drive.google.com/drive/folders/1tKOZ4j8cwB5POqBGoB2Dr1qzVpS8U2iG?usp=drive_link',
    img_src: folderIconUrl,
  },
];