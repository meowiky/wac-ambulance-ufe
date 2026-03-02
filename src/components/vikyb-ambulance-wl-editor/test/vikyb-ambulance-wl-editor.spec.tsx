import { newSpecPage } from '@stencil/core/testing';
import { VikybAmbulanceWlEditor } from '../vikyb-ambulance-wl-editor';

describe('vikyb-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VikybAmbulanceWlEditor],
      html: `<vikyb-ambulance-wl-editor></vikyb-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <vikyb-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vikyb-ambulance-wl-editor>
    `);
  });
});
