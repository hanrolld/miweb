import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { setupTestingRouter } from "@angular/router/testing";

@Injectable({
    providedIn: 'root'
})
export class InactivyServiceService{
    private timer: any;
    private readonly inactivityDuration = 600000;

    constructor(private router: Router){
        this.setupInactivityTimer();
    }
    resetTimer(){
        clearTimeout(this.timer);
        this.setupInactivityTimer
    }
    private setupInactivityTimer(){
        this.timer = setTimeout(() =>{
            this.router.navigate (['/login']);
        }, this.inactivityDuration);
    }
}
