import { Component, OnInit } from '@angular/core';

import { people } from '../peoples';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent {
    peoples = people;

    share() {
        window.alert('The product has been shared!');
    }
}
