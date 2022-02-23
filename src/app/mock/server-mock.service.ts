import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {getTeam, getTeams} from "./teams.mock";
import {getPlayers} from "./players.mock";

@Injectable()
export class ServerMockService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url.slice(1, req.url.endsWith('/') ? -1 : undefined);
        if (/^teams\/\d+$/.test(url)) {
            return getTeam(Number(url.replace(/\D*/, '')));
        } else if (/^teams$/.test(url)) {
            return getTeams();
        } else if (/^players$/.test(url)) {
            return getPlayers();
        } else {
            return next.handle(req);
        }
    }
}