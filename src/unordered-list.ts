import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("unordered-list")
export class UnorderedList extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div>
        <h2>Unordered List</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Nunc dignissim risus id metus.</li>
          <li>Cras ornare tristique elit.</li>
          <li>Vivamus vestibulum ntulla nec ante.</li>
          <li>
            Vivamus vestibulum ntulla nec ante.
            <ul>
              <li>Praesent placerat risus quis eros.</li>
              <li>Fusce pellentesque suscipit nibh.</li>
              <li>Integer vitae libero ac risus egestas placerat.</li>
              <li>Vestibulum commodo felis quis tortor.</li>
              <li>Ut aliquam sollicitudin leo.</li>
              <li>Cras iaculis ultricies nulla.</li>
              <li>Donec quis dui at dolor tempor interdum.</li>
              <li>
                Nunc dignissim risus id metus.
                <ul>
                  <li>Praesent placerat risus quis eros.</li>
                  <li>Fusce pellentesque suscipit nibh.</li>
                  <li>Integer vitae libero ac risus egestas placerat.</li>
                  <li>Vestibulum commodo felis quis tortor.</li>
                  <li>Ut aliquam sollicitudin leo.</li>
                  <li>Cras iaculis ultricies nulla.</li>
                  <li>Donec quis dui at dolor tempor interdum.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    `;
  }

  static styles = css`
    :host {
      text-align: left;
    }
    :host li::marker {
      color: red;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "unordered-list": UnorderedList;
  }
}
