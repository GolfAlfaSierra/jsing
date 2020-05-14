function qs(selector) {
    if (selector === undefined) return selector = 'html';
    if (document.querySelectorAll(selector)[0] === undefined) return 'nothing found';
    return document.querySelectorAll(selector);
}
