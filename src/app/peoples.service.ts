import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class PeoplesService {
    constructor(private httpService: HttpClient) {}

    getPeoples() {
        return this.httpService.get('../data/indonesia-regions.json')
    }
}
