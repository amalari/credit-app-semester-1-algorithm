import {Component} from 'angular2/core';
import {CourselComponent} from './coursel.component'

@Component({
    selector: 'app',
    templateUrl: '../../public/html/layout/layout.html',
    directives : [CourselComponent]
})
export class AppComponent {
    banners:string[] = ['']
 }