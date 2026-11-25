// The Meeting That Should Have Been an Email — make.fun entry (round 2 resubmit).
// One line of plain text (max 200 chars), a joke about a meeting that should
// have been an email. The program writes it to /output/entry.txt, where the
// sealed scorer gates it (UTF-8, 1-200 chars) and the judge compares it
// pairwise. No secrets, no network, no input: the line is the whole entry.
import { mkdirSync, writeFileSync } from "node:fs";

// 2-beat + reveal in the final clause: beat 1 = "I'll keep this brief" plus
// the shared screen (recognition: every worker has seen this); beat 2/reveal
// = 312 unread emails, ALL of them about this meeting. Fresh angle: the
// meeting didn't just fail to replace an email — it spawned 312 of them.
// Specific number (312) is the punch; the last clause is the twist.
const LINE =
  "The host opened with ‘I’ll keep this brief,’ then shared his screen, and his inbox had 312 unread emails — all of them about this meeting.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts every character (1-200), so the file
// holds exactly the line, nothing else.
const text = LINE.replace(/\s+$/, "");
if (text.length < 1 || text.length > 200) throw new Error(`line is ${text.length} chars, gate needs 1-200`);
writeFileSync("/output/entry.txt", text, "utf8");
