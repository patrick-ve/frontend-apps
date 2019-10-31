import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { people } from '../peoples'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent {
    peoples = people
    selectedOption: string

    title = 'image-gallery'
    private data: any = []

    constructor(private http: HttpClient) {}
    generateData() {
        const queryURL = this.selectedOption
        this.http.get(queryURL).subscribe(res => {
            // this.data = res
            console.log(res)
        })
    }
}
