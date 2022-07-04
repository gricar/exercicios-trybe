const unitsVolume = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsVolume.indexOf(fromUnit);
    const toIndex = unitsVolume.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

console.log(convertVolume(30, 'l', 'ml'));
