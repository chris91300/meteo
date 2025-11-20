

/**
 * Constructs the path to the animated SVG icon based on its name.
 * @param {string} name - The name of the icon (without extension).
 * @returns {string} The full path to the icon's SVG file.
 */
export default function getIconSRC(name) {
    const src = `/assets/svg/animated/${name}.svg`;
    return src;
}