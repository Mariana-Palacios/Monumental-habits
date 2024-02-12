import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>onboarding works!</p>`,
  styleUrl: './onboarding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OnboardingComponent { }
