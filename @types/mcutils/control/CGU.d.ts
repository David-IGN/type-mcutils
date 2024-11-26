import type { Options as ControlOptions } from 'ol/control/Control';
import Control from 'ol/control/Control';
import type { Element } from 'ol-ext/util/element';

export interface CGUOptions extends ControlOptions {
  target?: string | Element;
  key?: string; // GPP API key
}

/** CGU control 
 * 
 * @api
 */
export default class CGU extends Control {
  /**
   * @param {CGUOptions} options 
   * @param {string | Element} [options.target] 
   * @param {string} [options.key] 
   */
  constructor(options: CGUOptions);

}
