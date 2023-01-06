chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

const helpscout = "https://secure.helpscout.net"

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(helpscout)) {
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        const nextState = prevState === "ON" ? "OFF" : "ON"

        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === "ON") {
            await chrome.scripting.insertCSS({
                files: ["darktheme.css"],
                target: { tabId: tab.id },
            });
            console.log("CSS loaded");

        } else if (nextState === "OFF") {
            await chrome.scripting.removeCSS({
                files: ["darktheme.css"],
                target: { tabId: tab.id },
            });
            console.log("CSS unloaded");
        }
    }
});