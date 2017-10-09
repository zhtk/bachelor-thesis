import { Injectable } from '@angular/core';
import { Message } from '../message';
import { LAYOUT } from './mock-form';

@Injectable()
export class PiecsetPlusProvider {
	getComponentLayout() {
		return LAYOUT;
	}
}