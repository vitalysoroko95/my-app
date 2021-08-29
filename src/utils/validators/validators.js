export const required = value => {

    if (value) return undefined;
    return 'field is required';

}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Must be ${maxLength} characters or less`;
    return undefined;
}
