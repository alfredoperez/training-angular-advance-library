import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as includes from 'lodash.includes';
import * as findLastIndex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findindex';
import {
  BACKSPACE, DELETE, LEFT_ARROW, overwriteCharAtPostion, RIGHT_ARROW, SPECIAL_CHARACTERS,
  TAB
} from './mask.utils';
import { current } from 'codelyzer/util/syntaxKind';
import { maskDigitValidators, neverValidator } from './digit_validators';
@Directive({
  selector: '[ngxMask]'
})
export class NgxMaskDirective implements OnInit {
  @Input('ngxMask')
  ngxMask = '';

  input: HTMLInputElement;
  fullFieldSelected = false;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit() {
    this.input.value = this.buildPlaceholder();
  }

  @HostListener('select', ['$event'])
  onSelect($event: UIEvent) {

    this.fullFieldSelected = this.input.selectionStart === 0 &&
      this.input.selectionEnd === this.input.value.length;

  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keycode) {

    if ( $event.metaKey || $event.ctrlKey ) {
      return;
    }
    if ( keycode !== TAB ) {
      $event.preventDefault();
    }
    const key = String.fromCharCode(keycode);
    const cursorPos = this.input.selectionStart;

    if ( this.fullFieldSelected ) {

      this.input.value = this.buildPlaceholder();

      const firstPlaceholderPos = findIndex(this.input.value,
        char => char === '_');

      this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);

    }
    switch ( keycode ) {

      case LEFT_ARROW:
        this.handleLeftArrow(cursorPos);
        return;
      case RIGHT_ARROW:
        this.handleRightArrow(cursorPos);
        return;
      case BACKSPACE:

        this.handleBackspace(cursorPos);

        return;

      case DELETE:

        this.handleDelete(cursorPos);

        return;
    }

    const maskDigit = this.ngxMask.charAt(cursorPos);
    const digitValidator = maskDigitValidators[maskDigit] || neverValidator;
    if ( digitValidator(key) ) {
      overwriteCharAtPostion(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }

  }

  buildPlaceholder(): string {


    const chars = this.ngxMask.split('');

    return chars.reduce((result, char) => {

      return result +=
        includes(SPECIAL_CHARACTERS, char) ? char : '_';

    }, '');


  }

  private  calculatePreviousCursorPos(cursorPos) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);

    return findLastIndex(valueBeforeCursor,
      char => !includes(SPECIAL_CHARACTERS, char));

  }

  handleBackspace(cursorPos) {

    const previousPos = this.calculatePreviousCursorPos(cursorPos);

    if ( previousPos >= 0 ) {
      overwriteCharAtPostion(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleDelete(cursorPos) {
    overwriteCharAtPostion(this.input, cursorPos, '_');
    this.input.setSelectionRange(cursorPos, cursorPos);
  }


  handleRightArrow(cursorPos) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);

    const nextPos =
      findIndex(valueAfterCursor, char => !includes(SPECIAL_CHARACTERS, char));

    if ( nextPos >= 0 ) {

      const newCursorPos = cursorPos + nextPos + 1;

      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  handleLeftArrow(cursorPos) {

    const previousPos = this.calculatePreviousCursorPos(cursorPos);

    if ( previousPos >= 0 ) {
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

}
