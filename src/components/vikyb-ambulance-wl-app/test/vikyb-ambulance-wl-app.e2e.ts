import { newE2EPage } from '@stencil/core/testing';

describe('vikyb-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vikyb-ambulance-wl-app></vikyb-ambulance-wl-app>');

    const element = await page.find('vikyb-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
