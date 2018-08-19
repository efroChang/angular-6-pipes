import { PipeTransform, Pipe } from "../../node_modules/@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any) {
        if (value.length > 10) {
            return value.substr(0, 10) + ' ...';
        }
        return value;
    }
}