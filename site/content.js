/* Your terminal's words: the welcome message, the about file and the letter.
   The example text below is CC0 (public domain); replace it with your own. See README.md
   for the full list of sections and markup. Do not type a backtick, or a dollar sign
   followed by {, anywhere between the two backticks below. */
Phosphor.content(String.raw`

# Printed after login (and kept in /etc/motd).
== welcome ==
welcome to phosphor-9.
~ type help and press return.

# The about file and the about command.
== about ==
this is the demo of phosphor-9, a terminal you can put on your own website.
it is always {year} in here.
~ read your mail to find out how.

# The letter (the mail command). "you have mail." shows at login while this has text.
#
# Write each paragraph as ONE line: the glass wraps it to fit, phones included.
#
# Project rows: name, a run of spaces, then the status or date. Pad every row to the same
# width (41 characters here) so the right-hand column lines up; the ~~ marks are not
# printed and do not count, and {year} counts as the four digits it becomes. On a narrow screen the run of spaces shrinks to fit.
# ~~text~~ strikes text through: here, the real date, then the in-character one, in
# whatever year the machine is.
# Retired projects move to the attic file (site/home.js).
== mail ==
welcome to phosphor-9!

this is a video terminal for your website. it is plugged into six old machines: version 7 unix, 4.3bsd, vax/vms, ms-dos, cp/m and irix. type connect to change machines. you fill them with your own words.

it is plain html, css and javascript: no build step, no frameworks, no server code. copy the folder to any web server, edit the files in site/, and it is yours.

take one home:
~ tap or click a title to visit.

source code                     on github -> https://github.com/GaijinSystems/phosphor
licence                      gnu agpl v3+ -> https://github.com/GaijinSystems/phosphor/blob/main/LICENSE
gaijin systems             gaijin.systems -> https://gaijin.systems

~ no terminal should be without one!


# A command of your own: == command: NAME | HELP TEXT == then what it prints.
# Several names: == command: projects, proj | ... ==   No help text = hidden from help.
== command: motto | words to live by ==
keep the tube warm.

`);
