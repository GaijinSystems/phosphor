# Changelog

## 1.0.0 (unreleased)

First public release of PHOSPHOR-9 as a template, split out of the single-file terminal
behind gaijin.systems.

- On a desktop the monitor sits at the top of the window, centred across, and the cable hangs below it. A new
  `cord desktop:` setting gives the coil its own number of turns on a wide screen.
- Split into `engine/` (the terminal), `machines/v7-1979/` (the imaginary computer) and
  `site/` (your content), loaded by plain `<script>` tags: works opened from disk.
- Built-in commands live in `engine/commands/`; switch any of them off with `commands:`.
- The whole letter is content now (`== mail ==`), not just its project list.
- `{site}`, `{hostname}`, `{owner}`, `{email}` and `{year}` placeholders in any section's text. On the machine that keeps
  the visitor's own time, a struck date followed by a `{year}` date (`~~2025-06-01~~ {year}-06-01`) shows only the real date.
- New settings: `title`, `badge`, `source`, `commands`, `hostname`, `prompt`; machine settings
  `year`, `installed`, `user`, `offline`.
- New `source` command, pointing at the terminal's source code (GNU AGPL).
- Files that fail to load (missing, or a stray backtick inside) are named on the screen
  at start, including when the page is opened from disk.
- Text commands can replace a core command once it is switched off; `commands: -name`
  also removes the machine's text commands, never the site's.
- `about` disappears when there is no `== about ==` section; `man` works with `help` off.
- Optional `site/theme.css` for colours, with an amber example.
- Screen readers hear each finished line; links show a focus outline and open with Enter;
  reduced-motion settings also stop the cursor blink and the afterglow.
- PageUp and PageDown scroll back through the output.
- Some things to find, if you know where to look.
- `fill` puts the cable away and makes the monitor, bezel and all, as big as the window allows; the
  browser remembers. `help`
  lists it, and VMS `HELP` has `FILL` and `RUN`.
- `lite` tube effects for browsers that draw without a graphics chip: one small glow, a stepped,
  unblended band, a still flicker, a lighter inner shadow, no afterglow when scrolling. New setting `effects:` (`auto`,
  `full`, `lite`); `auto` picks `lite` for a software or missing WebGL, or a slow warm-up. The
  `effects` command shows or switches it and the browser remembers; `help` lists it, VMS `HELP`
  has `EFFECTS`.
- On touch screens, a small row of keys on the glass: esc, ^C, ^D, ^Z and tab.
- Several machines: `machines/machines.js` lists them, `machine:` and `machines:` choose,
  and the `connect` command or `?machine=name` switches. New machine setting `homes`.
- A real shell: pipes, `<` `>` `>>`, `2>` `2>&1`, `&&` `||`, quotes, `$VARIABLES`, wildcards, `#`
  comments, and shell scripts (`sh file`, or `chmod +x` and `./file`). Each command on a line runs
  after the one before has finished, and its backticks and variables are worked out when its turn
  comes.
- The file system can be written: `>`, `touch`, `mkdir`, `cp`, `mv`, `rm`. Unless `persist: no` is set, a visitor's
  changes are kept for their next visit (see below). A file holds up to 4 MB; past that, the machine says its disk is
  full. `cat` and friends read the keyboard until Ctrl-D.
- `ed`, the standard editor, with its addresses, regular expressions and `?`.
- `vi`, the visual editor, on the machines that had it, drawn on the glass.
- Colossal Cave, the 350-point version, on the 4.3BSD machine: `adventure`, in `/usr/games`, with
  `suspend` and resume, kept in the browser. VMS has it too, as `RUN [GAMES]ADVENTURE`.
- Small Berkeley games there too: `wump` (V7's, as 4.3BSD shipped it), `hangman`, `worm`, `robots`, `snake`, `banner`, `number`,
  `primes`, `factor`. `robots` and `snake` keep their scores in the browser.
- Rogue on the 4.3BSD machine, ported from the C of version 5.4.4, with `S` and the top ten kept in the
  browser. It shrinks its type to show the whole 80x24 where that stays readable, and pans where not.
- Each machine's year is set once, in `machines/machines.js`, and `{year}` follows it.
- More machines: a VAX-11/780 running 4.3BSD; a PC running MS-DOS 3.30 with `C:\>`, `dir`, `edlin`
  and `Abort, Retry, Fail?`; a Silicon Graphics Crimson running IRIX 4.0.5 with `hinv` and `fsn`;
  an S-100 box running CP/M 2.2 with `A>`, `PIP` and `STAT`; and a VAX running VMS, with versioned
  files and DCL. New machine settings: `home`, `shell`, `unix`, `login`, `csh`, `login prompt`,
  `root login`, `root prompt`, `root password`, `login failed`, `closed door`, `backdoor`, `also root`,
  `not found`, `mail notice`, `ls columns`, `disk full`.
- Every game in V7's `/usr/games` plays: `arithmetic`, `backgammon`, `banner`, `bcd`, `bj`, `checkers`,
  `chess`, `ching`, `cubic`, `fortune`, `hangman`, `maze`, `moo`, `ppt`, `quiz`, `reversi`, `ttt`, `words`
  and `wump`, ported from their source, or from 2.11BSD's sources checked against the V7 programs.
  `banner`, `checkers`, `cubic`, `maze` and `reversi`, whose source is lost, are rewritten to match the
  real programs' output.
- So does all of 4.3BSD's: also `aardvark`, `battlestar`, `boggle`, `btlgammon`, `canfield`,
  `cfscores`, `cribbage`, `doctor`, `fish`, `hunt` (with robot players), `mille`, `monop`, `rain`,
  `sail`, `snscore`, `teachgammon`, `trek`, `worms` and `zork`, which is Dungeon, as on the tape.
- VMS runs the games in `[GAMES]`: Adventure, Conquest, Empire, Monster, Moria and Star Trek.
  Moria and Conquest keep their sites' play hours, by the visitor's clock. Moria's help is VMS HELP on its
  own help library, recovered from the damaged copy of MORIAHLP.HLB that survives, with its blank lines placed
  as in Moria UB 5.00's MORIAHLP.HLP, where it has the topic.
- DOS and CP/M run the real Zork I and II on a Z-machine interpreter, and keep some of its replies
  at the prompt. DOS has Zork III too; CP/M, set up before it came out in 1982, does not.
- Games load the first time they run. Each machine's `later.js` names its games and holds their
  manual pages, so `ls`, `man` and `which` work before then. `commands: -name` switches a game
  off; the README shows how to add, remove and stub one.
- CP/M's `USER` areas keep their files apart.
- 4.3BSD checked against the real system: its error messages and usage lines, `ls` in columns with
  `-F`, `-s` and `-i`, `ps aux`, csh variables, `setenv`, one-line `if`, `which`, `whereis`, `last` and
  `limit`, and the real `/usr/games`. New machine setting `perror`.
- Text tools: `grep`, `wc`, `sort`, `uniq`, `tail`, `tr`, `tee`, `cal`, `file`, `du` and others.
- Each machine has only the commands its real system had; `help` lists just the essentials.
- Scripts and the prompt understand `for`, `while`, `until`, `if`, `case`, `test`, `expr`, `read`, `shift`, `$1` and
  backticks; on csh machines, `foreach`, `while`, `>&`, `$status`, `$#name`, `$z[2-]`, and `if` and `@` with 4.3BSD's
  expressions: `&&`, `||`, `!`, arithmetic, `=~`, `-r` `-w` `-x` `-e` `-d` `-f` `-z` `-o` and `{ command }` (right to
  left, with `Divide by 0.`), and `@ z[2] = 5`; `|&` in csh and bash. `2>&1 >file` keeps the shell's order, an inner
  `>&2` follows an outer `2>`, and a quote opens anywhere in a word: an unclosed one waits for the rest (`Unmatched '.`
  in csh). `&` prints the job's number and process id, as each shell did, and `ps &` (Linux's and IRIX's too) shows
  itself with that id; an `exit`, `break` or `cd` in the background leaves the shell alone. Machines boot with their own
  `== boot ==`, and a site's `== boot: linux, bsd ==` gives the machines it names a boot of their own.
- Locked files stay locked through `mv`, `rm -r`, links and every machine's own copy commands, and
  `rm -r` and `rmdir` leave alone a folder that `su` will return to.
- What visitors do to the files on V7, 4.3BSD, IRIX, Debian, MS-DOS, CP/M, VMS and TOPS-20 is kept in their browser
  and is there at their next visit (`persist: no` turns this off): the guest's own files, and whatever root changed,
  anywhere. `/tmp` starts empty, as at a boot. When the site changes a file, a visitor's copy of it gives way to the new
  one. The site's files and the system's are read-only to the guest, refused in each machine's words; root (`SYSTEM`,
  an enabled `OPERATOR`) can change or remove them. MS-DOS and CP/M mark them read-only instead, and `ATTRIB -R` and
  `STAT NAME $R/W` take that off, as they did. Debian's root can now write outside its home folder. A second name
  made with `ln` is kept as a link and comes back as one after a reload, and a moved file keeps what made it work (a
  story file, a device); one moved and not changed is kept by where it came from, and gives way as the file does.
- On the Unix machines the guest's home folder is the guest's, and so are the shell startup files in it (`.profile`,
  `.cshrc`, `.bashrc` and the rest): the guest may change or remove them, and their changes are kept
  like any other. A new `guest files:` setting gives the guest more of the site's files and folders the same way. Every
  other site file and folder stays the site owner's, read-only in its mode (`-r--r--r--`, `dr-xr-xr-x`, `-r--------`
  when locked), so the guest cannot add to or take from its folders. On Debian they also carry the immutable attribute:
  new `lsattr` and `chattr` (e2fsprogs 1.47), refusals in Linux's words (`Operation not permitted`), and root too is
  refused until `chattr -i`.
  A folder of the visitor's where the site has since put a file is left out, and the machine's `mkdir` says so at
  boot. Each machine keeps at most 256K characters; what does not fit is left out, largest first,
  and the disk is said to be full once for it, naming the program that wrote it. A site keeps its own saves when other sites share its host
  (`https://example.github.io/`).
- Ctrl-C, Ctrl-D, Ctrl-S, Ctrl-Q and Ctrl-U do what they should; `stty 9600` sets a real line speed.
- `teletype: yes` gives the V7 machine a `teletype on|off` command (the visitor's choice, remembered in their browser;
  off at first) that puts a Teletype Model 33 on the machine: ten characters a second with the carriage's time at each
  line end, 72 columns, capitals only through V7's `lcase` mapping (`\!` for a pipe), `#` to erase a character and `@`
  to kill the line, the clack, carriage return and bell made in the browser, and `stty` that reports the line and
  changes `lcase`, `echo`, `cbreak`, `raw` and the erase and kill characters, and hangs up at `stty 0`. Tabs go out as
  spaces, as V7's `-tabs` had them, and with `-echo` the output follows the prompt on the same line.
- File names, commands and aliases follow the machine's `case:` setting; Unix is case-sensitive.
- Glow colours follow `--phos-rgb`, `--dim-rgb` and `--err-rgb`, so a theme recolours the
  whole tube, and the amber example is one line.
- `alias name='a ; b'` works at the prompt: `;` inside quotes no longer splits the line.
- A seventh machine, `linux`: a KVM server running Debian 13 "trixie", on its serial console, with the
  visitor's own date and year. bash's prompt, tab completion, `history`, `!!` and `$(command)`; GNU's `ls`,
  `cat`, `rm` and `mkdir` messages and `--help`; `uname`, `ip`, `hostname -I`, `free`, `df`, `uptime`, `w`,
  `ps aux`, `top`, `systemctl`, `journalctl`, `fastfetch`, and `sudo` and `apt`, which know a guest when they
  see one. In `/usr/games`, `frotz` with Zork I, II and III, `sl`, `cowsay` and `fortune`; and `cmatrix`.
  New machine setting `shell: bash`; a machine's `year` may be `new Date().getFullYear()`.
- NetHack 3.6.7 on the Linux machine, in `/usr/games`, translated from its C, with saves, bones and scores
  kept in the browser; `apt` and its history show `nethack-console` installed with the other games.
- `machine: random` starts on a machine picked at random, the same one for the rest of the browser tab.
  The Commodore 128 is left out of the draw (`random:false` in the catalog).
- `help` on the Unix machines lists the terminal's own commands apart, and their manual pages say the
  terminal answers them. No machine has an about file (`about` is a command; the C128's ABOUT
  program stays), and `mail` has no program file.
- On phones, the monitor stays in view when the soft keyboard opens; on a short screen the cable is put
  away to make room, and a phone held sideways gets the whole width.
- On a phone, a full-screen program wider than the glass (`rogue`, `backgammon`, `canfield`, NetHack, Empire,
  Moria, Conquest and others) pans with a sideways swipe, with a little momentum; faint ‹ › marks show where
  more is cut off, and the next key or a resize goes back to following the cursor.
- On a phone, typing into a full-screen program (the C128, the Apple IIe, `rogue`, NetHack and the rest) sends
  each letter once, while the keyboard is still suggesting the word.
- An eighth machine, `tops20`: a DECSYSTEM-2060 running TOPS-20 V6.1 in 1986, with the EXEC's `@`, Escape
  recognition and guide words, `?` for what comes next, generation numbers, `UNDELETE` and `EXPUNGE`,
  `SYSTAT`, `FINGER`, `MM`, and `ADVENTURE` and `DUNGEON` in `<GAMES>`. A machine can now answer Escape,
  Tab and `?` at the prompt itself (`Phosphor.recognize`).
- A ninth machine, an Apple IIe with DOS 3.3 (`apple2`): its own 40-column screen, Applesoft BASIC, the monitor and a
  disk kept in the browser, with Zork I, II and III and four new BASIC games on it. When the browser's storage is
  full, `SAVE`, `BSAVE` and text files written with `OPEN`, `WRITE` and `CLOSE` say `DISK FULL` and write nothing, and
  `DELETE`, `RENAME`, `LOCK`, `UNLOCK` and `INIT` say `I/O ERROR` and leave the disk as it was.
- A tenth, a Commodore 128 (`c128`, 1986): BASIC 7.0 on its screen editor, in 40 columns or, with Escape then X,
  80; a 1571 disk kept in the browser; and `GO 64` for a Commodore 64 with BASIC V2. Six of David Ahl's
  type-in games are on the disk. When the browser's storage is full, `DSAVE` writes nothing and `DS$` says
  `72,DISK FULL`.
- An eleventh, an IBM System/370 Model 158 running VM/370 Release 6 with CMS (`vm370`, 1980), on a typewriter
  terminal: LOGON, the CP and CMS commands, the ready message, minidisks with LINK and ACCESS, the CMS editor, EXECs,
  the letter in the reader, and the guest's A-disk kept in the browser; checked against Release 6 under Hercules.
  Ctrl-C at a running CMS command or EXEC is an attention: it goes on typing while the terminal reads a line, losing
  none of the lines it had worked out ahead but the one the attention cut short (`HX` ends it, `HT` stops the typing
  until the command is done, and any other line is stacked for CMS, or for the command's own read, such as FORMAT's or
  SORT's question even when the attention cut it short). The rest of a line split with `#` stays stacked ahead of the
  line typed, also when the attention comes while the ready message is being typed. A line typed after an attention is
  an Immediate command only when it is nothing else (`x#hx` is stacked), and a rest of just `HT` or `RT` is not
  stacked but acts as soon as CMS reads the line (DMSCAT): `type` of a long file with `#ht` after it types nothing.
  When the command is done its ready message comes, and CMS reads what is stacked first and waits for the attention's
  read only when nothing is left (DMSCRD), so those commands run beside it and `HX` ends only what is still running;
  `#CP` alone at that read stops the virtual machine where it is, and `BEGIN` lets it go on, with no ready message of
  its own (a line CMS had taken from the stack but not yet begun runs then). Another attention at that read only puts
  it up again; `LOGOFF`, `IPL` or `SYSTEM RESET` there, or in an EXEC running beside it, ends all that was going on
  beside it once CP has typed what it says, and `DISCONN` keeps the virtual machine running unseen, for a `LOGON`
  within 15 minutes (VM/370 logs a disconnected machine off 15 minutes after it reads from the terminal; here the time
  counts from DISCONN) to reconnect to (`RECONNECTED AT`, in CP mode until `BEGIN`); a read it makes meanwhile, an
  EXEC's or the editor's, waits for the reconnection. This uses `Phosphor.aside`, which
  runs output beside a pending read. CP types `!` at each attention (with `TERMINAL ATTN OFF` neither that nor a new
  line: the read goes on in the same line, after any output the attention cut short, and what the command or EXEC
  types meanwhile comes below that line, where the carriage stayed, through a new `Phosphor.onInterrupt` answer,
  `{says, same: true}`); a line half typed in is cancelled and the read is up again, so an EXEC's `&READ` and the
  editor carry on, and at an empty read, or while the editor types, the attention is CMS's (`HX` ends the EXEC or the
  edit). A machine can now answer an empty line itself (`Phosphor.blank`). A site's `prompt:` no longer gives it one:
  it has no prompt, as the typewriter terminal had none.
- A twelfth, a Radio Shack TRS-80 Model III (`trs80`, 1981): its own 64 by 16 screen with block graphics, TRSDOS 1.3
  (`DIR`, `FREE`, `LIST`, `KILL`) and Disk BASIC with the disk kept in the browser, the ROM's Level II BASIC
  with `BREAK` held at power-on, `CSAVE`/`CLOAD` to a cassette kept in the browser, `SYSTEM`, Zork I and II,
  two of David Ahl's public-domain games and a new block-graphics one; checked against xtrs and MAME. When the
  browser's storage is full, `SAVE` says `Disk full`, and `KILL` and `RENAME` fail as a directory write did (`Disk I/O
  error` in BASIC, `* * ERROR 18 * *` at TRSDOS).
- A thirteenth, a Honeywell Level 68 running Multics MR8.0 (`multics`, 1981): `login Guest`, ready messages, QUIT
  and command levels, `>udd>Guest>Guest` with segments, ACLs and added names, `qedx`, `exec_com`, info segments,
  and the letter in `read_mail`; the guest's files are kept in the browser. A machine can now take Ctrl-C itself
  (`Phosphor.onInterrupt`).
- And a dial-up bulletin board (`bbs`): `connect bbs` dials it on a 2400 bps modem, with the dial tone, digits, ring
  and handshake through the speaker, and `CONNECT 2400`. Its messages, bulletins and files are the site's own words;
  callers pick a handle, choose ANSI colour or ASCII, post, write on the wall and play two doors, Star Haul and
  Deep Mine, all kept in the browser. `+++` and `ATH` hang up, and the terminal goes back to the machine you came
  from. MS-DOS and CP/M have `TERM` to call it too, by name or by its path (`C:\COMM\TERM`, `A:TERM`). Like the
  C128, it sits out `machine: random`. New section `== board ==`; the engine colours runs of a line for machines
  that ask (`.k0` to `.kf`).
- Debian 13 and TOPS-20 have a super-user too, for those who look in the right place: on Debian, `su`,
  `su -c`, and as root `sudo`, `systemctl` and `shutdown`; on TOPS-20, OPERATOR, `ENABLE` and the `$` prompt.
  TOPS-20's `LOGIN` now says `?Incorrect password`, as the 6.1 EXEC does.
- A command started with `&` really runs in the background: the prompt comes back at once, `ps` lists it until it ends,
  its output arrives while you type, and bash and csh say `Done`, `Exit N` or `Terminated` before the next prompt, which
  V7 sh does not. `jobs`, `fg`, `bg` and `%n` (bash and csh), `wait` and `kill` (all three); under bash and csh a job
  that reads the terminal or wants the screen stops, as job control has it; under V7 sh it reads /dev/null, or ends if
  it wants the screen. ^C leaves background jobs alone.
- ^Z stops the foreground job under bash and csh: bash says `[1]+  Stopped` and goes on with the rest of the line,
  leaving any loop it was in; csh says `Stopped` and drops the rest of the line. `jobs`, `fg`, `bg` and `kill -CONT`
  take it from there; vi and the other full-screen programs leave the glass and come back as they were with `fg`. At
  the shell's own `read`, bash's tty echoes the ^Z and throws away what was typed before it, and the read goes on. A
  loop, `if` or `case` ending in `&` runs as a background job (sh and bash; bash's `jobs` shows it laid out over several
  lines, as bash's own command printer does), and `( ... )` is a subshell with its own directory, variables and status
  (starting with the shell's `$?`), in pipes, with redirection and with `&`; `jobs` prints a `( ... )` spaced out as
  each shell does (`( sleep 9 & sleep 8 )` shows as typed under bash, and as `( sleep 9; sleep 8 )` under csh), nested
  ones too, with any redirection after it (bash writes it as its printer does, `2> /dev/null`, as it does after any
  command); an escaped `\&` in it is an ordinary word, not a background `&`. A loop, `if` or `case` can be
  piped or redirected too (sh and bash: `done | cat`, `while read l; do ...; done < f > g`, `fi > f`,
  `echo x | while read ...`), and `read` takes its lines from a pipe or `<`, setting its names to nothing at the end
  of them. Each command of a pipe is its own
  process, so a loop, `read`, `cd` or `x=1` in one leaves the shell as it was (csh runs one of its own commands at
  the end of a pipe in the shell itself); the commands inside a read loop read from its input too; a loop writing to
  `head` or `read`, straight or through `cat`, `grep`, `tr` or `tee`, ends when it writes again after they have read
  what they want, as SIGPIPE ends it (here they start reading once 4096 bytes wait in the pipe, V7's and 4.3BSD's
  pipe size, or as soon as the writer waits in a `sleep` or a read from the terminal; so a short loop is usually done
  before they start, as on the real systems, and `while :; do echo y; sleep 1; done | head -1` ends after a second).
  What `echo -n` writes goes down the pipe as it is written: `head -c` counts its bytes, and `head -n` and `read` count
  a line only at its newline, so `while :; do echo -n x; done | head -c 10` ends and
  `(echo -n a; sleep 1; echo b) | head -1` prints `ab`. Any other loop is ended after 65536 writes into a pipe, to keep
  memory bounded.
- bash's `fg` and `bg` on a job that has just ended say `job has terminated`; bash's `kill` takes the real-time signals
  34 to 64 and `kill -l` names them; a signal sent to a stopped job takes effect when it is continued; KILL acts at
  once, and `kill %n` (bash) or csh's `kill` follow TERM and HUP with CONT; bash says again that a job is stopped
  when `kill %n` signals it, so a stopped job it ends shows as stopped first and as ended at the prompt after (csh:
  `kill -STOP` on one says `Already stopped`).
- `kill` on someone else's process says `Operation not permitted` (bash) or `Not owner` (csh, V7), `$$` is the login
  shell's id that `ps` shows (in a `( ... )` too), and a signal sent to `$$` that the shell does not ignore ends the
  session (all three ignore TERM and QUIT and catch INT; bash and csh also ignore TSTP, TTIN and TTOU, and V7's sh also
  catches SEGV and ALRM, though ALRM ends it when it comes while the shell waits at its prompt, which is when one sent
  by a background job arrives).
- IRIX has its own signal numbers (`USR1` 16, `STOP` 23, `TSTP` 24, `CONT` 25, new machine setting `signals: irix`).
- A full-screen job brought back with `fg` and then killed from another job closes its screen and gives the prompt back,
  saying why (`Terminated`, `Killed`, ...); after ^C, V7's `wait` leaves `$?` at 0, as its sh did.
- csh reports an error in a `while` expression at the `while` line and lists one-word aliases without ( ); bash's
  `alias r = x` fails word by word; GNU grep has `-o` and `-F`; GNU head takes `-n`, `-c`, `--lines` and `--bytes`,
  with GNU's size suffixes (`b`, `k` or `K` up to `Q`, `kB`, `KiB` and so on), and the old `-2c`, `-1k` or `-3v` as
  its first argument (4.3BSD's and IRIX's take only `-count`), and reads `-` from the keyboard in its turn among the
  files, and `-z` (lines that end at a NUL); GNU's head and tail say `cannot open 'f' for reading`, or `error reading
  'd'` for a directory, sort `cannot read: f`, and grep, wc and the rest name the file and the error after their own
  name. GNU wc prints a row for each file and a `total` for more than one, as wide as GNU's are (a single count of a
  single file unpadded, otherwise the width of the files' total size, at least 7 when one is a directory or a pipe),
  and for a directory a row of 0s before `Is a directory`, as a terminal shows them. wc on V7, 4.3BSD and IRIX prints
  a row for each file it can open and a `total` after more than one name, in each one's own columns (V7's `%7ld`,
  `%7ld ` and `%7ld`, 4.3BSD's ` %7ld`), its counts in the order of the option's letters (`wc -cl`). bash's `read`
  takes its options (`-r`, `-p` and the rest) and with no name sets `REPLY`, and splits at IFS as bash does
  (`IFS=: read a b` splits `x:y` into `x` and `y`; IFS white space around a break goes, and the last name takes the
  rest); without `-r` a backslash keeps the next character from splitting the words, and one at the
  end of a line goes on to the next (V7's `read` too, which splits at each IFS character while it has names left and
  gives the last one the rest as it is, as its readvar does). A last line with no newline is read, and `read` still
  returns 1 for it, so a `while read` loop leaves it out (bash and V7).
- `echo -n`, and `head -c` cutting a line short, leave the line open: what comes next, the prompt too, goes on in it.
  A file or pipe keeps a last line with no newline as it is: `echo -n q > f` makes a file of 1 byte, `>>` goes on in
  that line, and `cat`, `wc`, `head`, `tail`, `tr` and `tee` leave it open as well (after `echo -n ab | cat` the prompt
  follows `ab`); GNU `cat -n` numbers a line once, though the next file goes on in it. A background job's output still
  comes on its own line above the prompt, even after an `echo -n`. vi ends every line it writes with a newline, and says
  `[Incomplete last line]` when it reads a file without one, as ex and vi did (on Linux vim-tiny says it too, counting
  bytes: `1 line, 1 byte`, and `written` after a write).
- bash has `{ list; }` (and V7 sh too): run in the shell itself, or as its own process in a pipe or with `&`, with any
  redirection after it for all of it, and it reads on at a `>` prompt until its `}`; bash also has `<<<` here-strings
  and `${PIPESTATUS[@]}` (`${PIPESTATUS[0]}`, `$PIPESTATUS`). Inside double quotes a backslash quotes only `$`, `` ` ``,
  `"`, `\` and a newline (sh and bash: `echo "x\\:y"` prints `x\:y`). grep names the file on each line when it has more
  than one and ends with status 2 when it could not open one: V7's stops there, the others go on; GNU's `-q` prints
  nothing and makes it 0 after a match, its `-s` and System V's (IRIX) leave out the messages, and V7's and 4.3BSD's
  `-s` print nothing but the messages.
- bash has `time` (with `-p`) and `!` before a pipeline, and `x=(1 2)` and `declare`, `typeset` and `readonly` take a
  `( )` list (here `$x` is its first element; `local`, with no functions here, says it needs one, as bash does). An
  alias is not expanded again inside its own text (`alias g='{ g; }'` says `g: command not found`), and a command not
  found leaves 127 in bash; an `if` that ran no branch leaves 0 there. A `)` that closes nothing is a syntax error
  (`Too many )'s.` in csh). A quote over several lines of a typed `for` or `while` is read whole before it is checked, a
  script is checked for syntax errors a whole command at a time, including one whose quote runs over several lines,
  before that command runs, and a here-document's word (`<<'EOF'`, `<<"EOF"`) no longer hides the lines after it from
  the check. GNU grep reads `-` as its input; `wc` of a directory on V7, 4.3BSD and IRIX counts the bytes of its raw
  entries (16 to an entry on V7; on 4.3BSD its `direct` entries in 512-byte blocks, which IRIX, whose EFS layout no
  source here settles, shares). `x=1` on CP/M and MS-DOS is a command
  like any other (`X=1?`, `Bad command or file name`).
- Here-documents in all three shells: `<<EOF` in bash and V7 sh (bash also `<<-EOF`, which drops the tabs before each
  line; V7 reads `-EOF` as the word) and `<< word` in csh, typed after the shell's `>` prompt (csh's `heredoc` reads
  them with none) or in a script, with pipes, redirection, loops and `&`. A quote in the word keeps the lines as they
  are; otherwise `$names` and `` `commands` `` (and bash's `$( )` and `$(( ))`) are worked out each time the command
  runs. csh's last line has to be the word as typed, quotes and all. bash warns when the end of input ends one, and
  its `jobs` shows the lines. bash's `$(( ))` has all of its operators, assignments, `++` and `--`, 64-bit numbers,
  `0x`, octal and `base#n`, names with or without `$`, and its error messages, after which nothing more of the line
  runs (status 1); `$y` before a `$((y++))` is the value before, and a `$( )` may hold another `$( )`. `time` alone
  prints its zeros. bash has indexed and associative arrays: `x=(a b)`, `x[3]=d`, `x+=(e)`, `${x[1]}`, `${x[@]}` (a
  word each in `"${x[@]}"`), `${#x[@]}`, `${!x[@]}`, `${#x}`, `unset 'x[1]'`, `declare -a`, `declare -A` (its keys in
  bash's own order) and `declare -p`.
- bash has `(( ))`, `let`, `printf` (`%s %b %q %c %d %i %o %u %x %e %f %g`, flags, widths and precisions, the format
  again for words left over, `-v`), `[[ ]]` (patterns, `=~` and `BASH_REMATCH`, `-eq` and the rest as arithmetic, file tests,
  `&&`, `||`, `!`, `( )`), brace expansion (`{a,b}`, `{1..5}`, `{a..e}`, `{01..10..2}`), `unalias [-a]`, `set -- a b` and
  `set a b` for `$1` `$#` and `$@`, and an array assignment over several lines. A `$(( ))` that goes wrong in a pipeline
  ends only its own command; in a script the error, and `let`'s and `(( ))`'s, start with `name: line N:`, and a
  here-document cut short by the end of a script is warned about once. A `` `command` `` that does not read says so
  with `command substitution: line N:` and gives status 2 (`` x=`echo a\`b` ``), and ``x=`cmd` `` takes cmd's status.
- 4.3BSD and IRIX csh expand `{a,b}`, take `\!*`, `\!^`, `\!$` and `\!:n` in an alias, unalias a pattern
  (`unalias r*`), say `x=1: Command not found.`, and run the commands before a here-document on its line first.
- 4.3BSD's `sh` is the Bourne shell, as `/bin/sh` was there: `sh` at the `%` prompt starts one (`$`, V7's grammar and
  messages) until `exit` or ^D; `sh file`, `sh -c` and `#!/bin/sh` scripts run in it.
- `x = 1` and `x=1` on VM/370, Multics and TOPS-20 are lines like any other for the machine to answer; only VMS takes
  them as a symbol assignment. The terminal's own commands (`help`, `mail` and the rest) reach CMS as typed,
  blanks and all.
- The C128 keeps its ROM's secret, and the Apple IIe and the Commodores have opinions about other machines.
- The TRS-80, VM/370, Multics and the bulletin board have a few things of their own for the curious to find.
