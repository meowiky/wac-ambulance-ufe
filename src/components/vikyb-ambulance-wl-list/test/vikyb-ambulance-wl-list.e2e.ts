import { newE2EPage } from '@stencil/core/testing';

describe('vikyb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vikyb-ambulance-wl-list></vikyb-ambulance-wl-list>');

    const element = await page.find('vikyb-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
