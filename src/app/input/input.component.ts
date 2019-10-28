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

    title = 'image-gallery'
    private data: any = []
    constructor(private http: HttpClient) {}
    getData() {
        const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
        this.http.get(url).subscribe(res => {
            this.data = res
            console.log(this.data)
        })
    }
}
