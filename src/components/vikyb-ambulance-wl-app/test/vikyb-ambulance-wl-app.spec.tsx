import { newSpecPage } from '@stencil/core/testing';
import { VikybAmbulanceWlApp } from '../vikyb-ambulance-wl-app';

describe('vikyb-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [VikybAmbulanceWlApp],
      html: `<vikyb-ambulance-wl-app base-path="/"></vikyb-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("vikyb-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [VikybAmbulanceWlApp],
      html: `<vikyb-ambulance-wl-app base-path="/ambulance-wl/"></vikyb-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("vikyb-ambulance-wl-list");
  });
});
