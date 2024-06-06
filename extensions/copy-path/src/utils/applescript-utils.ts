import { runAppleScript } from "@raycast/utils";

export const scriptFinderPath = `
if application "Finder" is not running then
    return "Finder not running"
end if

tell application "Finder"
    return POSIX path of ((insertion location) as alias)
end tell
`;

// finder path, with / at the end
export const getFocusFinderPath = async () => {
  try {
    return await runAppleScript(scriptFinderPath);
  } catch (e) {
    return "Finder not running";
  }
};

export const scriptWindowTitle = `
global frontApp, frontAppName, windowTitle

set windowTitle to ""
try
    tell application "System Events"
        set frontApp to first application process whose frontmost is true
        set frontAppName to name of frontApp
        tell process frontAppName
            tell (1st window whose value of attribute "AXMain" is true)
                set windowTitle to value of attribute "AXTitle"
            end tell
        end tell
    end tell
on error errMsg
    set windowTitle to ""
end try

return windowTitle
`;

// finder path, with / at the end
export const getFocusWindowTitle = async () => {
  try {
    return await runAppleScript(scriptWindowTitle);
  } catch (e) {
    return "";
  }
};

// webkit browser
export const scriptWebkitBrowserPath = (app: string) => `
tell application "${app}"
    set currentURL to URL of current tab of front window
end tell
return currentURL`;

export const getWebkitBrowserPath = async (app: string) => {
  try {
    return await runAppleScript(scriptWebkitBrowserPath(app));
  } catch (e) {
    return "";
  }
};

// chromium browser
export const scriptChromiumBrowserPath = (app: string) => `
tell application "${app}"
    set currentURL to URL of active tab of front window
end tell
return currentURL`;

export const getChromiumBrowserPath = async (app: string) => {
  try {
    return await runAppleScript(scriptChromiumBrowserPath(app));
  } catch (e) {
    return "";
  }
};
