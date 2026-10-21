// Paisaje de la portada, propuesta A «Paisaje refinado» (lienzo Banner-A.dc.html
// y Banner-A-movil.dc.html). Día en claro y noche en oscuro, solo con tokens.
// El pueblo recibe la Fibra Óptica por la calle; la antena de Radio Enlace de
// la colina conecta tres fincas. El pulso y los haces se detienen con
// prefers-reduced-motion (globals.css).
const LIME = "var(--color-iwana-secondary)";

const STARS = [
  [980, 70, 1.4],
  [1110, 140, 1.1],
  [1200, 60, 1.6],
  [1330, 120, 1.2],
  [1400, 220, 1],
  [860, 180, 1],
  [1270, 250, 1.1],
  [940, 300, 0.9],
];

const FIBER = "M0 712 C180 700 360 690 470 660 C510 648 530 630 540 614 L1085 614";
const FIBER_NODES = [568, 613, 690, 769, 852, 933, 1008];

/** Árbol con tronco y copa en dos tonos (lado en sombra), apoyado en `y`. */
function Tree({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g>
      <path d={`M${x} ${y} v${-11 * s}`} stroke="var(--tree-sh)" strokeWidth={3 * s} strokeLinecap="round" />
      <circle cx={x} cy={y - 18 * s} r={10 * s} fill="var(--tree)" />
      <path d={`M${x} ${y - 28 * s} a${10 * s} ${10 * s} 0 0 1 0 ${20 * s}`} fill="var(--tree-sh)" />
    </g>
  );
}

function Tag({ x, y, width, label }: { x: number; y: number; width: number; label: string }) {
  return (
    <g fontFamily="var(--font-sans)" fontSize="13" fontWeight="600">
      <rect x={x} y={y} width={width} height="30" rx="15" fill="var(--tag-bg)" />
      <circle cx={x + 18} cy={y + 15} r="5" fill={LIME} />
      <text x={x + 30} y={y + 20} fill="var(--tag-text)">
        {label}
      </text>
    </g>
  );
}

/**
 * Escena completa (viewBox 1440 × 760). `idPrefix` evita ids repetidos cuando
 * la escena aparece dos veces en la página (fondo en escritorio y recorte en tableta).
 */
export function HeroLandscape({
  idPrefix,
  viewBox = "0 0 1440 760",
  preserveAspectRatio = "xMaxYMax slice",
  className,
}: {
  idPrefix: string;
  viewBox?: string;
  preserveAspectRatio?: string;
  className?: string;
}) {
  const id = (name: string) => `${idPrefix}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} aria-hidden="true">
      <defs>
        <linearGradient id={id("far")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m1a)" />
          <stop offset="1" stopColor="var(--m1b)" />
        </linearGradient>
        <linearGradient id={id("mid")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m2a)" />
          <stop offset="1" stopColor="var(--m2b)" />
        </linearGradient>
        <linearGradient id={id("val")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m3b)" />
          <stop offset="1" stopColor="var(--m3a)" />
        </linearGradient>
        <linearGradient id={id("near")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m4b)" />
          <stop offset="1" stopColor="var(--m4a)" />
        </linearGradient>
        <radialGradient id={id("halo")}>
          <stop offset="0" stopColor="var(--sun-halo)" />
          <stop offset="1" stopColor="var(--sun-halo)" stopOpacity="0" />
        </radialGradient>
        <pattern id={id("win")} width="10" height="13" patternUnits="userSpaceOnUse">
          <rect x="2.5" y="3" width="5" height="6" rx="1" fill="var(--win)" />
        </pattern>
      </defs>

      <g fill="#f0f0f0" className="opacity-(--stars)">
        {STARS.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      {/* Sol (claro) o luna (oscuro): pequeño, bajo y lejos del titular. */}
      <circle cx="1040" cy="316" r="78" fill={url("halo")} />
      <circle cx="1040" cy="316" r="30" fill="var(--sun)" />

      {/* Capas con perspectiva atmosférica. */}
      <path
        d="M0 430 L120 392 L250 418 L390 360 L530 404 L680 346 L820 396 L960 352 L1100 392 L1230 340 L1350 380 L1440 362 L1440 760 L0 760 Z"
        fill={url("far")}
      />
      <path
        d="M0 500 C180 452 320 486 470 462 C620 438 760 488 910 462 C1060 436 1180 474 1300 452 C1380 438 1420 446 1440 442 L1440 760 L0 760 Z"
        fill={url("mid")}
      />
      <path
        d="M0 610 C140 596 300 584 440 590 C500 592 522 600 540 606 L1085 606 C1150 560 1205 486 1260 482 C1320 478 1380 520 1440 540 L1440 760 L0 760 Z"
        fill={url("val")}
      />

      {/* Pueblo: una sola escala, cada edificio con su lado en sombra. */}
      <g>
        <path d="M548 606 v-34 l20 -18 l20 18 v34 Z" fill="var(--bld)" />
        <path d="M576 606 v-34 l-8 -7 v41 Z" fill="var(--bld-sh)" />
        <rect x="556" y="582" width="8" height="8" rx="1" fill="var(--win)" />

        <rect x="596" y="518" width="34" height="88" rx="2" fill="var(--bld)" />
        <rect x="620" y="518" width="10" height="88" fill="var(--bld-sh)" />
        <rect x="599" y="524" width="20" height="74" fill={url("win")} />

        {/* Hospital */}
        <rect x="638" y="544" width="104" height="62" rx="2" fill="var(--bld)" />
        <rect x="670" y="518" width="40" height="88" rx="2" fill="var(--bld)" />
        <rect x="700" y="518" width="10" height="88" fill="var(--bld-sh)" />
        <rect x="726" y="544" width="16" height="62" fill="var(--bld-sh)" />
        <path d="M685 527 h10 v8 h8 v10 h-8 v8 h-10 v-8 h-8 v-10 h8 Z" fill="var(--win)" />
        <rect x="644" y="552" width="22" height="40" fill={url("win")} />
        <rect x="714" y="552" width="10" height="40" fill={url("win")} />
        <path d="M681 606 v-20 h18 v20" fill="var(--win)" />

        <path d="M750 606 v-32 l19 -17 l19 17 v32 Z" fill="var(--bld)" />
        <path d="M776 606 v-32 l-7 -7 v39 Z" fill="var(--bld-sh)" />
        <rect x="757" y="583" width="8" height="8" rx="1" fill="var(--win)" />

        {/* Alcaldía */}
        <rect x="796" y="542" width="112" height="64" rx="2" fill="var(--bld)" />
        <path d="M788 542 l64 -32 l64 32 Z" fill="var(--roof)" />
        <path d="M852 510 v-22" stroke="var(--bld)" strokeWidth="2" />
        <path d="M853 488 h20 l-4 6 l4 6 h-20 Z" fill={LIME} />
        <path d="M812 554 v40 M834 554 v40 M870 554 v40 M892 554 v40" stroke="var(--bld-sh)" strokeWidth="7" />
        <rect x="843" y="572" width="18" height="34" fill="var(--win)" />

        <rect x="916" y="510" width="34" height="96" rx="2" fill="var(--bld)" />
        <rect x="940" y="510" width="10" height="96" fill="var(--bld-sh)" />
        <rect x="919" y="516" width="20" height="82" fill={url("win")} />

        {/* Colegio */}
        <rect x="958" y="552" width="100" height="54" rx="2" fill="var(--bld)" />
        <rect x="990" y="526" width="36" height="80" rx="2" fill="var(--bld)" />
        <path d="M986 526 h44 l-6 -9 h-32 Z" fill="var(--roof)" />
        <rect x="1046" y="552" width="12" height="54" fill="var(--bld-sh)" />
        <path
          d="M999 536 q4.5 -2 9 .5 q4.5 -2.5 9 -.5 v9 q-4.5 -2 -9 .5 q-4.5 -2.5 -9 -.5 Z"
          fill="none"
          stroke="var(--win)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <rect x="964" y="560" width="22" height="30" fill={url("win")} />
        <rect x="1030" y="560" width="14" height="30" fill={url("win")} />
        <rect x="1000" y="584" width="16" height="22" fill="var(--win)" />

        <path d="M1072 606 v-12" stroke="var(--tree-sh)" strokeWidth="3" />
        <circle cx="1072" cy="588" r="10" fill="var(--tree)" />
      </g>

      {/* Fibra: entra desde el campo y recorre la calle. */}
      <path d={FIBER} fill="none" stroke={LIME} strokeWidth="3.5" strokeLinecap="round" />
      <path className="hero-flow" d={FIBER} fill="none" stroke="var(--fiber-pulse)" strokeWidth="5" strokeLinecap="round" />
      <g fill={LIME}>
        {FIBER_NODES.map((cx) => (
          <circle key={cx} cx={cx} cy="614" r="4" />
        ))}
      </g>

      {/* Antena de Radio Enlace en la colina. */}
      <g stroke="var(--bld)" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M1246 484 L1260 404 L1274 484 M1251 458 L1269 458 M1255 432 L1265 432" />
        <path d="M1244 396 a20 20 0 0 0 0 22 M1276 396 a20 20 0 0 1 0 22" />
      </g>
      <g stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M1226 384 a44 44 0 0 0 0 46" />
        <path d="M1294 384 a44 44 0 0 1 0 46" />
        <path d="M1210 372 a66 66 0 0 0 0 70" opacity=".55" />
        <path d="M1310 372 a66 66 0 0 1 0 70" opacity=".55" />
      </g>

      {/* Primer plano: fincas. */}
      <path
        d="M0 668 C180 646 360 650 520 662 C700 676 880 684 1060 676 C1200 670 1330 650 1440 646 L1440 760 L0 760 Z"
        fill={url("near")}
      />
      <g stroke={LIME} strokeWidth="1.4" fill="none" opacity=".3" strokeLinecap="round">
        <path d="M60 706 C180 696 300 694 430 702" />
        <path d="M70 724 C200 714 320 712 450 720" />
        <path d="M80 742 C220 732 340 730 470 738" />
      </g>
      {/* Arboleda de las fincas, lejos de la línea de fibra. */}
      <Tree x={96} y={662} s={1.1} />
      <Tree x={124} y={666} s={1.35} />
      <Tree x={152} y={664} s={0.95} />
      <Tree x={316} y={656} s={1.15} />
      <Tree x={340} y={658} s={0.9} />

      {/* Haces de Radio Enlace hacia tres fincas de la colina. */}
      <g stroke={LIME} strokeWidth="2" strokeDasharray="4 6" fill="none" strokeLinecap="round" className="hero-beam">
        <path d="M1260 412 L1128 556" />
        <path d="M1260 412 L1348 516" />
        <path d="M1260 412 L1418 536" />
      </g>
      <g fill="var(--house)">
        <path d="M1110 570 l18 -16 l18 16 v20 h-36 Z" />
        <path d="M1330 530 l18 -16 l18 16 v20 h-36 Z" />
        <path d="M1400 550 l18 -16 l18 16 v20 h-36 Z" />
      </g>
      <g stroke="var(--house)" strokeWidth="2" strokeLinecap="round">
        <path d="M1136 558 v-12 M1131 546 h10 M1356 518 v-12 M1351 506 h10 M1426 538 v-12 M1421 526 h10" />
      </g>

      {/* Rótulos que explican la escena. */}
      <Tag x={783} y={452} width={138} label="Fibra Óptica" />
      <Tag x={1185} y={330} width={150} label="Radio Enlace" />
    </svg>
  );
}

/** Composición propia para celular (viewBox 390 × 230): pueblo con fibra a la izquierda, antena y fincas a la derecha. */
export function HeroLandscapeMobile({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 390 230" aria-hidden="true">
      <defs>
        <linearGradient id="hm-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m1a)" />
          <stop offset="1" stopColor="var(--m1b)" />
        </linearGradient>
        <linearGradient id="hm-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m3b)" />
          <stop offset="1" stopColor="var(--m3a)" />
        </linearGradient>
        <linearGradient id="hm-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--m4b)" />
          <stop offset="1" stopColor="var(--m4a)" />
        </linearGradient>
        <radialGradient id="hm-halo">
          <stop offset="0" stopColor="var(--sun-halo)" />
          <stop offset="1" stopColor="var(--sun-halo)" stopOpacity="0" />
        </radialGradient>
        <pattern id="hm-win" width="8" height="11" patternUnits="userSpaceOnUse">
          <rect x="2" y="2.5" width="4" height="5" rx="1" fill="var(--win)" />
        </pattern>
      </defs>
      <g fill="#f0f0f0" className="opacity-(--stars)">
        <circle cx="60" cy="18" r="1.1" />
        <circle cx="150" cy="10" r="1.3" />
        <circle cx="250" cy="22" r="1" />
        <circle cx="350" cy="12" r="1.2" />
      </g>
      <circle cx="205" cy="52" r="34" fill="url(#hm-halo)" />
      <circle cx="205" cy="52" r="13" fill="var(--sun)" />
      <path d="M0 78 L50 60 L105 74 L165 46 L225 70 L290 44 L350 64 L390 54 L390 230 L0 230 Z" fill="url(#hm-far)" />
      <path d="M0 150 L196 150 C240 130 270 92 300 90 C330 88 365 108 390 118 L390 230 L0 230 Z" fill="url(#hm-mid)" />

      {/* Pueblo */}
      <path d="M14 150 v-24 l14 -12 l14 12 v24 Z" fill="var(--bld)" />
      <path d="M34 150 v-24 l-6 -5 v29 Z" fill="var(--bld-sh)" />
      <rect x="48" y="96" width="26" height="54" rx="2" fill="var(--bld)" />
      <rect x="66" y="96" width="8" height="54" fill="var(--bld-sh)" />
      <rect x="50" y="100" width="14" height="44" fill="url(#hm-win)" />
      <rect x="80" y="112" width="62" height="38" rx="2" fill="var(--bld)" />
      <path d="M74 112 l37 -20 l37 20 Z" fill="var(--roof)" />
      <path d="M90 120 v24 M102 120 v24 M120 120 v24 M132 120 v24" stroke="var(--bld-sh)" strokeWidth="5" />
      <rect x="106" y="130" width="10" height="20" fill="var(--win)" />
      <rect x="148" y="104" width="40" height="46" rx="2" fill="var(--bld)" />
      <rect x="178" y="104" width="10" height="46" fill="var(--bld-sh)" />
      <path d="M161 110 h6 v5 h5 v6 h-5 v5 h-6 v-5 h-5 v-6 h5 Z" fill="var(--win)" />
      <rect x="151" y="130" width="22" height="14" fill="url(#hm-win)" />

      {/* Fibra */}
      <path d="M0 156 L196 156" fill="none" stroke={LIME} strokeWidth="3" strokeLinecap="round" />
      <path
        className="hero-flow-sm"
        d="M0 156 L196 156"
        fill="none"
        stroke="var(--fiber-pulse)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <g fill={LIME}>
        <circle cx="28" cy="156" r="3" />
        <circle cx="61" cy="156" r="3" />
        <circle cx="111" cy="156" r="3" />
        <circle cx="168" cy="156" r="3" />
      </g>

      {/* Antena */}
      <g stroke="var(--bld)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M291 92 L300 40 L309 92 M294 74 L306 74 M296 57 L304 57" />
        <path d="M288 36 a14 14 0 0 0 0 16 M312 36 a14 14 0 0 1 0 16" />
      </g>
      <g stroke={LIME} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M276 28 a30 30 0 0 0 0 32" />
        <path d="M324 28 a30 30 0 0 1 0 32" />
      </g>

      {/* Primer plano y fincas */}
      <path d="M0 186 C80 176 160 182 240 190 C300 196 350 186 390 178 L390 230 L0 230 Z" fill="url(#hm-near)" />
      <g stroke={LIME} strokeWidth="1.6" strokeDasharray="3 5" fill="none" strokeLinecap="round" className="hero-beam">
        <path d="M300 44 L238 186" />
        <path d="M300 44 L362 176" />
      </g>
      <g fill="var(--house)">
        <path d="M224 200 l14 -12 l14 12 v16 h-28 Z" />
        <path d="M348 190 l14 -12 l14 12 v16 h-28 Z" />
      </g>
      <Tree x={30} y={206} s={0.7} />
      <Tree x={46} y={208} s={0.85} />
      <Tree x={300} y={210} s={0.6} />
      <g fontFamily="var(--font-sans)" fontSize="11" fontWeight="600">
        <rect x="52" y="64" width="98" height="22" rx="11" fill="var(--tag-bg)" />
        <circle cx="65" cy="75" r="4" fill={LIME} />
        <text x="74" y="79" fill="var(--tag-text)">
          Fibra Óptica
        </text>
        <rect x="232" y="6" width="98" height="22" rx="11" fill="var(--tag-bg)" />
        <circle cx="245" cy="17" r="4" fill={LIME} />
        <text x="254" y="21" fill="var(--tag-text)">
          Radio Enlace
        </text>
      </g>
    </svg>
  );
}
