function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        Math.round(
            255 *
                (l -
                    a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1)))
        );

    return `#${f(0).toString(16).padStart(2, "0")}${f(8)
        .toString(16)
        .padStart(2, "0")}${f(4).toString(16).padStart(2, "0")}`;
}

export function generateColumnColor(input: number): string[] {
    const colors: string[] = [];

    for (let i = 0; i < input; i++) {
        const hue = Math.floor((360 / input) * i);
        const saturation = 90; 
        const lightness = 55; 
        const hex = hslToHex(hue, saturation, lightness);
        colors.push(hex);
    }

    return colors;
}
