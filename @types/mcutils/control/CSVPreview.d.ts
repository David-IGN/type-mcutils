import { ObjectEvent, default as OlObject } from 'ol/Object';
import papa from 'papaparse';
import { Element as OlExtElement } from 'ol-ext/util/element'; // Renommer l'import pour éviter les conflits

export interface CSVPreviewOptions {
    target: OlExtElement;
    csv: string;
    nbLines?: number;
    line?: boolean;
}

export default class CSVPreview extends OlObject {
    /** Create a preview for a CSV
     * @constructor
     * @extends {OlObject}
     * @param {CSVPreviewOptions} options
     *  @param {OlExtElement} options.target
     *  @param {string} options.csv
     *  @param {number} [options.nbLines=5]
     *  @param {boolean} [options.line=false] display line number
     */
    constructor(options: CSVPreviewOptions);

    /** Show data according to papaparse options
     * @param {papa.ParseConfig} papaOptions - Options for PapaParse
     * @param {Object | Array<string>} select0 - Selected rows or fields
     * @returns {papa.ParseResult} The parsed CSV data
     */
    showData(papaOptions: papa.ParseConfig, select0: Object | Array<string>): papa.ParseResult;

    /** Get the current result
     * @returns {papa.ParseResult} The parsed data
     */
    getResult(): papa.ParseResult;

    /** Set current CSV data
     * @param {string} csv - The CSV data to set
     */
    setCSV(csv: string): void;
}
