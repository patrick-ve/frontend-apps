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
    public collectedData: any = []
    public randomPortretData: any = []
    public randomKledingData: any = []
    public randomTempelData: any = []
    public pageData: any = []

    constructor(private http: HttpClient) {}
    generateData() {
        const queryURL = this.selectedOption
        console.log(queryURL)
        this.http.get(queryURL).subscribe(res => {
            this.collectedData.push(res) // Om een of andere reden moet this.data in een nieuwe array gestopt worden (collectedData)

            // Random portret van een man of vrouw zoeken
            this.collectedData[0].results.bindings.forEach(item => {
                if (item.title.value.includes('vrouw') || item.title.value.includes(' man') || item.title.value.includes('kinderen')) {
                    this.randomPortretData.push(item)
                }
            })

            // Random kleding zoeken
            this.collectedData[0].results.bindings.forEach(item => {
                if (
                    item.title.value.includes('wajang') ||
                    item.title.value.includes('wayang') ||
                    item.title.value.includes('gamelan') ||
                    item.title.value.includes('garoeda') ||
                    item.title.value.includes('kris') ||
                    item.title.value.includes('sarong')
                ) {
                    this.randomKledingData.push(item)
                }
            })

            // Random tempel zoeken
            this.collectedData[0].results.bindings.forEach(item => {
                if (item.title.value.includes(' tempel') || item.title.value.includes(' moskee') || item.title.value.includes(' kerk')) {
                    this.randomTempelData.push(item)
                }
            })

            var randomPortret = this.randomPortretData[Math.floor(Math.random() * this.randomPortretData.length)]
            console.log('Random verzameling portretten:', randomPortret)
            var randomKleding = this.randomKledingData[Math.floor(Math.random() * this.randomKledingData.length)]
            console.log('Random kleding:', randomKleding)
            var randomTempel = this.randomTempelData[Math.floor(Math.random() * this.randomTempelData.length)]
            console.log('Random tempel:', randomTempel)
            this.pageData.push(randomPortret)
            this.pageData.push(randomKleding)
            this.pageData.push(randomTempel)
            console.log(this.pageData)
        })
    }
}
