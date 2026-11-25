// The 3 AM Excuse — make.fun bounty u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
//
// One line, in the voice of a hardware wallet refusing to sign at 3 AM.
// The wallet plays the responsible adult: nothing good gets signed at
// 3 AM, and it is not about to cosign the user's fourth memecoin of
// the night — the hour itself is the excuse, not the hardware.
// Deterministic: no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I don't sign at 3 AM. Not leases, not tattoos, and definitely not your fourth memecoin of the night.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
