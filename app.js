const DB_NAME = "respiracion-yogui";
const DB_VERSION = 1;
const TRACK_VOLUME = 0.14;
const POSTURE_MUSIC_VOLUME = 0.08;
const RAIN_VOLUME = 0.07;
const GUIDE_VOLUME = 0.9;
const BREATHING_DURATION_SECONDS = 5 * 60;
const POSTURE_DURATION_SECONDS = 5 * 60;
const BREATHING_PRIMER_SECONDS = 12;

const MODALITIES = [
  {
    id: "breathing",
    label: "Respirar",
    duration: 5,
    description: "Una guía de respiración para bajar el ritmo y volver al presente.",
  },
  {
    id: "movement",
    label: "Moverme",
    duration: 5,
    description: "Movimientos suaves en una silla para aflojar el cuerpo.",
  },
  {
    id: "complete",
    label: "Pausa completa",
    duration: 10,
    description: "Cinco minutos de respiración y cinco de movimiento.",
  },
];

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
    name: "Sleep Music No. 1",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
    rain: false,
  },
  tired: {
    name: "Sleep Music No. 1",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
    rain: false,
  },
  distracted: {
    name: "Sleep Music No. 1 + lluvia suave",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
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
    name: "Sleep Music No. 1",
    file: "assets/audio/sleep-music-no-1-chris-haugen.mp3",
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
    alternative: "Si lo necesitás, apoyá la espalda en el respaldo y mantené la columna cómoda.",
    image: "assets/postures/seated.webp",
    alt: "Persona sentada de perfil, con ambos pies apoyados, manos sobre los muslos y espalda larga.",
  },
  "arms-up": {
    movement: "Paso a paso: inhalá y subí brazos; exhalá y bajalos despacio, con cuello relajado.",
    alternative: "Menor amplitud: elevá los brazos solo hasta los hombros o mové uno por vez.",
    image: "assets/postures/arms-up.webp",
    alt: "Secuencia sentada que muestra los brazos relajados y luego elevados por los costados.",
  },
  twist: {
    movement: "Paso a paso: inhalá subiendo un brazo, exhalá en torsión, respiramos y cambiamos de lado.",
    alternative: "Menor amplitud: girá solo unos grados y mantené las manos sobre los muslos.",
    image: "assets/postures/twist.webp",
    alt: "Secuencia sentada de torsión suave hacia la izquierda, centro y torsión hacia la derecha.",
  },
  "forward-fold": {
    movement: "Paso a paso: alargá espalda, exhalá bajando el torso y volvé vértebra por vértebra.",
    alternative: "Menor amplitud: apoyá las manos en los muslos e incliná el torso apenas hacia adelante.",
    image: "assets/postures/forward-fold.webp",
    alt: "Secuencia de perfil que muestra la postura sentada erguida y una flexión suave hacia las piernas.",
  },
  "side-stretch": {
    movement: "Paso a paso: brazo derecho arriba e inclinación izquierda; después brazo izquierdo y derecha.",
    alternative: "Menor amplitud: dejá la mano en la cintura e inclinate solo un poco hacia cada lado.",
    image: "assets/postures/side-stretch.webp",
    alt: "Secuencia sentada de inclinación lateral hacia ambos lados con un brazo elevado.",
  },
  "heart-opener": {
    movement: "Paso a paso: tomá la silla, abrí el pecho al inhalar y aflojá al exhalar.",
    alternative: "Menor amplitud: dejá las manos en los muslos y ensanchá suavemente las clavículas.",
    image: "assets/postures/heart-opener.webp",
    alt: "Secuencia sentada que muestra una apertura suave del pecho con las manos en los bordes de la silla.",
  },
  shoulders: {
    movement: "Paso a paso: hombros arriba al inhalar; atrás y abajo al exhalar.",
    alternative: "Menor amplitud: hacé círculos pequeños o mové un hombro por vez.",
    image: "assets/postures/shoulders.webp",
    alt: "Secuencia sentada que muestra los hombros relajados, elevados y luego hacia atrás y abajo.",
  },
};

const assetAvailability = new Map();
const memoryStores = {
  User: [],
  Routine: [],
  Session: [],
};

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
  eventsBound: false,
  storage: {
    temporary: false,
  },
  user: null,
  mood: null,
  modality: readLocalPreference("modality"),
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
    phaseKey: "",
    preparationComplete: false,
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
    seekDragging: false,
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
    issue: "",
  },
};

const app = document.querySelector("#app");
const appStatus = document.querySelector("#app-status");

document.addEventListener("DOMContentLoaded", () => {
  initializeApp().catch(handleStartupError);
});

async function initializeApp() {
  renderLoadingState();
  initPersistentAudioHandling();
  if (new URLSearchParams(window.location.search).get("storage") === "temporary") {
    state.storage.temporary = true;
  } else {
    state.db = await openDatabase();
  }
  await completeInitialization();
}

async function completeInitialization() {
  await seedRoutines();
  state.user = await getOrCreateUser();
  if (!state.eventsBound) {
    window.addEventListener("hashchange", renderRouteSafely);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    state.eventsBound = true;
  }
  renderRouteSafely();
}

function renderLoadingState() {
  app.className = "app-shell";
  app.setAttribute("aria-busy", "true");
  app.innerHTML = `
    <section class="screen panel loading-panel" role="status">
      <div class="brand"><span class="brand-mark"></span><span>Respiración Yogui</span></div>
      <span class="loading-indicator" aria-hidden="true"></span>
      <h2>Preparando tu pausa</h2>
      <p>Estamos cargando las rutinas guardadas en este dispositivo.</p>
    </section>
  `;
}

function handleStartupError(error) {
  logTechnicalError("inicio", error);
  app.removeAttribute("aria-busy");
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel">
      <div class="brand"><span class="brand-mark"></span><span>Respiración Yogui</span></div>
      <p class="eyebrow">Pausa consciente</p>
      <h2>No pude iniciar la aplicación</h2>
      <p class="lead">El navegador no permitió abrir el historial local. Podés reintentar o practicar ahora en modo temporal.</p>
      <div class="actions">
        <button class="button" type="button" data-retry-start>Reintentar</button>
        <button class="button button-secondary" type="button" data-temporary-start>Usar sin historial</button>
      </div>
      <p class="local-note">En modo temporal, la práctica funciona pero se borra al cerrar o recargar esta página.</p>
    </section>
  `;

  document.querySelector("[data-retry-start]")?.addEventListener("click", () => window.location.reload());
  document.querySelector("[data-temporary-start]")?.addEventListener("click", async () => {
    state.storage.temporary = true;
    state.db = null;
    resetMemoryStores();
    renderLoadingState();
    try {
      await completeInitialization();
    } catch (temporaryError) {
      logTechnicalError("modo temporal", temporaryError);
      renderFatalError();
    }
  });
}

function renderFatalError() {
  app.removeAttribute("aria-busy");
  app.innerHTML = `
    <section class="screen panel">
      <h2>No pudimos cargar las rutinas</h2>
      <p class="lead">Revisá tu conexión y probá nuevamente.</p>
      <div class="actions"><button class="button" type="button" data-retry-start>Reintentar</button></div>
    </section>
  `;
  document.querySelector("[data-retry-start]")?.addEventListener("click", () => window.location.reload());
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

function resetMemoryStores() {
  Object.values(memoryStores).forEach((records) => records.splice(0, records.length));
}

function cloneRecord(record) {
  return record ? JSON.parse(JSON.stringify(record)) : record;
}

function nextMemoryId(storeName) {
  return memoryStores[storeName].reduce((maximum, record) => Math.max(maximum, Number(record.id) || 0), 0) + 1;
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAll(storeName) {
  if (state.storage.temporary) return memoryStores[storeName].map(cloneRecord);
  return requestToPromise(tx(storeName).getAll());
}

async function addRecord(storeName, record) {
  if (state.storage.temporary) {
    const id = nextMemoryId(storeName);
    memoryStores[storeName].push(cloneRecord({ ...record, id }));
    return id;
  }
  return requestToPromise(tx(storeName, "readwrite").add(record));
}

async function putRecord(storeName, record) {
  if (state.storage.temporary) {
    const index = memoryStores[storeName].findIndex((storedRecord) => storedRecord.id === record.id);
    if (index >= 0) memoryStores[storeName][index] = cloneRecord(record);
    else memoryStores[storeName].push(cloneRecord(record));
    return record.id;
  }
  return requestToPromise(tx(storeName, "readwrite").put(record));
}

async function getRecord(storeName, id) {
  const localKey = Number.isNaN(Number(id)) ? id : Number(id);
  if (state.storage.temporary) {
    return cloneRecord(memoryStores[storeName].find((record) => record.id === localKey));
  }
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

  if (route === "auth") return navigate("modalities");
  else if (route === "modalities") renderModalityPage();
  else if (route === "moods") await renderMoodPage();
  else if (route.startsWith("routine/")) await renderRoutinePage(route.split("/")[1]);
  else if (route.startsWith("session/")) await renderSessionPage(route.split("/")[1]);
  else if (route.startsWith("postures/")) await renderPosturePage(route.split("/")[1]);
  else if (route.startsWith("feedback/")) await renderFeedbackPage(route.split("/")[1]);
  else if (route === "privacy") renderPrivacyPage();
  else if (route === "safety") renderSafetyPage();
  else renderWelcomePage();

  app.removeAttribute("aria-busy");
  renderTemporaryModeNotice();
  focusPrimaryHeading();
}

function renderRouteSafely() {
  renderRoute().catch((error) => {
    logTechnicalError("navegación", error);
    renderRecoverableError();
  });
}

function renderTemporaryModeNotice() {
  if (!state.storage.temporary) return;
  app.classList.add("has-temporary-notice");
  app.insertAdjacentHTML(
    "afterbegin",
    `<div class="temporary-notice" role="status">
      <strong>Modo temporal</strong>
      <span>La práctica funciona, pero no quedará en tu historial.</span>
      <button type="button" data-retry-storage>Reintentar guardado</button>
    </div>`,
  );
  document.querySelector("[data-retry-storage]")?.addEventListener("click", retryPersistentStorage);
}

function retryPersistentStorage() {
  const url = new URL(window.location.href);
  url.searchParams.delete("storage");
  url.hash = "welcome";
  window.location.href = url.toString();
}

function renderRecoverableError() {
  stopSessionTimers();
  stopPostureTimers();
  app.removeAttribute("aria-busy");
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel">
      <div class="brand"><span class="brand-mark"></span><span>Respiración Yogui</span></div>
      <h2>Algo no cargó como esperábamos</h2>
      <p class="lead">Tu práctica no se marcó como completa. Podés reintentar esta pantalla o volver al inicio.</p>
      <div class="actions">
        <button class="button" type="button" data-retry-screen>Reintentar</button>
        <button class="button button-secondary" type="button" data-route="welcome">Volver al inicio</button>
      </div>
    </section>
  `;
  document.querySelector("[data-retry-screen]")?.addEventListener("click", renderRouteSafely);
  bindRoutes();
}

function logTechnicalError(context, error) {
  const message = error instanceof Error ? error.message : "Error sin detalle";
  console.error(`[Respiración Yogui] ${context}: ${message}`);
}

function renderWelcomePage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel welcome-panel">
      ${brandBar()}
      <p class="eyebrow">Pausa consciente en tu jornada</p>
      <h1>Respiración Yogui</h1>
      <p class="lead lead-prominent">
        Pausas guiadas para respirar y mover el cuerpo desde tu escritorio.
      </p>
      <p class="welcome-benefit">
        En 5 o 10 minutos podés interrumpir un período largo sentado y sumar movimiento suave a tu día.
        <a href="https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noreferrer">Basado en recomendaciones de la OMS</a>.
      </p>
      <div class="actions welcome-actions">
        <button class="button" type="button" data-route="modalities">Elegir mi pausa</button>
      </div>
      <p class="local-note">Sin cuenta. Tus prácticas quedan guardadas solamente en este dispositivo.</p>
      ${appFooter()}
    </section>
  `;
  bindRoutes();
}

function renderModalityPage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("welcome")}
      <p class="step-label">Paso 1 de 3</p>
      <h2>¿Qué necesitás ahora?</h2>
      <p class="lead">Elegí el tipo de pausa. Todas se hacen desde una silla y con tu propia amplitud.</p>
      <div class="choice-grid modality-grid">
        ${MODALITIES.map(
          (modality) => `
            <button class="choice-card" type="button" data-modality="${modality.id}" aria-pressed="${String(state.modality === modality.id)}">
              <span class="choice-duration">${modality.duration} min</span>
              <strong>${modality.label}</strong>
              <span>${modality.description}</span>
            </button>
          `,
        ).join("")}
      </div>
      ${appFooter()}
    </section>
  `;

  bindRoutes();
  document.querySelectorAll("[data-modality]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-modality]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      state.modality = button.dataset.modality;
      writeLocalPreference("modality", state.modality);
      navigate("moods");
    });
  });
}

function renderMoodPage() {
  if (!modalityFor(state.modality)) return navigate("modalities");
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("modalities")}
      <p class="step-label">Paso 2 de 3 · ${modalityFor(state.modality).label}</p>
      <h2>¿Cómo te sientes ahora?</h2>
      <p class="lead">Elegí la opción que más se acerque a este momento.</p>
      <div class="mood-grid">
        ${MOODS.map(
          (mood) => `
            <button class="mood-card" type="button" data-mood="${mood.id}" aria-pressed="${String(state.mood === mood.id)}">
              <h3>${mood.label}</h3>
              <span>${mood.hint}</span>
            </button>
          `,
        ).join("")}
      </div>
      ${appFooter()}
    </section>
  `;

  bindRoutes();
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

  const modality = modalityFor(state.modality) || MODALITIES[2];
  state.modality = modality.id;

  state.routine = routine;
  state.mood = routine.mood;

  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("moods")}
      <p class="step-label">Paso 3 de 3 · Tu recomendación</p>
      <h2>${routine.name}</h2>
      <div class="recommendation-summary">
        <div>
          <span class="summary-label">Objetivo</span>
          <strong>${sentenceCase(routine.objective)}</strong>
        </div>
        <div>
          <span class="summary-label">Modalidad</span>
          <strong>${modality.label} · ${modality.duration} min</strong>
        </div>
      </div>
      <p class="lead recommendation-copy">${recommendationDescription(routine, modality)}</p>
      <div class="actions recommendation-actions">
        <button class="button" type="button" data-start-selected="${routine.id}">${startActionLabel(modality)} · ${modality.duration} min</button>
        <button class="button button-secondary" type="button" data-route="moods">Cambiar estado</button>
        <button class="button button-secondary" type="button" data-route="modalities">Cambiar modalidad</button>
      </div>
      <details class="routine-details">
        <summary>Ver detalles de la rutina</summary>
        <dl class="detail-list">
          ${modality.id !== "movement" ? `<div class="detail"><dt>Patrón respiratorio</dt><dd>${patternLabel(routine)}</dd></div>` : ""}
          <div class="detail"><dt>Música</dt><dd>${musicThemeFor(routine).name}</dd></div>
          <div class="detail"><dt>Duración</dt><dd>${modalityDurationDescription(modality)}</dd></div>
        </dl>
      </details>
      ${safetyDialogMarkup()}
      ${appFooter()}
    </section>
  `;

  bindRoutes();
  document.querySelector("[data-start-selected]").addEventListener("click", async () => {
    const start = () => startRoutineSession(routine, { modality: modality.id });
    if (readLocalPreference("safety-seen") === "yes") await start();
    else openSafetyDialog(start);
  });
}

async function startRoutineSession(routine, options = {}) {
  const modality = modalityFor(options.modality) || MODALITIES[2];
  await unlockAudio();
  const sessionId = await addRecord("Session", {
    user: state.user.id,
    routine: routine.id,
    mood_before: routine.mood,
    mood_after: "",
    modality: modality.id,
    planned_minutes: modality.duration,
    completed_parts: [],
    date: new Date().toISOString(),
    completed: false,
    interrupted: false,
    skip_postures: modality.id === "breathing",
  });
  state.sessionOptions.set(sessionId, { modality: modality.id });
  state.sessionId = sessionId;
  navigate(modality.id === "movement" ? `postures/${sessionId}` : `session/${sessionId}`);
}

async function renderSessionPage(sessionId) {
  const session = await safeGetRecord("Session", sessionId);
  if (!session) return navigate("moods");

  const routine = await safeGetRecord("Routine", session.routine);
  if (!routine) return navigate("moods");

  state.sessionId = session.id;
  state.routine = routine;
  const modality = modalityFor(session.modality) || (session.skip_postures ? MODALITIES[0] : MODALITIES[2]);

  app.className = "app-shell";
  app.innerHTML = `
    <section class="session-screen">
      <div class="topbar">
        <div class="brand"><span class="brand-mark"></span><span>${routine.name}</span></div>
        <div class="timer" data-timer>${formatTime(breathingDurationSeconds(routine))}</div>
      </div>
      <div class="session-space">
        <p class="eyebrow">5 minutos de respiración</p>
        <div class="preparation-card" data-preparation>
          <div class="preparation-progress" aria-hidden="true"><span data-preparation-progress></span></div>
          <span class="preparation-count" data-preparation-count>${BREATHING_PRIMER_SECONDS}</span>
          <h2 data-preparation-heading>Prepará tu espacio</h2>
          <p>Sentate con ambos pies apoyados y aflojá los hombros. Durante estos segundos, respirás con naturalidad.</p>
          <p class="safety-inline">Detenete si sentís mareo, dolor, dificultad para respirar o un malestar que aumenta.</p>
        </div>
        <div class="breath-wrap" data-breath-wrap hidden>
          <div class="breath-circle" data-circle>
            <div class="breath-text" data-instruction>Inhala</div>
          </div>
        </div>
        <div class="session-meta">
          <span>${patternLabel(routine)}</span>
          <span class="audio-status" data-audio-status>${audioStatusLabel()}</span>
        </div>
        <p class="media-notice" data-media-notice role="status" ${state.audio.issue ? "" : "hidden"}>${state.audio.issue}</p>
        <div class="actions" style="justify-content: center;">
          <button class="button button-soft" type="button" data-pause>Pausar</button>
          ${modality.id === "complete" ? `<button class="button button-secondary" type="button" data-skip-movement>Saltar a movimiento</button>` : ""}
          <button class="button button-danger" type="button" data-finish>Terminar pausa</button>
        </div>
      </div>
      ${confirmationDialogMarkup()}
    </section>
  `;

  startBreathingSession(routine, session.id);
  document.querySelector("[data-pause]").addEventListener("click", togglePause);
  document.querySelector("[data-skip-movement]")?.addEventListener("click", () => {
    openConfirmationDialog({
      title: "¿Pasar a movimiento?",
      message: "La respiración quedará registrada como interrumpida y la música continuará en la rutina de posturas.",
      saved: "Se guardará que comenzaste respiración y continuaste con movimiento.",
      confirmLabel: "Sí, pasar a movimiento",
      onConfirm: () => finishSession(session.id, false, { skipToMovement: true }),
    });
  });
  document.querySelector("[data-finish]").addEventListener("click", () => {
    openConfirmationDialog({
      title: "¿Terminar esta pausa?",
      message: "Vas a ir al cierre y podrás registrar cómo te sentís.",
      saved: "Se guardarán la modalidad, el tiempo realizado y las partes que hayas completado.",
      confirmLabel: "Sí, terminar",
      onConfirm: () => finishSession(session.id, false, { terminate: true }),
    });
  });
}

async function renderFeedbackPage(sessionId) {
  stopSessionTimers();
  stopPostureTimers();
  const session = await safeGetRecord("Session", sessionId);
  if (!session) return navigate("moods");
  const insights = await buildSessionInsights();
  const modality = modalityFor(session.modality) || (session.skip_postures ? MODALITIES[0] : MODALITIES[2]);

  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("modalities")}
      <p class="completion-note">${completionSummary(session, modality)}</p>
      <h2>¿Cómo te sientes después?</h2>
      <p class="lead">Podés registrar una respuesta o continuar sin hacerlo. No es una evaluación clínica.</p>
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
      <p class="saved-note" data-saved hidden>Respuesta guardada en este dispositivo.</p>
      <div class="insights" data-insights>
        ${renderInsights(insights)}
      </div>
      <div class="actions">
        <button class="button" type="button" data-route="modalities">Elegir otra pausa</button>
        <button class="button button-secondary" type="button" data-route="welcome">Omitir respuesta</button>
      </div>
      ${appFooter()}
    </section>
  `;

  bindRoutes();
  document.querySelectorAll("[data-after]").forEach((button) => {
    button.addEventListener("click", async () => {
      document.querySelectorAll("[data-after]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      session.mood_after = button.dataset.after;
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
  const firstPose = postureRoutine.poses[0];
  const firstGuide = postureGuideFor(firstPose);
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
        <div class="posture-stage">
          <figure class="posture-visual">
            <img src="${firstGuide.image}" alt="${firstGuide.alt}" data-posture-image />
            <figcaption class="posture-image-fallback" data-posture-image-fallback hidden>
              La imagen no está disponible. Seguí la indicación escrita y usá una amplitud cómoda.
            </figcaption>
          </figure>
          <div class="posture-copy">
            <p class="eyebrow">5 minutos de movimiento</p>
            <h2 data-posture-name>${firstPose.name}</h2>
            <p class="lead" data-posture-cue>${firstPose.cue}</p>
            <p class="posture-movement" data-posture-movement>${firstGuide.movement}</p>
            <p class="posture-alternative" data-posture-alternative>${firstGuide.alternative}</p>
          </div>
        </div>
        <div class="posture-progress-row">
          <span class="audio-status" data-posture-step>Postura 1 de ${postureRoutine.poses.length}</span>
          <span data-posture-next>Después: ${postureRoutine.poses[1]?.name || "Cierre"}</span>
        </div>
        <div class="posture-audio-control">
          <label for="posture-audio-seek">Avance del audio</label>
          <input
            id="posture-audio-seek"
            type="range"
            min="0"
            max="${POSTURE_DURATION_SECONDS}"
            step="1"
            value="0"
            data-posture-seek
            aria-describedby="posture-seek-time"
          />
          <output id="posture-seek-time" data-posture-seek-time>00:00 / 05:00</output>
        </div>
        <p class="media-notice" data-media-notice role="status" ${state.audio.issue ? "" : "hidden"}>${state.audio.issue}</p>
        <div class="actions" style="justify-content: center;">
          <button class="button button-soft" type="button" data-posture-pause>Pausar</button>
          <button class="button button-danger" type="button" data-posture-finish>Terminar pausa</button>
        </div>
      </div>
      ${confirmationDialogMarkup()}
    </section>
  `;

  bindPostureImageFallback();
  startPostureSession(postureRoutine, session.id);
  document.querySelector("[data-posture-pause]").addEventListener("click", togglePosturePause);
  const postureSeek = document.querySelector("[data-posture-seek]");
  postureSeek.addEventListener("pointerdown", () => {
    state.posture.seekDragging = true;
  });
  postureSeek.addEventListener("pointerup", () => {
    state.posture.seekDragging = false;
  });
  postureSeek.addEventListener("pointercancel", () => {
    state.posture.seekDragging = false;
  });
  postureSeek.addEventListener("change", () => {
    state.posture.seekDragging = false;
  });
  postureSeek.addEventListener("input", (event) => {
    seekPostureSession(Number(event.currentTarget.value), postureRoutine, session.id);
  });
  document.querySelector("[data-posture-finish]").addEventListener("click", () => {
    openConfirmationDialog({
      title: "¿Terminar esta pausa?",
      message: "Vas a ir al cierre y podrás registrar cómo te sentís.",
      saved: "Se guardarán la modalidad, el tiempo realizado y las partes que hayas completado.",
      confirmLabel: "Sí, terminar",
      onConfirm: () => finishPostureSession(session.id, { completed: false }),
    });
  });
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

function appFooter() {
  return `
    <footer class="app-footer">
      <button type="button" data-route="safety">Bienestar y seguridad</button>
      <button type="button" data-route="privacy">Privacidad</button>
    </footer>
  `;
}

function safetyDialogMarkup() {
  return `
    <dialog class="practice-dialog" data-safety-dialog aria-labelledby="safety-dialog-title">
      <p class="eyebrow">Antes de tu primera práctica</p>
      <h2 id="safety-dialog-title">Cuidá tu comodidad</h2>
      <p>Respirá con naturalidad, no fuerces los movimientos y detenete si aparece dolor, mareo, dificultad para respirar o un malestar que aumenta.</p>
      <p class="dialog-note">Esta aplicación ofrece orientación general de bienestar y no reemplaza atención profesional.</p>
      <div class="dialog-actions">
        <button class="button" type="button" data-safety-accept>Entiendo, comenzar</button>
        <button class="button button-secondary" type="button" data-safety-cancel>Volver</button>
      </div>
    </dialog>
  `;
}

function openSafetyDialog(onStart) {
  const dialog = document.querySelector("[data-safety-dialog]");
  if (!dialog) return onStart();
  dialog.querySelector("[data-safety-cancel]").onclick = () => dialog.close();
  dialog.querySelector("[data-safety-accept]").onclick = async () => {
    writeLocalPreference("safety-seen", "yes");
    dialog.close();
    await onStart();
  };
  dialog.showModal();
}

function confirmationDialogMarkup() {
  return `
    <dialog class="practice-dialog" data-confirmation-dialog aria-labelledby="confirmation-dialog-title">
      <h2 id="confirmation-dialog-title" data-confirmation-title>¿Terminar esta pausa?</h2>
      <p data-confirmation-message></p>
      <p class="dialog-note" data-confirmation-saved></p>
      <div class="dialog-actions">
        <button class="button button-danger" type="button" data-confirmation-accept>Confirmar</button>
        <button class="button button-secondary" type="button" data-confirmation-cancel>Seguir practicando</button>
      </div>
    </dialog>
  `;
}

function openConfirmationDialog({ title, message, saved, confirmLabel, onConfirm }) {
  const dialog = document.querySelector("[data-confirmation-dialog]");
  if (!dialog) return;
  dialog.querySelector("[data-confirmation-title]").textContent = title;
  dialog.querySelector("[data-confirmation-message]").textContent = message;
  dialog.querySelector("[data-confirmation-saved]").textContent = saved;
  const accept = dialog.querySelector("[data-confirmation-accept]");
  accept.textContent = confirmLabel;
  accept.onclick = async () => {
    accept.disabled = true;
    dialog.close();
    await onConfirm();
  };
  dialog.querySelector("[data-confirmation-cancel]").onclick = () => dialog.close();
  dialog.showModal();
}

function bindPostureImageFallback() {
  const image = document.querySelector("[data-posture-image]");
  const fallback = document.querySelector("[data-posture-image-fallback]");
  if (!image || !fallback) return;
  image.addEventListener("error", () => {
    image.hidden = true;
    fallback.hidden = false;
    announce("La imagen no está disponible. Seguí la indicación escrita.");
  });
  image.addEventListener("load", () => {
    image.hidden = false;
    fallback.hidden = true;
  });
}

function renderPrivacyPage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel information-page">
      ${brandBar("welcome")}
      <p class="eyebrow">Privacidad</p>
      <h2>Tu información queda en tu dispositivo</h2>
      <p class="lead">Respiración Yogui funciona sin cuenta, anuncios ni herramientas de seguimiento.</p>
      <div class="information-list">
        <section>
          <h3>Qué se guarda</h3>
          <p>La rutina elegida, cómo te sentías, la modalidad, la duración, las partes completadas y tu respuesta opcional al terminar.</p>
        </section>
        <section>
          <h3>Para qué se usa</h3>
          <p>Solo para mostrarte un resumen de tus prácticas dentro de esta aplicación.</p>
        </section>
        <section>
          <h3>Dónde queda</h3>
          <p>Los datos se guardan localmente en este navegador. No se envían a un servidor ni aparecen en la dirección de la página.</p>
        </section>
        <section>
          <h3>Cómo se eliminan</h3>
          <p>Podés borrarlos desde la configuración del navegador, eliminando los datos del sitio de Respiración Yogui.</p>
        </section>
      </div>
      ${appFooter()}
    </section>
  `;
  bindRoutes();
}

function renderSafetyPage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel information-page">
      ${brandBar("welcome")}
      <p class="eyebrow">Bienestar y seguridad</p>
      <h2>Practicá sin forzar</h2>
      <p class="lead">Estas pausas ofrecen orientación general de bienestar y no reemplazan atención profesional.</p>
      <div class="information-list">
        <section>
          <h3>Durante la práctica</h3>
          <p>Respirá con naturalidad y usá un rango de movimiento cómodo. Detenete si sentís dolor, mareo, dificultad para respirar o un malestar que aumenta.</p>
        </section>
        <section>
          <h3>Cuándo pedir ayuda</h3>
          <p>Consultá a un profesional calificado si tenés dudas sobre qué movimientos son adecuados para vos. Ante una urgencia, buscá asistencia de emergencia.</p>
        </section>
      </div>
      ${appFooter()}
    </section>
  `;
  bindRoutes();
}

function bindRoutes() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });
}

function modalityFor(id) {
  return MODALITIES.find((modality) => modality.id === id);
}

function recommendationDescription(routine, modality) {
  if (modality.id === "movement") return `${postureRoutineFor(routine.mood).objective}.`;
  if (modality.id === "breathing") return routine.description;
  return `${routine.description} Después, vas a continuar con movimientos suaves en la silla.`;
}

function modalityDurationDescription(modality) {
  if (modality.id === "complete") return "5 minutos de respiración + 5 minutos de movimiento";
  return `${modality.duration} minutos`;
}

function normalizeCompletedParts(parts) {
  return Array.isArray(parts) ? [...new Set(parts)] : [];
}

async function markPartStarted(sessionId, part) {
  const session = await safeGetRecord("Session", sessionId);
  if (!session) return;
  session.started_parts = normalizeCompletedParts(session.started_parts);
  if (!session.started_parts.includes(part)) session.started_parts.push(part);
  await putRecord("Session", session);
}

function completionSummary(session, modality) {
  const completedParts = normalizeCompletedParts(session.completed_parts);
  if (session.completed) return `Completaste ${modality.label.toLowerCase()} · ${modality.duration} min`;
  if (completedParts.length) return `Pausa finalizada · Completaste ${completedParts.map(partLabel).join(" y ")}`;
  return "Pausa finalizada antes de completar la primera parte";
}

function partLabel(part) {
  return part === "breathing" ? "respiración" : "movimiento";
}

function startActionLabel(modality) {
  if (modality.id === "movement") return "Iniciar movimiento";
  if (modality.id === "breathing") return "Iniciar respiración";
  return "Iniciar pausa completa";
}

function readLocalPreference(key) {
  try {
    return window.localStorage.getItem(`respiracion-yogui:${key}`) || "";
  } catch (error) {
    return "";
  }
}

function writeLocalPreference(key, value) {
  try {
    window.localStorage.setItem(`respiracion-yogui:${key}`, value);
  } catch (error) {
    // La aplicación puede continuar aunque el navegador bloquee preferencias locales.
  }
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
  clearMediaIssue();
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
    phaseKey: "",
    preparationComplete: false,
    endingWarned: false,
    finishing: false,
  };

  startRoutineAudio(routine);
  startGuideAudio("breathing", routine.mood);
  markPartStarted(sessionId, "breathing");
  renderTimer();
  updateSessionProgress(sessionId);
  state.session.intervalId = window.setInterval(() => {
    updateSessionProgress(state.sessionId);
  }, 250);
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

function sessionElapsedMilliseconds(now = performance.now()) {
  if (!state.session.running) return 0;
  const pausedMs = state.session.pausedAt ? now - state.session.pausedAt : 0;
  return Math.max(0, now - state.session.startedAt - state.session.pausedTotalMs - pausedMs);
}

function updateSessionProgress(sessionId) {
  if (!state.session.running || state.session.finishing) return;
  state.session.remainingSeconds = sessionRemainingSeconds();
  renderTimer();

  const elapsedMs = sessionElapsedMilliseconds();
  const primerMs = BREATHING_PRIMER_SECONDS * 1000;
  if (elapsedMs < primerMs) updatePreparationUi(elapsedMs, primerMs);
  else {
    completePreparationUi();
    syncBreathingPhase(state.routine, elapsedMs - primerMs);
  }

  if (state.session.remainingSeconds <= 15 && !state.session.endingWarned) {
    prepareSessionEnding();
  }

  if (state.session.remainingSeconds <= 0) {
    finishSession(sessionId, true, { fromTimer: true });
  }
}

function updatePreparationUi(elapsedMs, primerMs) {
  const count = document.querySelector("[data-preparation-count]");
  const progress = document.querySelector("[data-preparation-progress]");
  const remainingSeconds = Math.max(0, Math.ceil((primerMs - elapsedMs) / 1000));
  if (count) count.textContent = String(remainingSeconds);
  if (progress) progress.style.width = `${Math.min(100, (elapsedMs / primerMs) * 100)}%`;
  state.session.currentPhaseLabel = "Prepara";
}

function completePreparationUi() {
  if (state.session.preparationComplete) return;
  state.session.preparationComplete = true;
  const preparation = document.querySelector("[data-preparation]");
  const breathWrap = document.querySelector("[data-breath-wrap]");
  if (preparation) preparation.hidden = true;
  if (breathWrap) breathWrap.hidden = false;
  announce("Comienza el patrón de respiración");
}

function syncBreathingPhase(routine, practiceElapsedMs) {
  const circle = document.querySelector("[data-circle]");
  const instruction = document.querySelector("[data-instruction]");
  if (!circle || !instruction || !routine || state.session.paused || state.session.endingWarned) return;

  const phases = buildPhases(routine);
  const cycleMs = phases.reduce((total, phase) => total + phase.seconds * 1000, 0);
  let cyclePosition = practiceElapsedMs % cycleMs;
  let phaseIndex = 0;
  let phaseStartMs = 0;

  for (let index = 0; index < phases.length; index += 1) {
    const phaseMs = phases[index].seconds * 1000;
    if (cyclePosition < phaseMs) {
      phaseIndex = index;
      break;
    }
    cyclePosition -= phaseMs;
    phaseStartMs += phaseMs;
  }

  const phase = phases[phaseIndex];
  const phaseProgress = Math.min(1, cyclePosition / (phase.seconds * 1000));
  const easedProgress = phase.easing === "linear" ? phaseProgress : phaseProgress * phaseProgress * (3 - 2 * phaseProgress);
  const previousScale = phaseIndex === 0 ? phases[phases.length - 1].scale : phases[phaseIndex - 1].scale;
  const currentScale = previousScale + (phase.scale - previousScale) * easedProgress;
  const cycleNumber = Math.floor(practiceElapsedMs / cycleMs);
  const phaseKey = `${cycleNumber}:${phaseIndex}:${phaseStartMs}`;

  if (state.session.phaseKey !== phaseKey) {
    state.session.phaseKey = phaseKey;
    state.session.currentPhaseIndex = phaseIndex;
    state.session.currentPhaseLabel = phase.label;
    instruction.textContent = phase.label;
    announce(phase.label);
  }

  circle.style.setProperty("--phase-ms", "260ms");
  circle.style.setProperty("--breath-scale", currentScale.toFixed(3));
  circle.style.transitionTimingFunction = "linear";
}

function togglePause() {
  const button = document.querySelector("[data-pause]");
  const circle = document.querySelector("[data-circle]");
  if (state.session.finishing) return;
  state.session.paused = !state.session.paused;
  button.textContent = state.session.paused ? "Continuar" : "Pausar";

  if (state.session.paused) {
    state.session.pausedAt = performance.now();
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
  updateSessionProgress(state.sessionId);
}

function prepareSessionEnding() {
  state.session.endingWarned = true;
  const instruction = document.querySelector("[data-instruction]");
  if (instruction) instruction.textContent = "Cerrando";
  fadeRoutineAudioTo(Math.max(TRACK_VOLUME * 0.42, 0.035), 5);
}

async function finishSession(sessionId, breathingCompleted, options = {}) {
  if (state.session.finishing) return;
  state.session.finishing = true;
  window.clearInterval(state.session.intervalId);
  window.clearTimeout(state.session.phaseTimeoutId);
  const session = await getRecord("Session", sessionId);
  const modality = modalityFor(session?.modality) || (session?.skip_postures ? MODALITIES[0] : MODALITIES[2]);
  const continueToMovement = modality.id === "complete" && (breathingCompleted || options.skipToMovement);
  fadeRoutineAudioTo(continueToMovement ? POSTURE_MUSIC_VOLUME : 0.0001, breathingCompleted ? 1.4 : 0.6);

  if (options.fromTimer) {
    const instruction = document.querySelector("[data-instruction]");
    if (instruction) instruction.textContent = "Terminamos";
    await wait(1400);
  } else {
    await wait(500);
  }

  const breathingSeconds = Math.min(BREATHING_DURATION_SECONDS, Math.round(sessionElapsedMilliseconds() / 1000));
  stopGuideAudio();
  state.session.running = false;
  if (session) {
    session.breathing_seconds = breathingSeconds;
    session.completed_parts = normalizeCompletedParts(session.completed_parts);
    if (breathingCompleted && !session.completed_parts.includes("breathing")) session.completed_parts.push("breathing");
    if (!breathingCompleted) session.interrupted = true;
    session.completed = modality.id === "breathing" && breathingCompleted;
    session.ended_at = continueToMovement ? "" : new Date().toISOString();
    session.date = session.date || new Date().toISOString();
    await putRecord("Session", session);
  }

  if (continueToMovement) navigate(`postures/${sessionId}`);
  else {
    stopRoutineAudio();
    navigate(`feedback/${sessionId}`);
  }
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
  clearMediaIssue();
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
    seekDragging: false,
    endingWarned: false,
    finishing: false,
  };

  if (state.audio.musicEnabled && state.routine) {
    startRoutineAudio(state.routine).then(() => fadeRoutineAudioTo(POSTURE_MUSIC_VOLUME, 1.2));
  } else {
    fadeRoutineAudioTo(POSTURE_MUSIC_VOLUME, 1.2);
  }
  startGuideAudio("postures", state.routine?.mood);
  markPartStarted(sessionId, "movement");

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

function postureElapsedMilliseconds(now = performance.now()) {
  if (!state.posture.running) return 0;
  const pausedMs = state.posture.pausedAt ? now - state.posture.pausedAt : 0;
  return Math.max(0, now - state.posture.startedAt - state.posture.pausedTotalMs - pausedMs);
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
    const scheduledIndex = Math.min(
      routine.poses.length - 1,
      Math.floor((POSTURE_DURATION_SECONDS - state.posture.remainingSeconds) / poseDuration),
    );
    state.posture.currentPoseIndex = scheduledIndex;
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
  const alternative = document.querySelector("[data-posture-alternative]");
  const step = document.querySelector("[data-posture-step]");
  const next = document.querySelector("[data-posture-next]");
  const seek = document.querySelector("[data-posture-seek]");
  const seekTime = document.querySelector("[data-posture-seek-time]");
  const image = document.querySelector("[data-posture-image]");
  const fallback = document.querySelector("[data-posture-image-fallback]");

  if (name) name.textContent = pose.name;
  if (cue) cue.textContent = pose.cue;
  if (movement) movement.textContent = guide.movement;
  if (alternative) alternative.textContent = guide.alternative;
  if (step) step.textContent = `Postura ${state.posture.currentPoseIndex + 1} de ${routine.poses.length}`;
  if (next) next.textContent = `Después: ${routine.poses[state.posture.currentPoseIndex + 1]?.name || "Cierre"}`;
  const elapsedSeconds = Math.min(POSTURE_DURATION_SECONDS, Math.floor(postureElapsedMilliseconds() / 1000));
  if (seek && !state.posture.seekDragging) seek.value = String(elapsedSeconds);
  if (seekTime) seekTime.textContent = `${formatTime(elapsedSeconds)} / ${formatTime(POSTURE_DURATION_SECONDS)}`;

  if (image && image.dataset.poseId !== pose.id) {
    image.dataset.poseId = pose.id;
    image.src = guide.image;
    image.alt = guide.alt;
    image.hidden = false;
    if (fallback) fallback.hidden = true;
  }
}

function preparePostureEnding() {
  state.posture.endingWarned = true;
  const name = document.querySelector("[data-posture-name]");
  const cue = document.querySelector("[data-posture-cue]");
  const movement = document.querySelector("[data-posture-movement]");
  const alternative = document.querySelector("[data-posture-alternative]");
  const step = document.querySelector("[data-posture-step]");
  const next = document.querySelector("[data-posture-next]");
  const seek = document.querySelector("[data-posture-seek]");
  const seekTime = document.querySelector("[data-posture-seek-time]");

  if (name) name.textContent = "Cierre";
  if (cue) cue.textContent = "La rutina de posturas está por terminar.";
  if (movement) movement.textContent = "Dejá que el cuerpo vuelva a la quietud y acompañá el cierre con una respiración suave.";
  if (alternative) alternative.textContent = "Respirá con naturalidad, sin forzar ninguna posición.";
  if (step) step.textContent = "Cerrando";
  if (next) next.textContent = "Últimos segundos";
  if (seek) seek.value = String(POSTURE_DURATION_SECONDS);
  if (seekTime) seekTime.textContent = `${formatTime(POSTURE_DURATION_SECONDS)} / ${formatTime(POSTURE_DURATION_SECONDS)}`;
  fadeRoutineAudioTo(Math.max(POSTURE_MUSIC_VOLUME * 0.35, 0.02), 5);
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

function seekPostureSession(targetSeconds, routine, sessionId) {
  if (!state.posture.running || state.posture.finishing || !Number.isFinite(targetSeconds)) return;

  const clampedSeconds = Math.max(0, Math.min(POSTURE_DURATION_SECONDS, targetSeconds));
  const now = performance.now();
  const pausedMs = state.posture.pausedAt ? now - state.posture.pausedAt : 0;
  state.posture.startedAt = now - clampedSeconds * 1000 - state.posture.pausedTotalMs - pausedMs;
  state.posture.remainingSeconds = Math.max(0, Math.ceil(POSTURE_DURATION_SECONDS - clampedSeconds));
  state.posture.endingWarned = clampedSeconds >= POSTURE_DURATION_SECONDS - 15;

  const guide = state.audio.guideElement;
  if (guide) {
    try {
      const guideLimit = Number.isFinite(guide.duration) ? guide.duration : clampedSeconds;
      guide.currentTime = Math.min(clampedSeconds, guideLimit);
    } catch (error) {
      // El temporizador igual se actualiza si el navegador todavía está cargando el audio.
    }
  }

  if (state.posture.endingWarned) preparePostureEnding();
  else updatePostureProgress(routine, sessionId);

  if (clampedSeconds >= POSTURE_DURATION_SECONDS) finishPostureSession(sessionId);
}

async function finishPostureSession(sessionId, options = { completed: true }) {
  if (!state.posture.running || state.posture.finishing) return;
  state.posture.finishing = true;
  const movementSeconds = Math.min(POSTURE_DURATION_SECONDS, Math.round(postureElapsedMilliseconds() / 1000));
  stopPostureTimers();
  stopGuideAudio();
  fadeRoutineAudioTo(0.0001, 1.4);
  await wait(900);
  stopRoutineAudio();
  const session = await getRecord("Session", sessionId);
  if (session) {
    const modality = modalityFor(session.modality) || MODALITIES[1];
    session.movement_seconds = movementSeconds;
    session.completed_parts = normalizeCompletedParts(session.completed_parts);
    if (options.completed && !session.completed_parts.includes("movement")) session.completed_parts.push("movement");
    if (!options.completed) session.interrupted = true;
    session.completed = modality.id === "movement"
      ? options.completed
      : session.completed_parts.includes("breathing") && session.completed_parts.includes("movement");
    session.ended_at = new Date().toISOString();
    await putRecord("Session", session);
  }
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

function audioStatusLabel() {
  if (!isAudioEnabled()) return "Audio apagado";
  return state.audio.unlocked ? "Voz y música activas" : "Audio pendiente";
}

function syncAudioUi() {
  const status = document.querySelector("[data-audio-status]");
  if (status) status.textContent = audioStatusLabel();
}

function showMediaIssue(message) {
  state.audio.issue = message;
  const notice = document.querySelector("[data-media-notice]");
  if (notice) {
    notice.textContent = message;
    notice.hidden = false;
  }
  announce(message);
}

function clearMediaIssue() {
  state.audio.issue = "";
  const notice = document.querySelector("[data-media-notice]");
  if (notice) {
    notice.textContent = "";
    notice.hidden = true;
  }
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

  const trackAvailable = theme.file ? await audioAssetExists(theme.file) : false;
  if (theme.file && trackAvailable) {
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
      showMediaIssue("No se pudo iniciar la música. La guía visual y la voz continúan.");
    }
  } else if (theme.file) {
    showMediaIssue("La música no está disponible. La guía visual y la voz continúan.");
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
  if (!file) {
    showMediaIssue("La guía de voz no está disponible. Podés continuar con las indicaciones visuales y la música.");
    return false;
  }

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
  guideElement.addEventListener(
    "error",
    () => {
      if (state.audio.guideElement !== guideElement) return;
      showMediaIssue("La guía de voz no pudo cargarse. Podés continuar con las indicaciones visuales y la música.");
      stopGuideAudio();
    },
    { once: true },
  );

  guideElement
    .play()
    .then(() => {
      syncAudioUi();
    })
    .catch(() => {
      showMediaIssue("La guía de voz no pudo iniciarse. Podés continuar con las indicaciones visuales y la música.");
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
