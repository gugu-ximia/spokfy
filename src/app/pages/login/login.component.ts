import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: 'app-login',
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
    serviceSpotify = inject(SpotifyService)
    async fazerLogin() {
    const url = await this.serviceSpotify.obterUrlLogin();
}
    anoAtual = new Date().getFullYear();
}

