const DB_NAME = "respiracion-yogui";
const DB_VERSION = 1;
const SUPABASE_URL = "https://gdxfolbvlfzeyyddfnck.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FoXU2fyxg-xuCI4HmILYGA_yzD7yLPM";
const PROFILE_STORAGE_KEY = "respiracion-yogui-profile";
const TRACK_VOLUME = 0.34;
const POSTURE_MUSIC_VOLUME = 0.18;
const RAIN_VOLUME = 0.08;
const VOICE_RATE = 0.74;
const VOICE_PITCH = 1.08;
const VOICE_VOLUME = 0.38;
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
    duration_minutes: 4,
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
    duration_minutes: 3,
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
    duration_minutes: 4,
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
    duration_minutes: 4,
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
    duration_minutes: 6,
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
  },
  postures: {
    anxious: "assets/audio/ansiedad-posturas.m4a",
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
    voice:
      "Nos sentamos en la silla con los dos pies apoyados en el piso. Luego apoyamos las manos sobre los muslos. Inhalando, alargar la columna como si crecieras desde el coxis hacia la coronilla. Exhalando, relajar hombros, mandíbula y abdomen. Repetí dos respiraciones más, suave.",
  },
  "arms-up": {
    movement: "Paso a paso: inhalá y subí brazos; exhalá y bajalos despacio, con cuello relajado.",
    voice:
      "Continuamos en la silla, relajar los hombros y apoyar bien los pies. Inhalando, debemos subir los dos brazos por los costados hasta donde sea cómodo. Exhalando, bajamos brazos despacio. Inhalando elevamos los brazos. Exhalando, se bajan brazos otra vez, manteniendo cuello y mandíbula relajados.",
  },
  twist: {
    movement: "Paso a paso: inhalá subiendo un brazo, exhalá en torsión, respiramos y cambiamos de lado.",
    voice:
      "Sentada con la espalda larga y brazos al costado de la silla, vamos a comenzar a inhalar subiendo brazo derecho, manteniendo cuello y cabeza en línea y al exhalar, giramos suavemente hacia la izquierda desde el abdomen llevando el brazo derecho al lado contrario en una pequeña torsión. Hacemos dos respiraciones desde el abdomen. Inhalando, volvemos al centro. Ahora al comenzar a inhalar subiendo brazo izquierdo, manteniendo cuello y cabeza en línea y al exhalar, giramos suavemente hacia la derecha desde el abdomen llevando el brazo izquierdo al lado contrario en una pequeña torsión. Hacemos dos respiraciones desde el abdomen. Inhalando, volvemos al centro.",
  },
  "forward-fold": {
    movement: "Paso a paso: alargá espalda, exhalá bajando el torso y volvé vértebra por vértebra.",
    voice:
      "Desde la silla, separá un poco los pies y apoyá bien las plantas. Inhalando, alargá la espalda. Exhalando, dejá que el torso baje hacia las piernas, sin forzar y manteniendo la columna derecha. Soltar cabeza, cuello y hombros. Inhalando, sentí la espalda amplia. Exhalando, entregá un poco más de peso. Para volver lo hacemos exhalando con columna curva, vértebra a vértebra y lo último que sube es la cabeza.",
  },
  "side-stretch": {
    movement: "Paso a paso: brazo derecho arriba e inclinación izquierda; después brazo izquierdo y derecha.",
    voice:
      "Sentada en la silla, relajar hombros y apoyar los pies. Inhalando, levantá el brazo derecho. Exhalando, inclinate suavemente hacia la izquierda, abriendo el costado derecho. Inhalando, volvé al centro. Exhalando, bajá el brazo derecho. Inhalando, subí el brazo izquierdo. Exhalando, inclinate hacia la derecha. Volvé despacio al centro.",
  },
  "heart-opener": {
    movement: "Paso a paso: tomá la silla, abrí el pecho al inhalar y aflojá al exhalar.",
    voice:
      "Sentada, tomá el respaldo o los bordes de la silla con suavidad. Inhalando, abrí el pecho y llevá los hombros un poquito hacia atrás. Exhalando, aflojá las costillas y el abdomen. No empujes la cintura. Dejá que la apertura nazca del pecho y de las clavículas.",
  },
  shoulders: {
    movement: "Paso a paso: hombros arriba al inhalar; atrás y abajo al exhalar.",
    voice:
      "Sentada en la silla, dejá los brazos relajados. Inhalando, llevá los hombros hacia arriba. Exhalando, mandalos hacia atrás y hacia abajo. Repetí lento: inhalan y suben, exhalan y bajan. Mantené cuello, manos y cara relajados.",
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
  supabase: null,
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
    currentPoseIndex: 0,
    lastSpokenIndex: -1,
  },
  audio: {
    context: null,
    unlocked: false,
    voiceEnabled: true,
    musicEnabled: true,
    musicGain: null,
    musicElement: null,
    musicSource: null,
    musicNodes: [],
    musicIntervals: [],
    routineId: null,
    guideElement: null,
    guideKey: null,
    spanishVoice: null,
  },
};

const app = document.querySelector("#app");
const appStatus = document.querySelector("#app-status");

document.addEventListener("DOMContentLoaded", () => {
  initializeApp().catch(handleStartupError);
});

async function initializeApp() {
  state.db = await openDatabase();
  await initSupabase();
  initPersistentAudioHandling();
  if (isSupabaseEnabled()) {
    state.user = await getStoredProfile();
  } else {
    await seedRoutines();
    state.user = await getOrCreateUser();
  }
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
    localStorage.removeItem(PROFILE_STORAGE_KEY);
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
  if (isSupabaseEnabled()) {
    if (storeName === "Routine") {
      const { data, error } = await state.supabase.from("routines").select("*").order("name");
      if (error) throw error;
      return data.map(fromSupabaseRoutine);
    }

    if (storeName === "Session") {
      if (!state.user?.id) return [];
      const { data, error } = await state.supabase
        .from("sessions")
        .select("*")
        .eq("user_id", state.user.id)
        .order("date", { ascending: true });
      if (error) throw error;
      return data.map(fromSupabaseSession);
    }
  }

  return requestToPromise(tx(storeName).getAll());
}

async function addRecord(storeName, record) {
  if (isSupabaseEnabled()) {
    if (storeName === "Session") {
      const { data, error } = await state.supabase
        .from("sessions")
        .insert(toSupabaseSession(record))
        .select()
        .single();
      if (error) throw error;
      return data.id;
    }

    if (storeName === "User") {
      const { data, error } = await state.supabase.from("profiles").insert(toSupabaseProfile(record)).select().single();
      if (error) throw error;
      return data.id;
    }
  }

  return requestToPromise(tx(storeName, "readwrite").add(record));
}

async function putRecord(storeName, record) {
  if (isSupabaseEnabled()) {
    if (storeName === "Session") {
      const { error } = await state.supabase.from("sessions").update(toSupabaseSession(record)).eq("id", record.id);
      if (error) throw error;
      return record.id;
    }

    if (storeName === "User") {
      const { error } = await state.supabase.from("profiles").update(toSupabaseProfile(record)).eq("id", record.id);
      if (error) throw error;
      return record.id;
    }
  }

  return requestToPromise(tx(storeName, "readwrite").put(record));
}

async function getRecord(storeName, id) {
  if (isSupabaseEnabled()) {
    if (storeName === "Routine") {
      if (!isUuid(id)) return null;
      const { data, error } = await state.supabase.from("routines").select("*").eq("id", id).single();
      if (error) throw error;
      return fromSupabaseRoutine(data);
    }

    if (storeName === "Session") {
      if (!isUuid(id)) return null;
      const { data, error } = await state.supabase.from("sessions").select("*").eq("id", id).single();
      if (error) throw error;
      return fromSupabaseSession(data);
    }

    if (storeName === "User") {
      if (!isUuid(id)) return null;
      const { data, error } = await state.supabase.from("profiles").select("*").eq("id", id).single();
      if (error) throw error;
      return fromSupabaseProfile(data);
    }
  }

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
  if (routines.length > 0) return;

  for (const routine of ROUTINES) {
    await addRecord("Routine", routine);
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

async function initSupabase() {
  if (!window.supabase?.createClient || !SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) return;
  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

  try {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 2500);
    const response = await fetch(`${SUPABASE_URL}/rest/v1/routines?select=id&limit=1`, {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      },
      signal: controller.signal,
    });
    window.clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`Supabase unavailable: ${response.status}`);
    state.supabase = client;
  } catch (error) {
    console.warn("Supabase no disponible, usando modo local.", error);
    state.supabase = null;
  }
}

function isSupabaseEnabled() {
  return Boolean(state.supabase);
}

async function getStoredProfile() {
  let stored = null;
  try {
    stored = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "null");
  } catch (error) {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    return null;
  }

  if (!stored?.id) return null;

  try {
    return await getRecord("User", stored.id);
  } catch (error) {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    return null;
  }
}

async function handleAliasLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const alias = normalizeAlias(form.alias.value);
  const pin = form.pin.value.trim();
  const message = form.querySelector("[data-auth-message]");

  if (!alias || !isValidPin(pin)) {
    message.textContent = "Usá un alias y un PIN de al menos 4 números.";
    return;
  }

  form.querySelector("button[type='submit']").disabled = true;
  message.textContent = "Entrando...";

  try {
    const pin_hash = await hashPin(alias, pin);
    const { data: existing, error } = await state.supabase.from("profiles").select("*").eq("alias", alias).maybeSingle();
    if (error) throw error;

    if (existing && existing.pin_hash !== pin_hash) {
      message.textContent = "Ese alias existe, pero el PIN no coincide.";
      form.querySelector("button[type='submit']").disabled = false;
      return;
    }

    const profile = existing ? fromSupabaseProfile(existing) : await createRemoteProfile(alias, pin_hash);
    state.user = profile;
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({ id: profile.id, alias: profile.alias }));
    navigate("moods");
  } catch (error) {
    message.textContent = "No pude entrar. Probá de nuevo en un momento.";
    form.querySelector("button[type='submit']").disabled = false;
  }
}

async function createRemoteProfile(alias, pin_hash) {
  const { data, error } = await state.supabase.from("profiles").insert({ alias, pin_hash }).select().single();
  if (error) throw error;
  return fromSupabaseProfile(data);
}

function logoutProfile() {
  localStorage.removeItem(PROFILE_STORAGE_KEY);
  state.user = null;
  navigate("auth");
}

function normalizeAlias(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9_]/g, "");
}

function isValidPin(value) {
  return /^\d{4,}$/.test(value);
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value));
}

async function hashPin(alias, pin) {
  const data = new TextEncoder().encode(`${alias}:${pin}:respiracion-yogui-v0`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function fromSupabaseProfile(profile) {
  return {
    id: profile.id,
    name: profile.alias,
    alias: profile.alias,
    pin_hash: profile.pin_hash,
    created_at: profile.created_at,
  };
}

function toSupabaseProfile(profile) {
  return {
    alias: profile.alias || profile.name,
    pin_hash: profile.pin_hash,
  };
}

function fromSupabaseRoutine(routine) {
  return { ...routine };
}

function fromSupabaseSession(session) {
  return {
    id: session.id,
    user: session.user_id,
    routine: session.routine_id,
    mood_before: session.mood_before,
    mood_after: session.mood_after || "",
    date: session.date,
    completed: session.completed,
  };
}

function toSupabaseSession(session) {
  return {
    user_id: session.user,
    routine_id: session.routine,
    mood_before: session.mood_before,
    mood_after: session.mood_after || null,
    date: session.date,
    completed: session.completed,
  };
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
}

function initPersistentAudioHandling() {
  ["visibilitychange", "pageshow", "focus", "resume"].forEach((eventName) => {
    window.addEventListener(eventName, keepAudioAlive);
  });
  window.setInterval(keepVoiceAlive, 7000);

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
  keepVoiceAlive();

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

function keepVoiceAlive() {
  if (!state.audio.voiceEnabled || !("speechSynthesis" in window)) return;
  const shouldSpeakSession = state.session.running && !state.session.paused;
  const shouldSpeakPosture = state.posture.running && !state.posture.paused;
  if (!shouldSpeakSession && !shouldSpeakPosture) return;

  try {
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
  } catch (error) {
    // Some mobile browsers do not allow speech control while backgrounded.
  }
}

async function renderRoute() {
  const route = getRoute();
  const keepRoutineAudio = route.startsWith("postures/");
  stopSessionTimers({ keepAudio: keepRoutineAudio });
  stopPostureTimers();

  if (route === "auth") {
    if (isSupabaseEnabled()) await renderAuthPage();
    else navigate("moods");
  } else if (isSupabaseEnabled() && !state.user && route !== "welcome") await renderAuthPage();
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
        <button class="button" type="button" data-route="${isSupabaseEnabled() && !state.user ? "auth" : "moods"}">Comenzar</button>
      </div>
    </section>
  `;
  bindRoutes();
}

function renderAuthPage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen panel">
      ${brandBar("welcome")}
      <p class="eyebrow">Pausa consciente</p>
      <h2>Entrá con tu alias</h2>
      <p class="lead">Al ingresar por primera vez: ingresar tu usuario y pin preferidos, luego entrar con el mismo usuario y pin para recuperar tus sesiones en cualquier dispositivo.</p>
      <form class="auth-form" data-auth-form novalidate>
        <label>
          <span>Usuario</span>
          <input name="alias" type="text" autocomplete="username" placeholder="Ingresar usuario" required />
        </label>
        <label>
          <span>PIN</span>
          <input name="pin" type="password" inputmode="numeric" pattern="[0-9]{4,}" autocomplete="current-password" minlength="4" placeholder="Ingresar PIN" required />
        </label>
        <p class="auth-message" data-auth-message role="alert" aria-atomic="true"></p>
        <div class="actions">
          <button class="button" type="submit">Entrar</button>
        </div>
      </form>
    </section>
  `;

  bindRoutes();
  document.querySelector("[data-auth-form]").addEventListener("submit", handleAliasLogin);
}

function renderMoodPage() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="screen screen-wide panel">
      ${brandBar("auth")}
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
            <dd>${formatDurationLabel(breathingDurationSeconds(routine))}</dd>
          </div>
          <div class="detail">
            <dt>Posturas opcionales</dt>
            <dd>${formatDurationLabel(POSTURE_DURATION_SECONDS)}</dd>
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
        <button class="button" type="button" data-start-session="${routine.id}">Iniciar rutina</button>
        <button class="button button-secondary" type="button" data-start-breathing-only="${routine.id}">Solo respiración</button>
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
        ${state.user?.alias ? `<span class="user-chip">${state.user.alias}</span>` : ""}
        ${state.user?.alias ? `<button class="button button-secondary" type="button" data-logout>Cambiar usuario</button>` : ""}
        ${backRoute && backRoute !== "auth" ? `<button class="button button-secondary" type="button" data-route="${backRoute}">Volver</button>` : ""}
      </div>
    </div>
  `;
}

function bindRoutes() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.route));
  });
  document.querySelectorAll("[data-logout]").forEach((button) => {
    button.addEventListener("click", logoutProfile);
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

function breathingDurationSeconds(routine) {
  const requestedSeconds = routine.duration_minutes * 60;
  const cycleSeconds = buildPhases(routine).reduce((sum, phase) => sum + phase.seconds, 0);
  if (!cycleSeconds) return requestedSeconds;
  return Math.ceil(requestedSeconds / cycleSeconds) * cycleSeconds;
}

function formatDurationLabel(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  if (!rest) return `${minutes} minutos`;
  return `${minutes} min ${String(rest).padStart(2, "0")} s`;
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
  if (!state.session.endingWarned && !isGuideAudioActive("breathing")) speakInstruction(phase.label);

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
    state.session.startedAt = performance.now();
    state.session.pausedTotalMs = 0;
    runPhase();
    state.session.intervalId = window.setInterval(() => {
      updateSessionProgress(state.sessionId);
    }, 250);
  };

  instruction.textContent = "Prepara";
  state.session.currentPhaseLabel = "Prepara";
  state.session.phaseStartedAt = performance.now();
  state.session.phaseRemainingMs = primerDurationMs;
  circle.style.setProperty("--phase-ms", `${primerDurationMs}ms`);
  circle.style.setProperty("--breath-scale", "0.82");
  circle.style.transitionTimingFunction = "ease-in-out";
  const isPrimerSpoken = isGuideAudioActive("breathing") || speakBreathingPrimer(completePrimer);

  state.session.phaseTimeoutId = window.setTimeout(completePrimer, isPrimerSpoken ? primerDurationMs : 4000);
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
    stopVoice();
    return;
  }

  state.session.pausedTotalMs += performance.now() - state.session.pausedAt;
  state.session.pausedAt = null;
  if (circle) circle.style.transitionDuration = "";
  pauseRoutineAudio(false);
  pauseGuideAudio(false);
  if (state.session.currentPhaseLabel === "Prepara") runBreathingPrimer();
  else runPhase(state.session.phaseRemainingMs);
}

function prepareSessionEnding() {
  state.session.endingWarned = true;
  const instruction = document.querySelector("[data-instruction]");
  if (instruction) instruction.textContent = "Cerrando";
  fadeRoutineAudioTo(Math.max(TRACK_VOLUME * 0.42, 0.12), 5);
  if (!isGuideAudioActive("breathing")) speakClosingNotice();
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

  stopVoice();
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
  stopVoice();
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
    currentPoseIndex: 0,
    lastSpokenIndex: -1,
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
    if (state.posture.paused) return;

    state.posture.remainingSeconds -= 1;
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
  }, 1000);
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

  if (
    !isGuideAudioActive("postures") &&
    !state.posture.paused &&
    state.posture.lastSpokenIndex !== state.posture.currentPoseIndex
  ) {
    state.posture.lastSpokenIndex = state.posture.currentPoseIndex;
    speakPostureCue(pose);
  }
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
  if (!isGuideAudioActive("postures")) speakPostureClosingNotice();
}

function renderPostureTimer() {
  const timer = document.querySelector("[data-posture-timer]");
  if (timer) timer.textContent = formatTime(Math.max(0, state.posture.remainingSeconds));
}

function togglePosturePause() {
  const button = document.querySelector("[data-posture-pause]");
  state.posture.paused = !state.posture.paused;
  if (button) button.textContent = state.posture.paused ? "Continuar" : "Pausar";
  pauseRoutineAudio(state.posture.paused, POSTURE_MUSIC_VOLUME);
  pauseGuideAudio(state.posture.paused);

  if (state.posture.paused) {
    stopVoice();
    return;
  }

  if (state.posture.endingWarned) {
    if (!isGuideAudioActive("postures")) speakPostureClosingNotice();
    return;
  }

  const routine = postureRoutineFor(state.routine?.mood);
  const pose = routine.poses[state.posture.currentPoseIndex] || routine.poses[0];
  speakPostureCue(pose);
}

async function finishPostureSession(sessionId) {
  if (!state.posture.running || state.posture.finishing) return;
  state.posture.finishing = true;
  stopPostureTimers();
  stopVoice();
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
  return state.audio.voiceEnabled || state.audio.musicEnabled;
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
      if (state.session.currentPhaseLabel && !isGuideAudioActive("breathing")) {
        speakInstruction(state.session.currentPhaseLabel);
      }
    }
    syncAudioUi();
    return;
  }

  if (!isAudioEnabled()) {
    state.audio.voiceEnabled = true;
    state.audio.musicEnabled = true;
    await unlockAudio();
    if (state.session.running && !state.session.paused && state.routine) {
      startRoutineAudio(state.routine);
      if (state.session.currentPhaseLabel && !isGuideAudioActive("breathing")) {
        speakInstruction(state.session.currentPhaseLabel);
      }
    }
    syncAudioUi();
    return;
  }

  state.audio.voiceEnabled = false;
  state.audio.musicEnabled = false;
  stopVoice();
  stopGuideAudio();
  stopRoutineAudio();
  syncAudioUi();
}

async function unlockAudio() {
  initSpeechVoice();

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
  if (!state.audio.voiceEnabled) return false;

  const file = GUIDE_AUDIO[type]?.[mood];
  if (!file) return false;

  const guideKey = `${type}:${mood}`;
  if (state.audio.guideKey === guideKey && state.audio.guideElement && !state.audio.guideElement.ended) {
    state.audio.guideElement.play().catch(() => {});
    return true;
  }

  stopGuideAudio();
  stopVoice();

  const guideElement = new Audio(file);
  guideElement.preload = "auto";
  guideElement.crossOrigin = "anonymous";
  guideElement.volume = VOICE_VOLUME;
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

function isGuideAudioActive(type) {
  return Boolean(
    state.audio.guideElement &&
      state.audio.guideKey?.startsWith(`${type}:`) &&
      !state.audio.guideElement.ended,
  );
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

function initSpeechVoice() {
  if (!("speechSynthesis" in window)) return;

  const assignVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    state.audio.spanishVoice = chooseLatinFemaleVoice(voices);
  };

  assignVoice();
  window.speechSynthesis.onvoiceschanged = assignVoice;
}

function chooseLatinFemaleVoice(voices) {
  const latinLocales = [
    "es-419",
    "es-us",
    "es-mx",
    "es-ar",
    "es-cl",
    "es-co",
    "es-pe",
    "es-uy",
    "es-ve",
    "es-bo",
    "es-cr",
    "es-do",
    "es-ec",
    "es-gt",
    "es-hn",
    "es-ni",
    "es-pa",
    "es-pr",
    "es-py",
    "es-sv",
  ];

  const scoredVoices = voices
    .filter((voice) => voice.lang.toLowerCase().startsWith("es"))
    .map((voice) => {
      const lang = voice.lang.toLowerCase();
      const name = voice.name.toLowerCase();
      let score = 0;

      if (/dalia|paulina|sabina|paloma|soledad|luciana|maria|maría/.test(name)) score += 150;
      if (/google.*(latino|latinoamericano|américa latina|america latina|mexico|méxico|estados unidos|united states)/.test(name)) {
        score += 135;
      }
      if (/microsoft.*(dalia|sabina|paulina)/.test(name)) score += 135;
      if (latinLocales.includes(lang)) score += 120;
      if (/latino|latinoamericano|latin|méxico|mexico|argentina|chile|colombia|perú|peru|uruguay|estados unidos|united states|us spanish/.test(name)) {
        score += 95;
      }
      if (/female|mujer|woman/.test(name)) score += 40;
      if (voice.localService) score += 8;
      if (/monica|mónica|helena|laura/.test(name)) score -= 120;
      if (lang === "es-es" || /españa|spain|castilian|castellano/.test(name)) score -= 260;

      return { voice, score };
    })
    .sort((a, b) => b.score - a.score);

  return scoredVoices[0]?.voice || null;
}

function speakInstruction(label) {
  if (!state.audio.voiceEnabled || state.session.paused || !("speechSynthesis" in window)) return;

  const spokenLabels = {
    Inhala: "Inhala lento",
    Sostén: "Sostén",
    Exhala: "Exhala lento",
    Pausa: "Pausa",
  };

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(spokenLabels[label] || label);
  utterance.lang = state.audio.spanishVoice?.lang || "es-MX";
  utterance.rate = VOICE_RATE;
  utterance.pitch = VOICE_PITCH;
  utterance.volume = VOICE_VOLUME;
  if (state.audio.spanishVoice) utterance.voice = state.audio.spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function speakBreathingPrimer(onComplete) {
  if (!state.audio.voiceEnabled || state.session.paused || !("speechSynthesis" in window)) return false;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(
    "Antes de empezar tu rutina, recordá respirar por la nariz de forma lenta y profunda. Al inhalar, dejá que suba primero el abdomen, después el tórax y por último las clavículas. Al exhalar, dejá que bajen las clavículas, el tórax y el abdomen.",
  );
  utterance.lang = state.audio.spanishVoice?.lang || "es-MX";
  utterance.rate = VOICE_RATE;
  utterance.pitch = VOICE_PITCH;
  utterance.volume = VOICE_VOLUME;
  if (state.audio.spanishVoice) utterance.voice = state.audio.spanishVoice;
  utterance.onend = () => {
    window.setTimeout(() => onComplete?.(), 900);
  };
  utterance.onerror = () => {
    window.setTimeout(() => onComplete?.(), 900);
  };
  window.speechSynthesis.speak(utterance);
  return true;
}

function speakClosingNotice() {
  if (!state.audio.voiceEnabled || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance("Tu respiración está por terminar");
  utterance.lang = state.audio.spanishVoice?.lang || "es-MX";
  utterance.rate = VOICE_RATE;
  utterance.pitch = VOICE_PITCH;
  utterance.volume = VOICE_VOLUME;
  if (state.audio.spanishVoice) utterance.voice = state.audio.spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function speakPostureClosingNotice() {
  if (!state.audio.voiceEnabled || state.posture.paused || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance("Tu rutina de posturas está por terminar");
  utterance.lang = state.audio.spanishVoice?.lang || "es-MX";
  utterance.rate = VOICE_RATE;
  utterance.pitch = VOICE_PITCH;
  utterance.volume = VOICE_VOLUME;
  if (state.audio.spanishVoice) utterance.voice = state.audio.spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function speakPostureCue(pose) {
  if (!state.audio.voiceEnabled || state.posture.paused || !("speechSynthesis" in window)) return;

  const guide = postureGuideFor(pose);
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`Ahora, ${pose.name}. ${guide.voice}`);
  utterance.lang = state.audio.spanishVoice?.lang || "es-MX";
  utterance.rate = VOICE_RATE;
  utterance.pitch = VOICE_PITCH;
  utterance.volume = VOICE_VOLUME;
  if (state.audio.spanishVoice) utterance.voice = state.audio.spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function stopVoice() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
