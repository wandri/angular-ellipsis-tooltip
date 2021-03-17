# NgxEllipsisTooltip

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Code scaffolding

Run `ng generate component component-name --project ngx-ellipsis-tooltip` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-ellipsis-tooltip`.
> Note: Don't forget to add `--project ngx-ellipsis-tooltip` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-ellipsis-tooltip` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-ellipsis-tooltip`, go to the dist folder `cd dist/ngx-ellipsis-tooltip`
and run `npm publish`.

## Running unit tests

Run `ng test ngx-ellipsis-tooltip` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular Ellipsis Material Tooltip

For responsive applications, the use of **ellispis** for long content can be necessary. When we want to go further and
display
the **[Angular material tooltip](https://material.angular.io/components/tooltip/overview "Angular material tooltip")**
when the ellipsis are displayed.

Add the module

```
@NgModule({
  declarations: [
    ...,
  ],
  imports: [
    ...,
    EllipsisTooltipModule,
  ],
})
```

## `<app-ellipsis-tooltip></app-ellipsis-tooltip>`

| @ Input  | Description  | Type  | Requested  |
| :------------ | :------------ | :------------ | :------------ |
| content  | text to display  | string  | True  |
