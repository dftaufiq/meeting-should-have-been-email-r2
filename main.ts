// The Meeting That Should Have Been an Email — make.fun entry (round 2 resubmit).
// One line of plain text (max 200 chars), a joke about a meeting that should
// have been an email. The program writes it to /output/entry.txt, where the
// sealed scorer gates it (UTF-8, 1-200 chars) and the judge compares it
// pairwise. No secrets, no network, no input: the line is the whole entry.
import { mkdirSync, writeFileSync } from "node:fs";

// 2-beat structure + reveal in the final clause:
//   beat 1 — setup: "I'll keep this brief" + the shared screen (recognition:
//   every worker has sat through this exact opening).
//   beat 2 — escalation: 312 unread emails in the host's own inbox.
//   reveal — the twist lands last: ALL of them are about this meeting.
// Fresh angle: the meeting didn't just fail to replace an email — it
// spawned 312 of them. The specific number (312) is the punch; the
// final clause is the twist, so the joke turns on its last words.
const LINE =
  "The host opened with ‘I’ll keep this brief,’ then shared his screen, and his inbox had 312 unread emails — all of them about this meeting.";

mkdirSync("/output", { recursive: true });
// Guard: no trailing newline, no stray whitespace — the sealed scorer's
// gate counts every character in the file (1–200), so /output/entry.txt
// holds exactly the line and nothing else. The length check below mirrors
// that gate: if the line ever drifts outside 1–200 chars, fail loudly
// instead of shipping an entry the scorer would reject.
const text = LINE.replace(/\s+$/, "");
if (text.length < 1 || text.length > 200) throw new Error(`line is ${text.length} chars, gate needs 1-200`);
writeFileSync("/output/entry.txt", text, "utf8");
