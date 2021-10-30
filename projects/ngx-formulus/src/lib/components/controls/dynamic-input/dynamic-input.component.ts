import type { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import type { DynamicControl } from '../../../types/dynamic-control';

@Component({
  selector: 'ngx-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent implements OnInit {
  @Input() dynamicControl: DynamicControl | null = null;

  constructor() {}

  ngOnInit(): void {}
}
