import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class customSetter {

    fName: any = 'Manthn Machhi';

    get firstName(): string {
        // console.log(this.fName)
        return this.fName
    }

    set firstName(e: any) {
        // console.log(this.fName)
        this.fName = e;
    }
}