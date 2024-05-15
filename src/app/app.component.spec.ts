import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NxDataDisplayModule } from '@aposin/ng-aquila/data-display';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NxDataDisplayHarness } from '@aposin/ng-aquila/data-display/testing';

describe('AppComponent', () => {
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxDataDisplayModule],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('works by value', async () => {
    const harnessWithLabel = await loader.getHarness(NxDataDisplayHarness.with({value: 'content with label'}));
    expect(harnessWithLabel).toBeTruthy();
    const harnessWithoutLabel = await loader.getHarness(NxDataDisplayHarness.with({value: 'content without label'}));
    expect(harnessWithoutLabel).toBeTruthy();
  });

  it('does not work by label even if the label is correct', async () => {
    const harnessWithLabel = loader.getHarness(NxDataDisplayHarness.with({label: 'label'}));
    await expect(harnessWithLabel).rejects.toBeTruthy();
  })
});
