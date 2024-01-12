export const oneCharacterIsDifferent = (string1: string, string2: string) => {
    if (string1.length !== string2.length) {
        return false;
    }

    let differences = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1.charAt(i) !== string2.charAt(i)) {
            differences++;
            if (differences > 1) {
                return false;
            }
        }
    }

    return true;
};
