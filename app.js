import { 
  ARTBOOK_CLASSES_FOLDERS, 
  ARTBOOK_DECORS_FOLDERS, 
  ARTBOOK_MOBS_FOLDERS, 
  LORE_LINKS, 
  MAIN_FOLDER_LINK, 
  SPECS_LINKS, 
  TECH_LINKS 
} from "./data.js";

// PASSWORD LOGIC /////////////////////////////////////////////////////////////////////////////////

const PASSWORD_HASH = 'a931f3d4aadca8b001740cf7ce8bba32d1bd9caeb49a14901815afbae29345aa';

function normalizePassword(password) {
  return password
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  return [...new Uint8Array(hashBuffer)]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function login(password) {
  if (await hashPassword(password) === PASSWORD_HASH) {
    setupBody();
    setLinksContainerDom();
    setArtbookContainersDom();
  }
}

// DOM GENERATION /////////////////////////////////////////////////////////////////////////////////

function setupBody() {
  document.getElementById('body').innerHTML = `
  <aside>
    <nav>
      <ul>
        <li>
          <a href="#decors">Liens utiles</a>
          <ul>
            <li><a href="#decors">Spécifications</a></li>
            <li><a href="#decors">Technique</a></li>
            <li><a href="#decors">Lore</a></li>
          </ul>
        </li>
        <li>
          <a href="#decors">Artbook</a>
          <ul>
            <li><a href="#decors">Classes</a></li>
            <li><a href="#decors">Mobs</a></li>
            <li><a href="#decors">Décors</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
  <main id="main">
    <span class="main-title">DUNGEON CRAWLER MANAGER</span>
    
    <h1>Liens utiles</h1>
    <section class="links-container main-link">${getLinkDom(MAIN_FOLDER_LINK)}</section>
    
    <h2>Spécifications</h2>
    <section id="linksSpecsContainer" class="links-container"></section>
    
    <h2>Technique</h2>
    <section id="linksTechContainer" class="links-container"></section>

    <h2>Lore</h2>
    <section id="loreContainer" class="links-container lore"></section>

    <hr>

    <h1>Artbook</h1>
    
    <h2>Classes</h2>
    <section id="artbookClassesContainer" class="links-container artbook-container classes"></section>
    
    <h2>Mobs</h2>
    <section id="artbookMobsContainer" class="links-container artbook-container mobs"></section>
    
    <h2 id="decors">Décors</h2>
    <section id="artbookDecorsContainer" class="links-container artbook-container decors"></section>
  </main>
`;
}

function getLinkDom(link) {
  return `
    <a 
      href="${link.url}"
      target="_blank"
      class="link-block ${link.desc == '' ? `center` : ''}"
    >
      <img src="${link.img_src}" ${link.filter != undefined ? `style="filter: ${link.filter};"` : ''} />
      <div class="link-texts">
        <h2>${link.label}</h2>
        ${link.desc != '' ? `<p>${link.desc}</p>` : ''}
      </div>
    </a>
  `;
}

function setLinksContainerDom() {
  let str = '';
  for (let link of SPECS_LINKS) {
    str += getLinkDom(link);
  }
  document.getElementById('linksSpecsContainer').innerHTML = str;
  
  str = '';
  for (let link of TECH_LINKS) {
    str += getLinkDom(link);
  }
  document.getElementById('linksTechContainer').innerHTML = str;

  str = '';
  for (let link of LORE_LINKS) {
    str += getLinkDom(link);
  }
  document.getElementById('loreContainer').innerHTML = str;
}

function setArtbookContainersDom() {
  let str = '';
  for (let link of ARTBOOK_CLASSES_FOLDERS) {
    str += getLinkDom(link);
  }
  document.getElementById('artbookClassesContainer').innerHTML = str;
  str = '';
  for (let link of ARTBOOK_MOBS_FOLDERS) {
    str += getLinkDom(link);
  }
  document.getElementById('artbookMobsContainer').innerHTML = str;
  str = '';
  for (let link of ARTBOOK_DECORS_FOLDERS) {
    str += getLinkDom(link);
  }
  document.getElementById('artbookDecorsContainer').innerHTML = str;
}

// EXECUTION //////////////////////////////////////////////////////////////////////////////////////

document.getElementById('passwordInput').addEventListener('input', async (event) => {
  const enteredPassword = event.target.value;
  const normalizedPassword = normalizePassword(enteredPassword);
  await login(normalizedPassword);
});

if (window.isSecureContext) {
  // Normal execution
} else {
  setupBody();
  setLinksContainerDom();
  setArtbookContainersDom();
}