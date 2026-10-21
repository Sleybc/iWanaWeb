// Paisaje de la portada (lienzo Main.dc.html): de día en claro y de noche en
// oscuro, solo con tokens. Colina con antena de Radio Enlace que conecta tres
// casas (zona rural) y
// casco urbano con la red de fibra por la calle.
const STARS = [
  [160, 90, 1.6],
  [420, 60, 1.2],
  [610, 130, 1.4],
  [880, 70, 1.2],
  [1010, 150, 1.6],
  [1320, 90, 1.3],
  [760, 40, 1],
  [1240, 210, 1.1],
  [300, 180, 1],
];

const LIME = "var(--color-iwana-secondary)";

export function HeroLandscape() {
  return (
    <svg
      className="absolute inset-0 size-full"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <g fill="#f0f0f0" className="opacity-(--stars)">
        {STARS.map(([cx, cy, r]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      <defs>
        <pattern id="win" width="12" height="14" patternUnits="userSpaceOnUse">
          <rect x="3" y="4" width="5" height="6" rx="1" fill="var(--win)" />
        </pattern>
      </defs>
      <circle cx="1170" cy="190" r="58" fill="var(--orb)" opacity="0.9" />
      <path
        d="M0 470 L110 420 L230 448 L360 380 L500 430 L640 360 L790 418 L940 350 L1080 405 L1230 352 L1360 398 L1440 380 L1440 760 L0 760 Z"
        fill="var(--m1)"
      />
      <path
        d="M0 540 C170 480 300 512 430 482 C570 450 690 505 830 474 C990 438 1120 486 1260 455 C1350 436 1405 448 1440 444 L1440 760 L0 760 Z"
        fill="var(--m2)"
      />
      <path
        d="M0 612 C160 590 300 560 420 548 C500 540 560 560 640 586 L1180 586 C1270 586 1360 566 1440 556 L1440 760 L0 760 Z"
        fill="var(--m3)"
      />

      <g>
        {/* Edificios residenciales y comerciales al fondo del casco urbano. */}
        <g fill="var(--bld)">
          <rect x="664" y="520" width="36" height="66" rx="2" />
          <rect x="744" y="486" width="36" height="100" rx="2" />
          <rect x="846" y="496" width="42" height="90" rx="2" />
          <rect x="976" y="510" width="38" height="76" rx="2" />
          <rect x="1104" y="498" width="40" height="88" rx="2" />
        </g>
        <g fill="url(#win)">
          <rect x="670" y="528" width="24" height="46" />
          <rect x="750" y="494" width="24" height="78" />
          <rect x="852" y="504" width="30" height="68" />
          <rect x="982" y="518" width="26" height="54" />
          <rect x="1110" y="506" width="28" height="68" />
        </g>
        {/* Instituciones a escala de barrio, integradas con las viviendas. */}
        <g transform="translate(224 164.08) scale(.72)">
        {/* Hospital: alas con ventanas, entrada y símbolo de salud. */}
        <g>
          <rect x="660" y="524" width="144" height="62" rx="2" fill="var(--bld)" />
          <rect x="698" y="492" width="68" height="94" rx="2" fill="var(--bld)" />
          <rect x="668" y="534" width="24" height="40" fill="url(#win)" />
          <rect x="772" y="534" width="24" height="40" fill="url(#win)" />
          <path d="M727 501 h10 v9 h9 v10 h-9 v9 h-10 v-9 h-9 v-10 h9 Z" fill="var(--win)" />
          <path d="M719 586 v-26 h26 v26" fill="var(--win)" />
          <path d="M732 560 v26" stroke="var(--bld)" strokeWidth="2" />
        </g>
        {/* Alcaldía: frontón, columnas y bandera del municipio. */}
        <g>
          <rect x="830" y="518" width="130" height="68" rx="2" fill="var(--bld)" />
          <path d="M820 518 l75 -42 l75 42 Z" fill="var(--bld)" />
          <path d="M895 476 v-25" stroke="var(--bld)" strokeWidth="2" />
          <path d="M896 451 h25 l-5 7 l5 7 h-25 Z" fill={LIME} />
          <path d="M846 531 v43 M874 531 v43 M916 531 v43 M944 531 v43" stroke="var(--win)" strokeWidth="7" />
          <rect x="885" y="550" width="20" height="30" fill="var(--win)" />
          <path d="M824 580 h142 M820 586 h150" stroke="var(--bld)" strokeWidth="5" />
        </g>
        {/* Colegio: pabellones bajos, acceso central y libro abierto. */}
        <g>
          <rect x="986" y="530" width="154" height="56" rx="2" fill="var(--bld)" />
          <path d="M978 530 h170 l-12 -10 h-146 Z" fill="var(--bld)" />
          <rect x="1039" y="502" width="48" height="84" rx="2" fill="var(--bld)" />
          <path d="M1049 511 q7 -3 14 1 q7 -4 14 -1 v13 q-7 -3 -14 1 q-7 -4 -14 -1 Z M1063 512 v13" fill="none" stroke="var(--win)" strokeWidth="2" strokeLinejoin="round" />
          <rect x="994" y="541" width="36" height="30" fill="url(#win)" />
          <rect x="1096" y="541" width="36" height="30" fill="url(#win)" />
          <rect x="1053" y="557" width="20" height="29" fill="var(--win)" />
        </g>
        </g>
        {/* Casas, un local y árboles completan la calle conectada por fibra. */}
        <g fill="var(--bld)">
          <path d="M610 586 v-25 l20 -18 l20 18 v25 Z" />
          <path d="M650 586 v-18 l14 -13 l14 13 v18 Z" />
          <path d="M1058 586 v-28 l20 -18 l20 18 v28 Z" />
          <path d="M1148 586 v-28 l20 -18 l20 18 v28 Z" />
          <rect x="1195" y="552" width="42" height="34" rx="2" />
        </g>
        <g fill="var(--win)">
          <rect x="619" y="563" width="8" height="8" rx="1" />
          <rect x="633" y="571" width="8" height="15" />
          <rect x="1067" y="561" width="8" height="8" rx="1" />
          <rect x="1081" y="571" width="8" height="15" />
          <rect x="1157" y="562" width="8" height="8" rx="1" />
          <rect x="1171" y="572" width="8" height="14" />
          <rect x="1200" y="565" width="19" height="14" rx="1" />
          <rect x="1223" y="565" width="9" height="21" />
        </g>
        <path d="M1193 552 h46 l-4 9 h-38 Z" fill={LIME} opacity=".65" />
        <path d="M1039 574 v12 M1188 570 v16" stroke="var(--bld)" strokeWidth="3" />
        <g fill="var(--tree)">
          <circle cx="1039" cy="569" r="9" />
          <circle cx="1188" cy="566" r="8" />
        </g>
      </g>
      <path d="M610 596 H1440" stroke={LIME} strokeWidth="3" strokeLinecap="round" fill="none" />

      <g stroke="var(--bld)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M488 546 L500 470 L512 546 M492 522 L508 522 M495 498 L505 498" />
        <path d="M486 464 a20 20 0 0 0 0 22 M514 464 a20 20 0 0 1 0 22" />
      </g>
      <g stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M470 452 a40 40 0 0 0 0 44" opacity="0.9" />
        <path d="M456 440 a60 60 0 0 0 0 68" opacity="0.6" />
        <path d="M442 428 a80 80 0 0 0 0 92" opacity="0.35" />
      </g>

      <path
        d="M0 668 C160 648 320 640 480 652 C640 664 780 676 940 672 C1120 667 1290 676 1440 668 L1440 760 L0 760 Z"
        fill="var(--m4)"
      />
      <g stroke={LIME} strokeWidth="1.5" fill="none" opacity="0.35" strokeLinecap="round">
        <path d="M150 700 C260 690 380 690 520 698" />
        <path d="M160 716 C280 706 400 706 540 714" />
        <path d="M170 732 C300 722 420 722 560 730" />
      </g>
      <path d="M478 482 L260 632 M478 482 L404 636 M478 482 L566 640" stroke={LIME} strokeWidth="1.5" strokeDasharray="3 7" fill="none" />
      <g fill="var(--house)">
        <path d="M240 650 l18 -16 l18 16 v18 h-36 Z" />
        <path d="M386 652 l18 -16 l18 16 v18 h-36 Z" />
        <path d="M540 658 l18 -16 l18 16 v18 h-36 Z" />
      </g>
      <g stroke="var(--house)" strokeWidth="2" strokeLinecap="round">
        <path d="M268 640 v-10 M263 630 h10 M414 642 v-10 M409 632 h10 M568 648 v-10 M563 638 h10" />
      </g>
      <g fill="var(--tree)">
        <circle cx="196" cy="652" r="12" />
        <circle cx="330" cy="646" r="10" />
        <circle cx="460" cy="654" r="12" />
      </g>

      <g fontFamily="var(--font-sans)" fontSize="13" fontWeight="700" letterSpacing="1.5" textAnchor="middle">
        <rect x="226" y="576" width="140" height="30" rx="15" fill="var(--tag-bg)" />
        <text x="296" y="596" fill="var(--tag-text)">
          ZONA RURAL
        </text>
        <rect x="826" y="420" width="156" height="30" rx="15" fill="var(--tag-bg)" />
        <text x="904" y="440" fill="var(--tag-text)">
          ZONA URBANA
        </text>
      </g>
    </svg>
  );
}
