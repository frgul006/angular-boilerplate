import { RouterTestingModule } from '@angular/router/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'angular-boilerplate'`, () => {
    const app = spectator.component;
    expect(app.title).toEqual('angular-boilerplate');
  });

  it('should render title', () => {
    expect(spectator.query('.content span')?.textContent).toContain('angular-boilerplate app is running!');
  });
});
