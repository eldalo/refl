export default function refl(str) {
    let translation = str;
    const reverse = (str) => str.split('').reverse().join('');

    function minMay(str) {
        const length = str.length;
        let translation = '';
        let capitalize = true;

        for (let i = 0; i < length; i++) {
            const char = str.charAt(i);

            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    const length = translation.length;
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2));

        translation = `${firstHalf}-${secondHalf}`;
    }

    return translation;
}