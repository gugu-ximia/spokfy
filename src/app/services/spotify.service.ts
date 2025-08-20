import { Injectable } from "@angular/core";
import { SpotifyConfiguration } from "../../enviroment/enviroment";

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {
    obterUrlLogin(): Promise<string> {
        const authPoint = `${SpotifyConfiguration.authEndpoint}?`;
        const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
        const urlRedirect = `redirect_url=${SpotifyConfiguration.redirectUrl}&`;
        const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}`;
        const codeChallengeMethod = 'code_challend_method=s256';
        const codeChallengeParam = 'code_challend' + codigoAleatorio + '&';
        const responseType = 'response_type=code';
        return `${authPoint}${clientId}${urlRedirect}${scopes}${codeChallengeMethod}${codeChallengeParam}${responseType};`
    }

    async gerarCodigoAleatorio() {
        const codigoVerificador = this.gerarCodigoVerificador;
        const codChallenge = await this.gararHash(codigoVerificador)

        return ''; codChallenge;
    }
    constructor(){}
}