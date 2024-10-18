pref("browser.startup.homepage", "about:blank");
pref("startup.homepage_welcome_url", "about:blank");
pref("startup.homepage_welcome_url.additional", "about:blank");
// disable first welcome
pref("browser.aboutwelcome.enabled", false);
pref("trailhead.firstrun.branches", "nofirstrun-empty");

pref("general.autoScroll", true);
pref("browser.urlbar.suggest.searches", false);
pref("browser.urlbar.suggest.engines", false);
pref("browser.urlbar.suggest.topsites", false);
pref("browser.urlbar.suggest.enabled", false);
pref("browser.urlbar.groupLabels.enabled", false);

// PREF: Clear history when Firefox closes
// https://support.mozilla.org/en-US/kb/Clear%20Recent%20History#w_how-do-i-make-firefox-clear-my-history-automatically
// NOTICE: Installing user.js will remove your browsing history, caches and local storage.
// NOTICE: Installing user.js **will remove your saved passwords** (https://github.com/pyllyukko/user.js/issues/27)
// NOTICE: Clearing open windows on Firefox exit causes 2 windows to open when Firefox starts https://bugzilla.mozilla.org/show_bug.cgi?id=1334945
pref("privacy.sanitize.sanitizeOnShutdown", true);
pref("privacy.clearOnShutdown.cache", true);
pref("privacy.clearOnShutdown.cookies", true);
pref("privacy.clearOnShutdown.downloads", true);
pref("privacy.clearOnShutdown.formdata", true);
pref("privacy.clearOnShutdown.history", true);
pref("privacy.clearOnShutdown.offlineApps", true);
pref("privacy.clearOnShutdown.sessions", true);
pref("privacy.clearOnShutdown.openWindows", true);

// PREF: Set time range to "Everything" as default in "Clear Recent History"
pref("privacy.sanitize.timeSpan", 0);

// PREF: Clear everything but "Site Preferences" in "Clear Recent History"
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.cache", true);
pref("privacy.cpd.cookies", true);
pref("privacy.cpd.downloads", true);
pref("privacy.cpd.formdata", true);
pref("privacy.cpd.history", true);
pref("privacy.cpd.sessions", true);

// PREF: Don't remember browsing history
pref("places.history.enabled", false);

// don't prompt to remember login
pref("signon.rememberSignons", false);
pref("signon.prefillForms", false);
