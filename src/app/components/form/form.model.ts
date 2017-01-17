import { Section } from './section/section';
import { Injectable } from '@angular/core';

@Injectable()
export class FormModel {

    public sections: Array<Section> = [];

    public reset() {
        this.sections = [];
    }

    public hasSection(id: string): boolean {
        let out: boolean = false;
        if (this.sections) {
            this.sections.forEach((section) => {
                if (section.id === id) {
                    out = true;
                }
            })
        }
        return out;
    }

    public getSection(id: string): Section {
        if (this.sections) {
            this.sections.forEach((section) => {
                if (section.id === id) {
                    return section;
                }
            })
        }
        return null;
    }

    public addSection(section: Section): void {
        this.sections.push(section);
    }
}