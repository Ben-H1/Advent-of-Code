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

export const commonCharacterCount = (string1: string, string2: string) => {
    let count = 0;

    const string1Array = string1.split('');
    const string2Array = string2.split('');

    string1Array.forEach(c => {
        if (string2Array.includes(c)) {
            count++;
            string2Array.splice(string2Array.indexOf(c), 1);
        }
    });

    return count;
};
