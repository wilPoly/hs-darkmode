browser.runtime.onInstalled.addListener(() => {
    browser.action.setBadgeText({
        text: "OFF",
    });
});

const helpscout = "https://secure.helpscout.net/"

browser.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(helpscout)) {
        const prevState = await browser.action.getBadgeText({ tabId: tab.id });
        const nextState = prevState === "ON" ? "OFF" : "ON"

        await browser.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === "ON") {
            await browser.scripting.insertCSS({
                files: ["darktheme.css"],
                target: { tabId: tab.id },
            });
            console.log("CSS loaded");
        } else if (nextState === "OFF") {
            await browser.action.scripting.removeCSS({
                files: ["darktheme.css"],
                target: { tabId: tab.id },
            });
            console.log("CSS unloaded");
        }
    }
});