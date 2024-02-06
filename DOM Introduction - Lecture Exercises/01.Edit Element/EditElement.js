function editElement(reference, match, replacer) {
    let content = reference.textContent;
    reference.textContent = content.split(match).join(replacer);
}