function isNullOrWhiteSpace(input: string) {
    if (typeof input === 'undefined' || input == null) { return true; }
    return input.replace(/\s/g, '').length < 1;
}
export default isNullOrWhiteSpace;