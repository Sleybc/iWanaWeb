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

// [x, y, ancho, alto] de cada edificio con ventanas.
const BUILDINGS = [
  [660, 528, 46, 58],
  [712, 502, 38, 84],
  [756, 540, 60, 46],
  [822, 476, 34, 110],
  [862, 516, 56, 70],
  [924, 534, 44, 52],
  [974, 494, 62, 92],
  [1042, 526, 40, 60],
  [1088, 512, 52, 74],
];

const FIBER_NODES = [683, 731, 786, 839, 890, 946, 1005, 1062, 1114, 1162];
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
        <path d="M610 586 v-20 l18 -16 l18 16 v20 Z" fill="var(--bld)" />
        {BUILDINGS.map(([x, y, w, h]) => (
          <g key={x}>
            <rect x={x} y={y} width={w} height={h} rx="2" fill="var(--bld)" />
            <rect x={x + 4} y={y + 4} width={w - 8} height={h - 10} fill="url(#win)" />
          </g>
        ))}
        <path d="M822 476 l17 -18 l17 18 Z" fill="var(--bld)" />
        <path d="M1146 586 v-22 l16 -14 l16 14 v22 Z" fill="var(--bld)" />
      </g>
      <path d="M610 596 H1440" stroke={LIME} strokeWidth="3" strokeLinecap="round" fill="none" />
      <g fill={LIME}>
        {FIBER_NODES.map((cx) => (
          <circle key={cx} cx={cx} cy="596" r="4" />
        ))}
      </g>

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
