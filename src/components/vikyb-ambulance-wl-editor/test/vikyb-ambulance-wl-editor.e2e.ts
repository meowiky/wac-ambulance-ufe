import { newE2EPage } from '@stencil/core/testing';

describe('vikyb-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vikyb-ambulance-wl-editor></vikyb-ambulance-wl-editor>');

    const element = await page.find('vikyb-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
