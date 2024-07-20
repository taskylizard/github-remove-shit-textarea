// ==UserScript==
// @name         Disable GitHub textarea codeframe
// @version      0.1.1
// @namespace    com.tasky.machine
// @license      MIT
// @homepageURL  https://github.com/taskylizard/github-remove-shit-textarea
// @description  Disables the garbage textarea.
// @author       taskylizard (https://github.com/taskylizard)
// @match        https://*.github.com/*
// @run-at       document-end
// ==/UserScript==

const selector = "#read-only-cursor-text-area";

function callback(mutationList, _observer) {
  mutationList.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.querySelector && node.querySelector(selector)) {
        node.querySelector(selector).disabled = true;
      }
    });
  });
}

const observer = new MutationObserver(callback);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
