import { TestBed } from '@angular/core/testing';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [App] });
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('letora');
  });
});
