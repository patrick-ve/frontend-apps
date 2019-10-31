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
    public data: any = []
    public collectedData: any = []
    public randomPortretData: any = []
    public randomKledingData: any = []

    constructor(private http: HttpClient) {}
    generateData() {
        const queryURL = this.selectedOption
        console.log(queryURL)
        this.http.get(queryURL).subscribe(res => {
            this.data = res
            this.collectedData.push(this.data) // Om een of andere reden moet this.data in een nieuwe array gestopt worden (collectedData)

            this.collectedData[0].results.bindings.forEach(item => {
                if (item.title.value.includes('vrouw') == true || item.title.value.includes(' man') == true) {
                    this.randomPortretData.push(item)
                }
            })

            this.collectedData[0].results.bindings.forEach(item => {
                if (item.title.value.includes('kleding')) {
                    this.randomKledingData.push(item)
                }
            })

            var randomPortret = this.randomPortretData[Math.floor(Math.random() * this.randomPortretData.length)]
            console.log('Random verzameling portretten:', randomPortret)
            var randomKleding = this.randomKledingData[Math.floor(Math.random() * this.randomKledingData.length)]
            console.log('Random kleding:', randomKleding)
        })
    }
}
