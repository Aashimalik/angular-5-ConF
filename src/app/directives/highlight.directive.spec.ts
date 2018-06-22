import { HighlightDirective } from './highlight.directive';
import {  ElementRef, Renderer2  } from '@angular/core';
let el: ElementRef;
let renderer: Renderer2;

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
