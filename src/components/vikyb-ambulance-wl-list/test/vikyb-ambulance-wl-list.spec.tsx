import { newSpecPage } from '@stencil/core/testing';
import { VikybAmbulanceWlList } from '../vikyb-ambulance-wl-list';

describe('vikyb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VikybAmbulanceWlList],
      html: `<vikyb-ambulance-wl-list></vikyb-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as VikybAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
