import { newSpecPage } from '@stencil/core/testing';
import { VikybAmbulanceWlList } from '../vikyb-ambulance-wl-list';

describe('vikyb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VikybAmbulanceWlList],
      html: `<vikyb-ambulance-wl-list></vikyb-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <vikyb-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vikyb-ambulance-wl-list>
    `);
  });
});
