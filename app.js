const DB_NAME = "respiracion-yogui";
const DB_VERSION = 1;
const TRACK_VOLUME = 0.34;
const POSTURE_MUSIC_VOLUME = 0.18;
const RAIN_VOLUME = 0.08;
const GUIDE_VOLUME = 0.38;
const BREATHING_DURATION_SECONDS = 5 * 60;
const POSTURE_DURATION_SECONDS = 5 * 60;
const BREATHING_PRIMER_SECONDS = 45;

const MOODS = [
  {
    id: "anxious",
    label: "Ansiedad",
    hint: "Para bajar la urgencia interna y encontrar espacio.",
  },
  {
    id: "stressed",
    label: "Estrés",
    hint: "Para soltar tensión acumulada en el cuerpo.",
  },
  {
    id: "tired",
    label: "Cansancio",
    hint: "Para descansar sin desconectarte del todo.",
  },
  {
    id: "distracted",
    label: "Distracción",
    hint: "Para volver al presente con suavidad.",
  },
  {
    id: "low energy",
    label: "Con poca energía",
    hint: "Para activar el ánimo sin exigirte.",
  },
  {
    id: "sleep better",
    label: "Dormir mejor",
    hint: "Para preparar una noche más calma.",
  },
  {
    id: "balanced",
    label: "Equilibrio",
    hint: "Para sostener calma y claridad.",
  },
];

const ROUTINES = [
  {
    name: "Calma Lunar",
    mood: "anxious",
    inhale_seconds: 4,
    hold_seconds: 2,
    exhale_seconds: 6,
    second_hold_seconds: 0,
    duration_minutes: 5,
    description: "Una exhalación más larga para invitar al sistema nervioso a bajar el ritmo.",
    objective: "calmar ansiedad",
  },
  {
    name: "Hombros Suaves",
    mood: "stressed",
    inhale_seconds: 4,
    hold_seconds: 4,
    exhale_seconds: 6,
    second_hold_seconds: 2,
    duration_minutes: 5,
    description: "Un patrón redondo para liberar presión y recuperar una sensación de pausa.",
    objective: "soltar tensión",
  },
  {
    name: "Descanso Claro",
    mood: "tired",
    inhale_seconds: 4,
    hold_seconds: 1,
    exhale_seconds: 5,
    second_hold_seconds: 0,
    duration_minutes: 5,
    description: "Respiración estable y breve para descansar sin caer en pesadez.",
    objective: "renovar energía suave",
  },
  {
    name: "Centro Presente",
    mood: "distracted",
    inhale_seconds: 4,
    hold_seconds: 4,
    exhale_seconds: 4,
    second_hold_seconds: 4,
    duration_minutes: 5,
    description: "Respiración cuadrada para recuperar foco, orden y presencia.",
    objective: "mejorar concentración",
  },
  {
    name: "Brillo Interior",
    mood: "low energy",
    inhale_seconds: 5,
    hold_seconds: 2,
    exhale_seconds: 4,
    second_hold_seconds: 0,
    duration_minutes: 5,
    description: "Inhalaciones amplias para despertar vitalidad de forma amable.",
    objective: "activar energía",
  },
  {
    name: "Nido Nocturno",
    mood: "sleep better",
    inhale_seconds: 4,
    hold_seconds: 0,
    exhale_seconds: 8,
    second_hold_seconds: 0,
    duration_minutes: 5,
    description: "Un ritmo lento centrado en exhalar para acompañar el descanso.",
    objective: "favorecer el sueño",
  },
  {
    name: "Equilibrio Serena",
    mood: "balanced",
    inhale_seconds: 5,
    hold_seconds: 5,
    exhale_seconds: 5,
    second_hold_seconds: 0,
    duration_minutes: 5,
    description: "Un flujo parejo para mantener la calma y cuidar tu energía.",
    objective: "sostener equilibrio",
  },
];

const MUSIC_THEMES = {
  anxious: {
    name: "Sleep Music No. 1",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
    rain: true,
  },
  stressed: {
    name: "Jomon Grove",
    file: "assets/audio/jomon-grove-the-mini-vandals.mp3",
    rain: false,
  },
  tired: {
    name: "Sleep Music No. 1",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
    rain: false,
  },
  distracted: {
    name: "Jomon Grove",
    file: "assets/audio/jomon-grove-the-mini-vandals.mp3",
    rain: true,
  },
  "low energy": {
    name: "Akatsuki Rising",
    file: "assets/audio/akatsuki-rising-the-mini-vandals.mp3",
    rain: false,
  },
  "sleep better": {
    name: "Sleep Music No. 1 + lluvia suave",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
    rain: true,
  },
  balanced: {
    name: "Jomon Grove",
    file: "assets/audio/jomon-grove-the-mini-vandals.mp3",
    rain: false,
  },
};

const GUIDE_AUDIO = {
  breathing: {
    anxious: "assets/audio/ansiedad-calma-lunar.m4a",
    stressed: "assets/audio/estres-hombros-suaves.m4a",
    tired: "assets/audio/cansancio-descanso-claro.m4a",
    distracted: "assets/audio/distraccion-centro-presente.m4a",
    "low energy": "assets/audio/poca-energia-brillo-interior.m4a",
    "sleep better": "assets/audio/dormir-mejor-nido-nocturno.m4a",
    balanced: "assets/audio/equilibrio-serena.m4a",
  },
  postures: {
    anxious: "assets/audio/ansiedad-posturas.m4a",
    stressed: "assets/audio/estres-posturas.m4a",
    tired: "assets/audio/cansancio-posturas.m4a",
    distracted: "assets/audio/distraccion-posturas.m4a",
    "low energy": "assets/audio/poca-energia-posturas.m4a",
    "sleep better": "assets/audio/dormir-mejor-posturas.m4a",
    balanced: "assets/audio/equilibrio-posturas.m4a",
  },
};

const POSTURE_ROUTINES = {
  anxious: {
    name: "Pausa tranquilizante en silla",
    category: "Posturas tranquilizantes",
    objective: "Interiorizar, bajar la activación y dar descanso mental",
    poses: [
      { id: "seated", name: "Sentada", cue: "Apoyá los pies, las manos sobre los muslos y alargá la columna." },
      { id: "shoulders", name: "Hombros", cue: "Subí hombros al inhalar y bajalos hacia atrás al exhalar." },
      { id: "forward-fold", name: "Flexión hacia adelante", cue: "Bajá el torso hacia las piernas sin forzar y con columna derecha." },
      { id: "side-stretch", name: "Lateral", cue: "Abrí un costado, volvé al centro y cambiá de lado." },
      { id: "seated", name: "Sentada", cue: "Volvé a la vertical y registrá la respiración." },
    ],
  },
  stressed: {
    name: "Descarga laboral",
    category: "Posturas tranquilizantes",
    objective: "Soltar cuello, hombros y espalda alta desde la silla",
    poses: [
      { id: "shoulders", name: "Hombros", cue: "Subí hombros al inhalar y bajalos hacia atrás al exhalar." },
      { id: "heart-opener", name: "Apertura de pecho", cue: "Abrí el pecho desde las clavículas sin empujar la cintura." },
      { id: "forward-fold", name: "Flexión hacia adelante", cue: "Bajá el torso hacia las piernas sin forzar y con columna derecha." },
      { id: "twist", name: "Torsión", cue: "Giramos desde el abdomen, primero hacia un lado y después hacia el otro." },
      { id: "seated", name: "Sentada", cue: "Volvé al centro y relajá hombros, mandíbula y abdomen." },
    ],
  },
  tired: {
    name: "Activación amable",
    category: "Posturas vitalizantes",
    objective: "Subir energía con extensión, apertura y movimiento dinámico",
    poses: [
      { id: "seated", name: "Sentada", cue: "Apoyá los pies, las manos sobre los muslos y alargá la columna." },
      { id: "heart-opener", name: "Apertura de pecho", cue: "Abrí el pecho desde las clavículas sin empujar la cintura." },
      { id: "forward-fold", name: "Flexión hacia adelante", cue: "Bajá el torso hacia las piernas sin forzar y con columna derecha." },
      { id: "arms-up", name: "Brazos arriba", cue: "Subí los brazos al inhalar y bajalos despacio al exhalar." },
      { id: "twist", name: "Torsión", cue: "Giramos desde el abdomen, primero hacia un lado y después hacia el otro." },
    ],
  },
  distracted: {
    name: "Foco equilibrante",
    category: "Posturas equilibrantes",
    objective: "Ordenar atención con torsión, lateralidad y eje",
    poses: [
      { id: "seated", name: "Sentada", cue: "Apoyá los pies, las manos sobre los muslos y alargá la columna." },
      { id: "side-stretch", name: "Lateral", cue: "Abrí un costado, volvé al centro y cambiá de lado." },
      { id: "shoulders", name: "Hombros", cue: "Subí hombros al inhalar y bajalos hacia atrás al exhalar." },
      { id: "heart-opener", name: "Apertura de pecho", cue: "Abrí el pecho desde las clavículas sin empujar la cintura." },
      { id: "twist", name: "Torsión", cue: "Giramos desde el abdomen, primero hacia un lado y después hacia el otro." },
    ],
  },
  "low energy": {
    name: "Vitalidad en silla",
    category: "Posturas vitalizantes",
    objective: "Estimular energía con extensiones y movimientos activos",
    poses: [
      { id: "seated", name: "Sentada", cue: "Apoyá los pies, las manos sobre los muslos y alargá la columna." },
      { id: "arms-up", name: "Brazos arriba", cue: "Subí los brazos al inhalar y bajalos despacio al exhalar." },
      { id: "heart-opener", name: "Apertura de pecho", cue: "Abrí el pecho desde las clavículas sin empujar la cintura." },
      { id: "side-stretch", name: "Lateral", cue: "Abrí un costado, volvé al centro y cambiá de lado." },
      { id: "twist", name: "Torsión", cue: "Giramos desde el abdomen, primero hacia un lado y después hacia el otro." },
    ],
  },
  "sleep better": {
    name: "Cierre tranquilizante",
    category: "Posturas tranquilizantes",
    objective: "Bajar energía y preparar descanso desde la silla",
    poses: [
      { id: "seated", name: "Sentada", cue: "Apoyá los pies, las manos sobre los muslos y alargá la columna." },
      { id: "side-stretch", name: "Lateral", cue: "Abrí un costado, volvé al centro y cambiá de lado." },
      { id: "shoulders", name: "Hombros", cue: "Subí hombros al inhalar y bajalos hacia atrás al exhalar." },
      { id: "forward-fold", name: "Flexión hacia adelante", cue: "Bajá el torso hacia las piernas sin forzar y con columna derecha." },
      { id: "twist", name: "Torsión", cue: "Giramos desde el abdomen, primero hacia un lado y después hacia el otro." },
    ],
  },
  balanced: {
    name: "Armonía en silla",
    category: "Posturas equilibrantes",
    objective: "Balancear lateralidad, torsión y respiración nasal",
    poses: [
      { id: "seated", name: "Sentada", cue: "Apoyá los pies, las manos sobre los muslos y alargá la columna." },
      { id: "shoulders", name: "Hombros", cue: "Subí hombros al inhalar y bajalos hacia atrás al exhalar." },
      { id: "side-stretch", name: "Lateral", cue: "Abrí un costado, volvé al centro y cambiá de lado." },
      { id: "arms-up", name: "Brazos arriba", cue: "Subí los brazos al inhalar y bajalos despacio al exhalar." },
      { id: "twist", name: "Torsión", cue: "Giramos desde el abdomen, primero hacia un lado y después hacia el otro." },
    ],
  },
};

const POSTURE_GUIDES = {
  seated: {
    movement: "Paso a paso: pies apoyados, manos sobre muslos, columna larga y exhalación suave.",
  },
  "arms-up": {
    movement: "Paso a paso: inhalá y subí brazos; exhalá y bajalos despacio, con cuello relajado.",
  },
  twist: {
    movement: "Paso a paso: inhalá subiendo un brazo, exhalá en torsión, respiramos y cambiamos de lado.",
  },
  "forward-fold": {
    movement: "Paso a paso: alargá espalda, exhalá bajando el torso y volvé vértebra por vértebra.",
  },
  "side-stretch": {
    movement: "Paso a paso: brazo derecho arriba e inclinación izquierda; después brazo izquierdo y derecha.",
  },
  "heart-opener": {
    movement: "Paso a paso: tomá la silla, abrí el pecho al inhalar y aflojá al exhalar.",
  },
  shoulders: {
    movement: "Paso a paso: hombros arriba al inhalar; atrás y abajo al exhalar.",
  },
};

const assetAvailability = new Map();

const FEELINGS_AFTER = [
  { id: "calm", label: "Más calma", hint: "Mi respiración se siente más amplia." },
  { id: "focused", label: "Con más foco", hint: "Tengo un poco más de claridad." },
  { id: "rested", label: "Con más descanso", hint: "El cuerpo bajó un cambio." },
  { id: "energized", label: "Con más energía", hint: "Siento una activación suave." },
  { id: "same", label: "Igual que antes", hint: "Quiero registrarlo como parte del proceso." },
  { id: "heavy", label: "Con carga todavía", hint: "Necesito más tiempo o una pausa distinta." },
];

const state = {
  db: null,
  user: null,
  mood: null,
  routine: null,
  sessionId: null,
  sessionOptions: new Map(),
  session: {
    running: false,
    paused: false,
    intervalId: null,
    phaseTimeoutId: null,
    remainingSeconds: 0,
    durationMs: 0,
    startedAt: 0,
    pausedAt: null,
    pausedTotalMs: 0,
    phaseStartedAt: 0,
    phaseRemainingMs: 0,
    currentPhaseIndex: 0,
    currentPhaseLabel: "",
    endingWarned: false,
    finishing: false,
  },
  posture: {
    running: false,
    paused: false,
    intervalId: null,
    remainingSeconds: 0,
    durationMs: POSTURE_DURATION_SECONDS * 1000,
    startedAt: 0,
    pausedAt: null,
    pausedTotalMs: 0,
    currentPoseIndex: 0,
  },
  audio: {
    context: null,
    unlocked: false,
    guideEnabled: true,
    musicEnabled: true,
    musicGain: null,
    musicElement: null,
    musicSource: null,
    musicNodes: [],
    musicIntervals: [],
    routineId: null,
    guideElement: null,
    guideKey: null,
  },
};

const app = document.querySelector("#app");
const appStatus = document.querySelector("#app-status");

document.addEventListener("DOMContentLoaded", () => {
  initializeApp().catch(handleStartupError);
});

async function initializeApp() {
  state.db = await openDatabase();
  initPersistentAudioHandling();
  await seedRoutines();
  state.user = await getOrCreateUser();
  window.addEventListener("hashchange", renderRouteSafely);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  renderRouteSafely();
}

function handleStartupError(error) {
  console.error(error);
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel">
      <div class="brand"><span class="brand-mark"></span><span>Respiración Yogui</span></div>
      <p class="eyebrow">Pausa consciente</p>
      <h2>No pude iniciar la aplicación</h2>
      <p class="lead">Puede haber quedado una sesión guardada con datos viejos. Probá reintentar o reiniciar el acceso.</p>
      <div class="actions">
        <button class="button" type="button" data-retry-start>Reintentar</button>
        <button class="button button-secondary" type="button" data-reset-start>Reiniciar acceso</button>
      </div>
    </section>
  `;

  document.querySelector("[data-retry-start]")?.addEventListener("click", () => window.location.reload());
  document.querySelector("[data-reset-start]")?.addEventListener("click", () => {
    window.location.hash = "welcome";
    window.location.reload();
  });
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains("User")) {
        const userStore = db.createObjectStore("User", { keyPath: "id", autoIncrement: true });
        userStore.createIndex("created_at", "created_at");
      }

      if (!db.objectStoreNames.contains("Routine")) {
        const routineStore = db.createObjectStore("Routine", { keyPath: "id", autoIncrement: true });
        routineStore.createIndex("mood", "mood", { unique: true });
      }

      if (!db.objectStoreNames.contains("Session")) {
        const sessionStore = db.createObjectStore("Session", { keyPath: "id", autoIncrement: true });
        sessionStore.createIndex("user", "user");
        sessionStore.createIndex("routine", "routine");
        sessionStore.createIndex("date", "date");
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function tx(storeName, mode = "readonly") {
  return state.db.transaction(storeName, mode).objectStore(storeName);
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAll(storeName) {
  return requestToPromise(tx(storeName).getAll());
}

async function addRecord(storeName, record) {
  return requestToPromise(tx(storeName, "readwrite").add(record));
}

async function putRecord(storeName, record) {
  return requestToPromise(tx(storeName, "readwrite").put(record));
}

async function getRecord(storeName, id) {
  const localKey = Number.isNaN(Number(id)) ? id : Number(id);
  return requestToPromise(tx(storeName).get(localKey));
}

async function safeGetRecord(storeName, id) {
  try {
    return await getRecord(storeName, id);
  } catch (error) {
    return null;
  }
}

async function seedRoutines() {
  const routines = await getAll("Routine");
  for (const routine of ROUTINES) {
    const existing = routines.find((storedRoutine) => storedRoutine.mood === routine.mood);
    if (existing) await putRecord("Routine", { ...existing, ...routine, id: existing.id });
    else await addRecord("Routine", routine);
  }
}

async function getOrCreateUser() {
  const users = await getAll("User");
  if (users[0]) return users[0];

  const id = await addRecord("User", {
    name: "Invitada",
    created_at: new Date().toISOString(),
  });

  return getRecord("User", id);
}

function navigate(route) {
  if (getRoute() === route) {
    renderRouteSafely();
    return;
  }
  window.location.hash = route;
}

function getRoute() {
  return window.location.hash.replace("#", "") || "welcome";
}

function focusPrimaryHeading() {
  const target = app.querySelector("h1, h2, [data-instruction]");
  if (!target) return;
  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
  announce(target.textContent.trim());
}

function announce(message) {
  if (!appStatus || !message) return;
  appStatus.textContent = "";
  window.setTimeout(() => {
    appStatus.textContent = message;
  }, 10);
}

function handleVisibilityChange() {
  keepAudioAlive();
  if (!document.hidden && state.session.running && !state.session.paused && state.sessionId) {
    updateSessionProgress(state.sessionId);
  }
  if (!document.hidden && state.posture.running && !state.posture.paused && state.sessionId) {
    updatePostureProgress(postureRoutineFor(state.routine?.mood), state.sessionId);
  }
}

function initPersistentAudioHandling() {
  ["visibilitychange", "pageshow", "focus", "resume"].forEach((eventName) => {
    window.addEventListener(eventName, keepAudioAlive);
  });

  if ("mediaSession" in navigator) {
    try {
      navigator.mediaSession.setActionHandler("play", () => keepAudioAlive());
      navigator.mediaSession.setActionHandler("pause", () => {
        if (state.session.running && !state.session.paused) togglePause();
        else if (state.posture.running && !state.posture.paused) togglePosturePause();
        else pauseRoutineAudio(true);
      });
    } catch (error) {
      // Media Session support varies by browser.
    }
  }
}

async function keepAudioAlive() {
  if (!state.audio.musicEnabled || !state.routine) return;
  const shouldPlaySession = state.session.running && !state.session.paused;
  const shouldPlayPosture = state.posture.running && !state.posture.paused;
  if (!shouldPlaySession && !shouldPlayPosture) return;

  if (state.audio.guideElement?.paused && !state.audio.guideElement.ended) {
    state.audio.guideElement.play().catch(() => {});
  }

  if (state.audio.context?.state === "suspended") {
    try {
      await state.audio.context.resume();
    } catch (error) {
      // Some mobile browsers only resume after the next user gesture.
    }
  }

  if (state.audio.musicElement?.paused) {
    state.audio.musicElement.play().catch(() => {});
  } else if (!state.audio.musicElement) {
    startRoutineAudio(state.routine);
  }
}

async function renderRoute() {
  const route = getRoute();
  const keepRoutineAudio = route.startsWith("postures/");
  stopSessionTimers({ keepAudio: keepRoutineAudio });
  stopPostureTimers();

  if (route === "auth") return navigate("moods");
  else if (route === "moods") await renderMoodPage();
  else if (route.startsWith("routine/")) await renderRoutinePage(route.split("/")[1]);
  else if (route.startsWith("session/")) await renderSessionPage(route.split("/")[1]);
  else if (route.startsWith("postures/")) await renderPosturePage(route.split("/")[1]);
  else if (route.startsWith("feedback/")) await renderFeedbackPage(route.split("/")[1]);
  else renderWelcomePage();

  focusPrimaryHeading();
}

function renderRouteSafely() {
  renderRoute().catch((error) => {
    console.error(error);
    if (getRoute() === "welcome") handleStartupError(error);
    else navigate("welcome");
  });
}

function renderWelcomePage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel">
      ${brandBar()}
      <p class="eyebrow">Pausa consciente</p>
      <h1>Respiración Yogui</h1>
      <p class="lead">
        Elige cómo te sientes y recibe una rutina de respiración para tu pausa diaria.
      </p>
      <div class="actions">
        <button class="button" type="button" data-route="moods">Comenzar</button>
      </div>
    </section>
  `;
  bindRoutes();
}

function renderMoodPage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("welcome")}
      <h2>¿Cómo te sientes ahora?</h2>
      <div class="mood-grid">
        ${MOODS.map(
          (mood) => `
            <button class="mood-card" type="button" data-mood="${mood.id}" aria-pressed="false">
              <h3>${mood.label}</h3>
              <span>${mood.hint}</span>
            </button>
          `,
        ).join("")}
      </div>
    </section>
  `;

  document.querySelectorAll("[data-mood]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.mood = button.dataset.mood;
      const routine = await routineForMood(state.mood);
      navigate(`routine/${routine.id}`);
    });
  });
}

async function renderRoutinePage(routineId) {
  const routine = await safeGetRecord("Routine", routineId);
  if (!routine) return navigate("moods");

  state.routine = routine;
  state.mood = routine.mood;

  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("moods")}
      <p class="eyebrow">Rutina recomendada</p>
      <h2>${routine.name}</h2>
      <p class="lead">${routine.description}</p>
      <div class="routine-layout">
        <div class="routine-visual" aria-hidden="true">
          <div class="lotus"><span></span></div>
        </div>
        <dl class="detail-list">
          <div class="detail">
            <dt>Respiración</dt>
            <dd>5 minutos</dd>
          </div>
          <div class="detail">
            <dt>Posturas</dt>
            <dd>5 minutos</dd>
          </div>
          <div class="detail">
            <dt>Duración total</dt>
            <dd>10 minutos</dd>
          </div>
          <div class="detail">
            <dt>Patrón</dt>
            <dd>${patternLabel(routine)}</dd>
          </div>
          <div class="detail">
            <dt>Objetivo</dt>
            <dd>${sentenceCase(routine.objective)}</dd>
          </div>
          <div class="detail">
            <dt>Música</dt>
            <dd>${musicThemeFor(routine).name}</dd>
          </div>
        </dl>
      </div>
      <div class="actions">
        <button class="button" type="button" data-start-session="${routine.id}">Iniciar rutina de 10 min</button>
        <button class="button button-secondary" type="button" data-start-breathing-only="${routine.id}">Solo respiración · 5 min</button>
        <button class="button button-secondary" type="button" data-route="moods">Cambiar estado</button>
      </div>
    </section>
  `;

  bindRoutes();
  document.querySelector("[data-start-session]").addEventListener("click", async () => {
    await startRoutineSession(routine, { skipPostures: false });
  });
  document.querySelector("[data-start-breathing-only]").addEventListener("click", async () => {
    await startRoutineSession(routine, { skipPostures: true });
  });
}

async function startRoutineSession(routine, options = {}) {
    await unlockAudio();
    const sessionId = await addRecord("Session", {
      user: state.user.id,
      routine: routine.id,
      mood_before: routine.mood,
      mood_after: "",
      date: new Date().toISOString(),
      completed: false,
      skip_postures: Boolean(options.skipPostures),
    });
    state.sessionOptions.set(sessionId, { skipPostures: Boolean(options.skipPostures) });
    state.sessionId = sessionId;
    navigate(`session/${sessionId}`);
}

async function renderSessionPage(sessionId) {
  const session = await safeGetRecord("Session", sessionId);
  if (!session) return navigate("moods");

  const routine = await safeGetRecord("Routine", session.routine);
  if (!routine) return navigate("moods");

  state.sessionId = session.id;
  state.routine = routine;

  app.className = "app-shell";
  app.innerHTML = `
    <section class="session-screen">
      <div class="topbar">
        <div class="brand"><span class="brand-mark"></span><span>${routine.name}</span></div>
        <div class="timer" data-timer>${formatTime(breathingDurationSeconds(routine))}</div>
      </div>
      <div class="session-space">
        <p class="eyebrow">5 minutos de respiración</p>
        <div class="breath-wrap">
          <div class="breath-circle" data-circle>
            <div class="breath-text" data-instruction>Inhala</div>
          </div>
        </div>
        <div class="session-meta">
          <span>${patternLabel(routine)}</span>
          <span class="audio-status" data-audio-status>${audioStatusLabel()}</span>
        </div>
        <div class="actions" style="justify-content: center;">
          <button class="button button-soft" type="button" data-pause> Pausar </button>
          <button class="button button-secondary" type="button" data-audio-toggle aria-pressed="${String(isAudioEnabled())}">
            ${audioButtonLabel()}
          </button>
          <button class="button button-danger" type="button" data-finish>Finalizar</button>
        </div>
      </div>
    </section>
  `;

  startBreathingSession(routine, session.id);
  document.querySelector("[data-pause]").addEventListener("click", togglePause);
  document.querySelector("[data-audio-toggle]").addEventListener("click", toggleAudio);
  document.querySelector("[data-finish]").addEventListener("click", () => finishSession(session.id, false));
}

async function renderFeedbackPage(sessionId) {
  stopSessionTimers();
  stopPostureTimers();
  const session = await safeGetRecord("Session", sessionId);
  if (!session) return navigate("moods");
  const insights = await buildSessionInsights();

  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("moods")}
      <h2>¿Cómo te sientes después?</h2>
      <p class="lead">Elige una respuesta para guardar tu sesión.</p>
      <div class="feedback-grid">
        ${FEELINGS_AFTER.map(
          (feeling) => `
            <button class="feedback-card" type="button" data-after="${feeling.id}" aria-pressed="false">
              <h3>${feeling.label}</h3>
              <span>${feeling.hint}</span>
            </button>
          `,
        ).join("")}
      </div>
      <p class="saved-note" data-saved hidden>Sesión guardada.</p>
      <div class="insights" data-insights>
        ${renderInsights(insights)}
      </div>
      <div class="actions">
        <button class="button button-secondary" type="button" data-route="moods">Nueva rutina</button>
      </div>
    </section>
  `;

  bindRoutes();
  document.querySelectorAll("[data-after]").forEach((button) => {
    button.addEventListener("click", async () => {
      document.querySelectorAll("[data-after]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      session.mood_after = button.dataset.after;
      session.completed = true;
      session.date = session.date || new Date().toISOString();
      await putRecord("Session", session);
      document.querySelector("[data-saved]").hidden = false;
      document.querySelector("[data-insights]").innerHTML = renderInsights(await buildSessionInsights());
    });
  });
}

async function renderPosturePage(sessionId) {
  const session = await safeGetRecord("Session", sessionId);
  if (!session) return navigate("moods");

  const routine = await safeGetRecord("Routine", session.routine);
  if (!routine) return navigate("moods");

  const postureRoutine = postureRoutineFor(routine.mood);
  state.sessionId = session.id;
  state.routine = routine;

  app.className = "app-shell";
  app.innerHTML = `
    <section class="session-screen posture-screen">
      <div class="topbar">
        <div class="brand"><span class="brand-mark"></span><span>${postureRoutine.name}</span></div>
        <div class="timer" data-posture-timer>${formatTime(POSTURE_DURATION_SECONDS)}</div>
      </div>
      <div class="posture-space">
        <div class="posture-copy">
          <p class="eyebrow">5 minutos de posturas</p>
          <h2 data-posture-name>${postureRoutine.poses[0].name}</h2>
          <p class="lead" data-posture-cue>${postureRoutine.poses[0].cue}</p>
          <p class="posture-movement" data-posture-movement>${postureGuideFor(postureRoutine.poses[0]).movement}</p>
          <div class="session-meta">
            <span>${postureRoutine.category} · ${postureRoutine.objective}</span>
            <span class="audio-status" data-posture-step>1 de ${postureRoutine.poses.length}</span>
          </div>
        </div>
        <div class="actions" style="justify-content: center;">
          <button class="button button-soft" type="button" data-posture-pause>Pausar</button>
          <button class="button button-danger" type="button" data-posture-finish>Finalizar</button>
        </div>
      </div>
    </section>
  `;

  startPostureSession(postureRoutine, session.id);
  document.querySelector("[data-posture-pause]").addEventListener("click", togglePosturePause);
  document.querySelector("[data-posture-finish]").addEventListener("click", () => finishPostureSession(session.id));
}

async function routineForMood(mood) {
  const routines = await getAll("Routine");
  return routines.find((routine) => routine.mood === mood) || routines[0];
}

function brandBar(backRoute) {
  return `
    <div class="topbar">
      <div class="brand"><span class="brand-mark"></span><span>Respiración Yogui</span></div>
      <div class="topbar-actions">
        ${backRoute ? `<button class="button button-secondary" type="button" data-route="${backRoute}">Volver</button>` : ""}
      </div>
    </div>
  `;
}

function bindRoutes() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });
}

function patternLabel(routine) {
  const parts = [
    `${routine.inhale_seconds}s inhalar`,
    routine.hold_seconds ? `${routine.hold_seconds}s sostener` : "",
    `${routine.exhale_seconds}s exhalar`,
    routine.second_hold_seconds ? `${routine.second_hold_seconds}s pausa` : "",
  ].filter(Boolean);

  return parts.join(" · ");
}

function sentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

async function buildSessionInsights() {
  const [sessions, routines] = await Promise.all([getAll("Session"), getAll("Routine")]);
  const routineById = new Map(routines.map((routine) => [routine.id, routine]));
  const completedSessions = sessions.filter((session) => session.user === state.user.id && session.completed);
  const afterSessions = completedSessions
    .filter((session) => session.mood_after)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return {
    totalCompleted: completedSessions.length,
    favoriteRoutine: mostFrequent(
      completedSessions
        .map((session) => routineById.get(session.routine)?.name)
        .filter(Boolean),
    ),
    topFeeling: mostFrequent(afterSessions.map((session) => feelingLabel(session.mood_after))),
    latestFeeling: feelingLabel(afterSessions[afterSessions.length - 1]?.mood_after),
  };
}

function mostFrequent(values) {
  const counts = values.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map());
  const [label, count] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0] || [];
  return label ? { label, count } : null;
}

function feelingLabel(id) {
  return FEELINGS_AFTER.find((feeling) => feeling.id === id)?.label || "";
}

function renderInsights(insights) {
  if (!insights.totalCompleted) {
    return `
      <h3>Tu práctica</h3>
      <p>Cuando guardes tus sesiones, vas a ver acá tus rutinas más usadas y cómo te sentís después.</p>
    `;
  }

  return `
    <h3>Tu práctica</h3>
    <div class="insight-grid">
      <div class="insight-card">
        <span>Sesiones completas</span>
        <strong>${insights.totalCompleted}</strong>
      </div>
      <div class="insight-card">
        <span>Rutina más usada</span>
        <strong>${insights.favoriteRoutine ? `${insights.favoriteRoutine.label} (${insights.favoriteRoutine.count})` : "Sin datos"}</strong>
      </div>
      <div class="insight-card">
        <span>Después te sentís más seguido</span>
        <strong>${insights.topFeeling ? `${insights.topFeeling.label} (${insights.topFeeling.count})` : "Sin datos"}</strong>
      </div>
      <div class="insight-card">
        <span>Último registro</span>
        <strong>${insights.latestFeeling || "Sin datos"}</strong>
      </div>
    </div>
  `;
}

function startBreathingSession(routine, sessionId) {
  stopSessionTimers();
  const durationSeconds = breathingDurationSeconds(routine);

  state.session = {
    running: true,
    paused: false,
    intervalId: null,
    phaseTimeoutId: null,
    remainingSeconds: durationSeconds,
    durationMs: durationSeconds * 1000,
    startedAt: performance.now(),
    pausedAt: null,
    pausedTotalMs: 0,
    phaseStartedAt: 0,
    phaseRemainingMs: 0,
    currentPhaseIndex: 0,
    currentPhaseLabel: "",
    endingWarned: false,
    finishing: false,
  };

  startRoutineAudio(routine);
  startGuideAudio("breathing", routine.mood);
  renderTimer();
  state.session.intervalId = window.setInterval(() => {
    updateSessionProgress(state.sessionId);
  }, 250);
  runBreathingPrimer(BREATHING_PRIMER_SECONDS * 1000);
}

function buildPhases(routine) {
  return [
    { label: "Inhala", seconds: routine.inhale_seconds, scale: 1, easing: "ease-in-out" },
    { label: "Sostén", seconds: routine.hold_seconds, scale: 1, easing: "linear" },
    { label: "Exhala", seconds: routine.exhale_seconds, scale: 0.72, easing: "ease-in-out" },
    { label: "Pausa", seconds: routine.second_hold_seconds, scale: 0.72, easing: "linear" },
  ].filter((phase) => phase.seconds > 0);
}

function breathingDurationSeconds() {
  return BREATHING_DURATION_SECONDS;
}

function sessionRemainingSeconds(now = performance.now()) {
  if (!state.session.running) return 0;
  const pausedMs = state.session.pausedAt ? now - state.session.pausedAt : 0;
  const elapsedMs = now - state.session.startedAt - state.session.pausedTotalMs - pausedMs;
  return Math.max(0, Math.ceil((state.session.durationMs - elapsedMs) / 1000));
}

function updateSessionProgress(sessionId) {
  if (!state.session.running || state.session.finishing) return;
  state.session.remainingSeconds = sessionRemainingSeconds();
  renderTimer();

  if (state.session.remainingSeconds <= 15 && !state.session.endingWarned) {
    prepareSessionEnding();
  }

  if (state.session.remainingSeconds <= 0) {
    finishSession(sessionId, true, { fromTimer: true });
  }
}

function runPhase(durationOverrideMs) {
  const circle = document.querySelector("[data-circle]");
  const instruction = document.querySelector("[data-instruction]");
  if (!circle || !instruction || !state.routine || state.session.paused) return;

  const phases = buildPhases(state.routine);
  const phase = phases[state.session.currentPhaseIndex % phases.length];
  const phaseDurationMs = Math.max(0, durationOverrideMs ?? phase.seconds * 1000);

  if (!state.session.endingWarned) instruction.textContent = phase.label;
  state.session.currentPhaseLabel = phase.label;
  state.session.phaseStartedAt = performance.now();
  state.session.phaseRemainingMs = phaseDurationMs;
  circle.style.setProperty("--phase-ms", `${phaseDurationMs}ms`);
  circle.style.setProperty("--breath-scale", String(phase.scale));
  circle.style.transitionTimingFunction = phase.easing;

  state.session.phaseTimeoutId = window.setTimeout(() => {
    state.session.currentPhaseIndex += 1;
    runPhase();
  }, phaseDurationMs);
}

function runBreathingPrimer(durationOverrideMs) {
  const circle = document.querySelector("[data-circle]");
  const instruction = document.querySelector("[data-instruction]");
  if (!circle || !instruction || state.session.paused) return;

  const primerDurationMs = Math.max(0, durationOverrideMs ?? BREATHING_PRIMER_SECONDS * 1000);
  let primerCompleted = false;
  const completePrimer = () => {
    if (primerCompleted || state.session.paused || !state.session.running || state.session.currentPhaseLabel !== "Prepara") return;
    primerCompleted = true;
    window.clearTimeout(state.session.phaseTimeoutId);
    runPhase();
  };

  instruction.textContent = "Prepara";
  state.session.currentPhaseLabel = "Prepara";
  state.session.phaseStartedAt = performance.now();
  state.session.phaseRemainingMs = primerDurationMs;
  circle.style.setProperty("--phase-ms", `${primerDurationMs}ms`);
  circle.style.setProperty("--breath-scale", "0.82");
  circle.style.transitionTimingFunction = "ease-in-out";
  state.session.phaseTimeoutId = window.setTimeout(completePrimer, primerDurationMs);
}

function togglePause() {
  const button = document.querySelector("[data-pause]");
  const circle = document.querySelector("[data-circle]");
  if (state.session.finishing) return;
  state.session.paused = !state.session.paused;
  button.textContent = state.session.paused ? "Continuar" : "Pausar";

  if (state.session.paused) {
    state.session.pausedAt = performance.now();
    state.session.phaseRemainingMs = Math.max(
      0,
      state.session.phaseRemainingMs - (state.session.pausedAt - state.session.phaseStartedAt),
    );
    window.clearTimeout(state.session.phaseTimeoutId);
    if (circle) circle.style.transitionDuration = "0ms";
    pauseRoutineAudio(true);
    pauseGuideAudio(true);
    return;
  }

  state.session.pausedTotalMs += performance.now() - state.session.pausedAt;
  state.session.pausedAt = null;
  if (circle) circle.style.transitionDuration = "";
  pauseRoutineAudio(false);
  pauseGuideAudio(false);
  if (state.session.currentPhaseLabel === "Prepara") runBreathingPrimer(state.session.phaseRemainingMs);
  else runPhase(state.session.phaseRemainingMs);
}

function prepareSessionEnding() {
  state.session.endingWarned = true;
  const instruction = document.querySelector("[data-instruction]");
  if (instruction) instruction.textContent = "Cerrando";
  fadeRoutineAudioTo(Math.max(TRACK_VOLUME * 0.42, 0.12), 5);
}

async function finishSession(sessionId, completed, options = {}) {
  if (state.session.finishing) return;
  state.session.finishing = true;
  window.clearInterval(state.session.intervalId);
  window.clearTimeout(state.session.phaseTimeoutId);
  fadeRoutineAudioTo(POSTURE_MUSIC_VOLUME, completed ? 1.4 : 0.6);

  if (options.fromTimer) {
    const instruction = document.querySelector("[data-instruction]");
    if (instruction) instruction.textContent = "Terminamos";
    await wait(1400);
  } else {
    await wait(500);
  }

  stopGuideAudio();
  state.session.running = false;
  const session = await getRecord("Session", sessionId);
  if (session) {
    session.completed = completed;
    session.date = session.date || new Date().toISOString();
    await putRecord("Session", session);
  }
  const skipPostures = !completed || session?.skip_postures || state.sessionOptions.get(sessionId)?.skipPostures;
  navigate(skipPostures ? `feedback/${sessionId}` : `postures/${sessionId}`);
}

function stopSessionTimers(options = {}) {
  window.clearInterval(state.session.intervalId);
  window.clearTimeout(state.session.phaseTimeoutId);
  stopGuideAudio();
  if (!options.keepAudio) stopRoutineAudio();
  state.session.running = false;
}

function startPostureSession(routine, sessionId) {
  stopPostureTimers();
  state.posture = {
    running: true,
    paused: false,
    intervalId: null,
    remainingSeconds: POSTURE_DURATION_SECONDS,
    durationMs: POSTURE_DURATION_SECONDS * 1000,
    startedAt: performance.now(),
    pausedAt: null,
    pausedTotalMs: 0,
    currentPoseIndex: 0,
    endingWarned: false,
    finishing: false,
  };

  if (state.audio.musicEnabled && state.routine) {
    startRoutineAudio(state.routine).then(() => fadeRoutineAudioTo(POSTURE_MUSIC_VOLUME, 1.2));
  } else {
    fadeRoutineAudioTo(POSTURE_MUSIC_VOLUME, 1.2);
  }
  startGuideAudio("postures", state.routine?.mood);

  renderPosturePose(routine);
  renderPostureTimer();

  state.posture.intervalId = window.setInterval(() => {
    updatePostureProgress(routine, sessionId);
  }, 250);
}

function postureRemainingSeconds(now = performance.now()) {
  if (!state.posture.running) return 0;
  const pausedMs = state.posture.pausedAt ? now - state.posture.pausedAt : 0;
  const elapsedMs = now - state.posture.startedAt - state.posture.pausedTotalMs - pausedMs;
  return Math.max(0, Math.ceil((state.posture.durationMs - elapsedMs) / 1000));
}

function updatePostureProgress(routine, sessionId) {
  if (!state.posture.running || state.posture.finishing) return;
  state.posture.remainingSeconds = postureRemainingSeconds();
  renderPostureTimer();

  if (state.posture.remainingSeconds <= 15 && !state.posture.endingWarned) {
    preparePostureEnding();
  }

  if (!state.posture.endingWarned) {
    const poseDuration = Math.ceil(POSTURE_DURATION_SECONDS / routine.poses.length);
    state.posture.currentPoseIndex = Math.min(
      routine.poses.length - 1,
      Math.floor((POSTURE_DURATION_SECONDS - state.posture.remainingSeconds) / poseDuration),
    );
    renderPosturePose(routine);
  }

  if (state.posture.remainingSeconds <= 0) {
    finishPostureSession(sessionId);
  }
}

function renderPosturePose(routine) {
  const pose = routine.poses[state.posture.currentPoseIndex] || routine.poses[0];
  const guide = postureGuideFor(pose);
  const name = document.querySelector("[data-posture-name]");
  const cue = document.querySelector("[data-posture-cue]");
  const movement = document.querySelector("[data-posture-movement]");
  const step = document.querySelector("[data-posture-step]");

  if (name) name.textContent = pose.name;
  if (cue) cue.textContent = pose.cue;
  if (movement) movement.textContent = guide.movement;
  if (step) step.textContent = `${state.posture.currentPoseIndex + 1} de ${routine.poses.length}`;
}

function preparePostureEnding() {
  state.posture.endingWarned = true;
  const name = document.querySelector("[data-posture-name]");
  const cue = document.querySelector("[data-posture-cue]");
  const movement = document.querySelector("[data-posture-movement]");
  const step = document.querySelector("[data-posture-step]");

  if (name) name.textContent = "Cierre";
  if (cue) cue.textContent = "La rutina de posturas está por terminar.";
  if (movement) movement.textContent = "Dejá que el cuerpo vuelva a la quietud y acompañá el cierre con una respiración suave.";
  if (step) step.textContent = "Cerrando";
  fadeRoutineAudioTo(Math.max(POSTURE_MUSIC_VOLUME * 0.35, 0.06), 5);
}

function renderPostureTimer() {
  const timer = document.querySelector("[data-posture-timer]");
  if (timer) timer.textContent = formatTime(Math.max(0, state.posture.remainingSeconds));
}

function togglePosturePause() {
  const button = document.querySelector("[data-posture-pause]");
  state.posture.paused = !state.posture.paused;
  if (state.posture.paused) {
    state.posture.pausedAt = performance.now();
  } else {
    state.posture.pausedTotalMs += performance.now() - state.posture.pausedAt;
    state.posture.pausedAt = null;
  }
  if (button) button.textContent = state.posture.paused ? "Continuar" : "Pausar";
  pauseRoutineAudio(state.posture.paused, POSTURE_MUSIC_VOLUME);
  pauseGuideAudio(state.posture.paused);
}

async function finishPostureSession(sessionId) {
  if (!state.posture.running || state.posture.finishing) return;
  state.posture.finishing = true;
  stopPostureTimers();
  stopGuideAudio();
  fadeRoutineAudioTo(0.0001, 1.4);
  await wait(900);
  stopRoutineAudio();
  navigate(`feedback/${sessionId}`);
}

function stopPostureTimers() {
  window.clearInterval(state.posture.intervalId);
  state.posture.running = false;
}

function renderTimer() {
  const timer = document.querySelector("[data-timer]");
  if (timer) timer.textContent = formatTime(Math.max(0, state.session.remainingSeconds));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function musicThemeFor(routine) {
  return MUSIC_THEMES[routine.mood] || MUSIC_THEMES.balanced;
}

function postureRoutineFor(mood) {
  return POSTURE_ROUTINES[mood] || POSTURE_ROUTINES.balanced;
}

function postureGuideFor(pose) {
  return POSTURE_GUIDES[pose?.id] || POSTURE_GUIDES.seated;
}

function isAudioEnabled() {
  return state.audio.guideEnabled || state.audio.musicEnabled;
}

function audioButtonLabel() {
  if (!state.audio.unlocked && isAudioEnabled()) return "Activar audio";
  return isAudioEnabled() ? "Silenciar" : "Activar audio";
}

function audioStatusLabel() {
  if (!isAudioEnabled()) return "Audio apagado";
  return state.audio.unlocked ? "Voz y música activas" : "Audio pendiente";
}

function syncAudioUi() {
  const button = document.querySelector("[data-audio-toggle]");
  const status = document.querySelector("[data-audio-status]");
  if (button) {
    button.textContent = audioButtonLabel();
    button.setAttribute("aria-pressed", String(isAudioEnabled()));
  }
  if (status) status.textContent = audioStatusLabel();
}

async function toggleAudio() {
  if (isAudioEnabled() && !state.audio.unlocked) {
    await unlockAudio();
    if (state.audio.unlocked && state.session.running && !state.session.paused && state.routine) {
      startRoutineAudio(state.routine);
    }
    syncAudioUi();
    return;
  }

  if (!isAudioEnabled()) {
    state.audio.guideEnabled = true;
    state.audio.musicEnabled = true;
    await unlockAudio();
    if (state.session.running && !state.session.paused && state.routine) {
      startRoutineAudio(state.routine);
    }
    syncAudioUi();
    return;
  }

  state.audio.guideEnabled = false;
  state.audio.musicEnabled = false;
  stopGuideAudio();
  stopRoutineAudio();
  syncAudioUi();
}

async function unlockAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    state.audio.unlocked = "Audio" in window;
    syncAudioUi();
    return state.audio.unlocked;
  }

  if (!state.audio.context) {
    state.audio.context = new AudioContextClass();
  }

  try {
    if (state.audio.context.state === "suspended") {
      await state.audio.context.resume();
    }
    state.audio.unlocked = state.audio.context.state === "running" || "Audio" in window;
  } catch (error) {
    state.audio.unlocked = "Audio" in window;
  }

  syncAudioUi();
  return state.audio.unlocked;
}

async function startRoutineAudio(routine) {
  if (!state.audio.musicEnabled) {
    syncAudioUi();
    return;
  }

  const context = state.audio.context;
  if (state.audio.routineId === routine.id && (state.audio.musicElement || state.audio.musicGain)) {
    pauseRoutineAudio(false);
    return;
  }

  stopRoutineAudio();

  const theme = musicThemeFor(routine);
  const canUseWebAudio = context?.state === "running";
  const master = canUseWebAudio ? context.createGain() : null;
  const nodes = master ? [master] : [];
  let hasTrack = false;
  state.audio.musicIntervals = [];

  if (master) {
    const now = context.currentTime;
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(TRACK_VOLUME, now + 2.2);
    master.connect(context.destination);
  }

  if (theme.file && (await audioAssetExists(theme.file))) {
    const audioElement = new Audio(theme.file);
    audioElement.loop = true;
    audioElement.preload = "auto";
    audioElement.crossOrigin = "anonymous";
    audioElement.volume = 0.0001;
    audioElement.playsInline = true;

    state.audio.musicElement = audioElement;
    state.audio.musicSource = null;
    hasTrack = true;

    try {
      await audioElement.play();
      fadeMediaElementTo(TRACK_VOLUME, 2.2);
    } catch (error) {
      hasTrack = false;
    }
  }

  if (master && (theme.rain || !hasTrack)) {
    nodes.push(...startRainLayer(context, master, hasTrack ? RAIN_VOLUME : RAIN_VOLUME * 1.6));
  }

  state.audio.musicGain = master;
  state.audio.musicNodes = nodes;
  state.audio.routineId = routine.id;
  updateMediaSession(theme);
  syncAudioUi();
}

function startGuideAudio(type, mood) {
  if (!state.audio.guideEnabled) return false;

  const file = GUIDE_AUDIO[type]?.[mood];
  if (!file) return false;

  const guideKey = `${type}:${mood}`;
  if (state.audio.guideKey === guideKey && state.audio.guideElement && !state.audio.guideElement.ended) {
    state.audio.guideElement.play().catch(() => {});
    return true;
  }

  stopGuideAudio();

  const guideElement = new Audio(file);
  guideElement.preload = "auto";
  guideElement.crossOrigin = "anonymous";
  guideElement.volume = GUIDE_VOLUME;
  guideElement.playsInline = true;
  state.audio.guideElement = guideElement;
  state.audio.guideKey = guideKey;

  guideElement
    .play()
    .then(() => {
      syncAudioUi();
    })
    .catch(() => {
      stopGuideAudio();
    });
  try {
    syncAudioUi();
    return true;
  } catch (error) {
    stopGuideAudio();
    return false;
  }
}

function pauseGuideAudio(paused) {
  const guideElement = state.audio.guideElement;
  if (!guideElement) return;

  if (paused) guideElement.pause();
  else if (!guideElement.ended) guideElement.play().catch(() => {});
}

function stopGuideAudio() {
  if (!state.audio.guideElement) {
    state.audio.guideKey = null;
    return;
  }

  state.audio.guideElement.pause();
  state.audio.guideElement.src = "";
  state.audio.guideElement.load();
  state.audio.guideElement = null;
  state.audio.guideKey = null;
}

function pauseRoutineAudio(paused, targetVolume = TRACK_VOLUME) {
  const context = state.audio.context;
  const gain = state.audio.musicGain;
  if (!gain && !state.audio.musicElement) return;

  fadeRoutineAudioTo(paused ? 0.0001 : targetVolume, 0.8);

  if (state.audio.musicElement) {
    if (paused) {
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "paused";
      window.setTimeout(() => {
        if ((state.session.paused || state.posture.paused) && state.audio.musicElement) state.audio.musicElement.pause();
      }, 850);
    } else {
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "playing";
      state.audio.musicElement.play().catch(() => {});
    }
  }
}

function fadeRoutineAudioTo(targetVolume, durationSeconds) {
  const context = state.audio.context;
  const gain = state.audio.musicGain;
  fadeMediaElementTo(targetVolume, durationSeconds);
  if (!context || !gain) return;

  const now = context.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now);
  gain.gain.exponentialRampToValueAtTime(Math.max(targetVolume, 0.0001), now + durationSeconds);
}

function fadeMediaElementTo(targetVolume, durationSeconds) {
  const element = state.audio.musicElement;
  if (!element) return;

  state.audio.musicIntervals.forEach((timerId) => window.clearInterval(timerId));
  state.audio.musicIntervals = [];
  const startVolume = element.volume;
  const endVolume = Math.max(0, Math.min(targetVolume, 1));
  const startedAt = performance.now();
  const durationMs = Math.max(durationSeconds * 1000, 1);
  const timerId = window.setInterval(() => {
    const progress = Math.min((performance.now() - startedAt) / durationMs, 1);
    element.volume = startVolume + (endVolume - startVolume) * progress;
    if (progress >= 1) {
      window.clearInterval(timerId);
      state.audio.musicIntervals = state.audio.musicIntervals.filter((id) => id !== timerId);
    }
  }, 80);

  state.audio.musicIntervals.push(timerId);
}

function updateMediaSession(theme) {
  if (!("mediaSession" in navigator) || !("MediaMetadata" in window)) return;

  navigator.mediaSession.metadata = new MediaMetadata({
    title: state.routine?.name || "Respiracion Yogui",
    artist: "Respiracion Yogui",
    album: theme.name,
  });
  navigator.mediaSession.playbackState = "playing";
}

function stopRoutineAudio() {
  const context = state.audio.context;
  const nodes = state.audio.musicNodes;

  if (context && state.audio.musicGain) {
    const now = context.currentTime;
    state.audio.musicGain.gain.cancelScheduledValues(now);
    state.audio.musicGain.gain.setValueAtTime(Math.max(state.audio.musicGain.gain.value, 0.0001), now);
    state.audio.musicGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
  }

  if (state.audio.musicElement) {
    state.audio.musicElement.pause();
    state.audio.musicElement.src = "";
    state.audio.musicElement.load();
  }

  nodes.forEach((node) => {
    if (typeof node.stop === "function") {
      try {
        node.stop(context ? context.currentTime + 0.3 : 0);
      } catch (error) {
        // Already stopped.
      }
    }
  });

  state.audio.musicGain = null;
  state.audio.musicElement = null;
  state.audio.musicSource = null;
  state.audio.musicNodes = [];
  state.audio.musicIntervals.forEach((timerId) => {
    window.clearInterval(timerId);
    window.clearTimeout(timerId);
  });
  state.audio.musicIntervals = [];
  state.audio.routineId = null;
  if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "none";
}

async function audioAssetExists(url) {
  if (assetAvailability.has(url)) return assetAvailability.get(url);

  try {
    const response = await fetch(url, { method: "HEAD", cache: "no-store" });
    const exists = response.ok;
    assetAvailability.set(url, exists);
    return exists;
  } catch (error) {
    assetAvailability.set(url, false);
    return false;
  }
}

function startRainLayer(context, destination, volume) {
  const rainSource = context.createBufferSource();
  const rainFilter = context.createBiquadFilter();
  const rainGain = context.createGain();
  const rumbleSource = context.createBufferSource();
  const rumbleFilter = context.createBiquadFilter();
  const rumbleGain = context.createGain();
  const nodes = [rainSource, rainFilter, rainGain, rumbleSource, rumbleFilter, rumbleGain];

  rainSource.buffer = createRainNoiseBuffer(context, 0.985);
  rainSource.loop = true;
  rainFilter.type = "bandpass";
  rainFilter.frequency.setValueAtTime(1550, context.currentTime);
  rainFilter.Q.setValueAtTime(0.55, context.currentTime);
  rainGain.gain.setValueAtTime(volume, context.currentTime);
  rainSource.connect(rainFilter);
  rainFilter.connect(rainGain);
  rainGain.connect(destination);

  rumbleSource.buffer = createRainNoiseBuffer(context, 0.995);
  rumbleSource.loop = true;
  rumbleFilter.type = "lowpass";
  rumbleFilter.frequency.setValueAtTime(260, context.currentTime);
  rumbleFilter.Q.setValueAtTime(0.2, context.currentTime);
  rumbleGain.gain.setValueAtTime(volume * 0.22, context.currentTime);
  rumbleSource.connect(rumbleFilter);
  rumbleFilter.connect(rumbleGain);
  rumbleGain.connect(destination);

  rainSource.start();
  rumbleSource.start();
  return nodes;
}

function createRainNoiseBuffer(context, smoothing) {
  const length = context.sampleRate * 4;
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);
  let previous = 0;

  for (let index = 0; index < length; index += 1) {
    previous = previous * smoothing + (Math.random() * 2 - 1) * (1 - smoothing);
    data[index] = previous;
  }

  return buffer;
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
