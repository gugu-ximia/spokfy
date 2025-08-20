import { Injectable } from "@angular/core";
import { SpotifyConfiguration } from "../../enviroment/enviroment";

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {
    obterUrlLogin(): Promise<string> {
        const authPoint = `${SpotifyConfiguration.authEndpoint}?`;
    }
    constructor(){}
}