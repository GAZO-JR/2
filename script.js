(() => {
  // === VARIABLES ===
  const adminEmail = "isagi7797@gmail.com";

  // Cache DOM
  const navBar = document.getElementById('navBar');
  const mainElement = document.querySelector('main'); // Sélection de l'élément main
  const sectionsData = `
    <!-- SECTION CONNEXION -->
    <section id="sectionLogin">
      <h2>Connexion</h2>
      <input type="text" id="loginId" placeholder="Votre ID ou Email" />
      <input type="password" id="loginPassword" placeholder="Mot de passe" />
      <button id="btnLogin">Se connecter</button>
      <div id="loginMessage" class="message"></div>
    </section>

    <!-- DASHBOARD utilisateur -->
    <section id="sectionDashboard">
      <h2>Bienvenue, <span id="userDisplayName"></span></h2>
      <p>Utilisez la navigation pour accéder aux fonctionnalités.</p>
    </section>

    <!-- SECTION DEPLOY -->
    <section id="sectionDeploy">
      <h2>Déployer un projet GitHub</h2>
      <input type="text" id="repoUrl" placeholder="URL du dépôt GitHub" />
      <select id="paymentMethod">
        <option value="">Choisir moyen de paiement</option>
        <option value="orange">Paiement Mobile Orange</option>
        <option value="mtn">Paiement Mobile MTN</option>
      </select>
      <button id="btnDeploy">Déployer (1000 FCFA)</button>
      <div id="deployMessage" class="message"></div>
    </section>

    <!-- SECTION CREER PAGE -->
    <section id="sectionCreatePage">
      <h2>Créer une page web avec PAUL</h2>
      <label for="pageTitle">Titre de la page :</label>
      <input type="text" id="pageTitle" placeholder="Titre de votre page" />
      <label for="pageContent">Contenu HTML de la page :</label>
      <textarea id="pageContent" rows="8" placeholder="Entrez le code HTML ici..."></textarea>
      <button id="btnGenerate">Générer l'aperçu</button>
      <button id="btnDeployPage" disabled>Déployer la page (1000 FCFA)</button>
      <div id="pageMessage" class="message"></div>
      <iframe id="preview"></iframe>
    </section>

    <!-- SECTION HISTORIQUE -->
    <section id="sectionHistory">
      <h2>Historique des déploiements</h2>
      <div id="historyList">Aucun déploiement trouvé.</div>
    </section>

    <!-- SECTION CHATBOT -->
    <section id="sectionChatbot">
      <h2>PAUL 🤖 - Votre assistant</h2>
      <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="Robot PAUL" class="robot-img" />
      <div id="chatLog" style="height: 300px; overflow-y:auto; background:#1f2833; padding:10px; border-radius:5px;"></div>
      <input type="text" id="chatInput" placeholder="Posez une question ou commandez..." />
    </section>

    <!-- SECTION ADMIN MENU -->
    <section id="sectionAdmin" class="admin-menu" style="display:none;">
      <h2>Menu Administrateur</h2>
      <h3>Utilisateurs inscrits :</h3>
      <table id="tableUsers">
        <thead><tr><th>ID</th><th>Email</th><th>Mot de passe</th><th>Nombre déploiements</th></tr></thead>
        <tbody></tbody>
      </table>
      <h3>Envoyer un message à un utilisateur</h3>
      <select id="selectUserToMsg"></select>
      <input type="text" id="adminMsgText" placeholder="Votre message" />
      <button id="btnSendMsg">Envoyer</button>
      <div id="adminMsgStatus" class="message"></div>
      <h3>Modifier le contenu du site</h3>
      <textarea id="adminSiteEdit" rows="5" placeholder="Modifier le contenu visible du site ici..."></textarea>
      <button id="btnSaveSiteEdit">Enregistrer modifications</button>
      <div id="adminSiteEditStatus" class="message"></div>
    </section>
  `;

  // Injection du code HTML des sections dans l'élément main
  mainElement.innerHTML = sectionsData;

  const sections = {
    signup: document.getElementById('sectionSignup'),
    login: document.getElementById('sectionLogin'),
    dashboard: document.getElementById('sectionDashboard'),
    deploy: document.getElementById('sectionDeploy'),
    createPage: document.getElementById('sectionCreatePage'),
    history: document.getElementById('sectionHistory'),
    chatbot: document.getElementById('sectionChatbot'),
    admin: document.getElementById('sectionAdmin'),
  };

  // Le reste de votre code JavaScript viendra ici...

})();
