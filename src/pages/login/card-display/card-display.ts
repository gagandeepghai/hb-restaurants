import { Component, Input } from '@angular/core';
import { LoginInfoCard } from '../../../models/login-info';

@Component ({
    selector: 'card-display',
    templateUrl: 'card-display.html'
})

export class InfoCard {
    @Input() card: LoginInfoCard;
}
