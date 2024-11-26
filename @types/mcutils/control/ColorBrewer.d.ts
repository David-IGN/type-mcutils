import { ObjectEvent, default as OlObject } from 'ol/Object';
import ColorPicker from 'ol-ext/util/input/Color';
import { Element } from 'ol-ext/util/element';

export interface ColorBrewerOptions {
  target: Element;
  size?: number;
  colors?: string[];
}

export interface ColorBrewerEvent extends ObjectEvent {
  type: 'change:scheme' | 'change:color' | 'check';
  scheme?: string;
  property?: 'saturate' | 'darken' | 'revers';
  checked?: boolean;
}

/** Color Brewer control 
 * 
 * @extends {OlObject}
 */
export default class ColorBrewer extends OlObject {
  static types: Record<string, { title: string; scheme: string[] }>;

  /**
   * @constructor
   * @param {ColorBrewerOptions} options The options for initializing the ColorBrewer control.
   * @param {Element} options.target The target DOM element where the control will be placed.
   * @param {number} [options.size=5] The number of colors to display in the scheme.
   * @param {string[]} [options.colors] A list of custom colors to initialize.
   */
  constructor(options: ColorBrewerOptions);

  /** Set the current scheme
   * @param {string} scheme The name of the color scheme to set.
   */
  setScheme(scheme: string): void;

  /** Get the current scheme
   * @returns {string} The current scheme name.
   */
  getScheme(): string;

  /** Set the size (number of colors) in the color scheme
   * @param {number} size The number of colors.
   */
  setSize(size: number): void;

  /** Get the current list of colors in the brewer
   * @returns {string[]} The current list of colors.
   */
  getColors(): string[];

  /** Set the list of colors in the brewer
   * @param {string[]} colors A list of colors.
   */
  setColors(colors: string[]): void;

  /** Select a color by index (manual mode)
   * @param {number} c The index of the color to select.
   */
  selectColor(c: number): void;

  /** Set the brewer type
   * @param {string} type The type of brewer (e.g., 'sequential', 'diverging').
   */
  setType(type: string): void;

  /** Update colors
   * @private
   */
  private _updateColors(): void;

  /** Display colors
   * @private
   * @param {Element} div The container where colors are displayed.
   * @param {string} scheme The color scheme.
   * @param {number} [nb=5] The number of colors to display.
   */
  private _showColors(div: Element, scheme: string, nb?: number): void;
}
