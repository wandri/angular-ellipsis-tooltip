# NgxEllipsisTooltip

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Build

Run `ng build ngx-ellipsis-tooltip` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-ellipsis-tooltip`, go to the dist folder `cd dist/ngx-ellipsis-tooltip`
and run `npm publish`.

## Running unit tests

Run `ng test ngx-ellipsis-tooltip` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Angular Ellipsis Material Tooltip

For responsive applications, the use of **ellispis** for long content can be necessary. When we want to go further and
display
the **[Angular material tooltip](https://material.angular.io/components/tooltip/overview "Angular material tooltip")**
when the ellipsis are displayed.

![demo tooltip](https://github.com/wandri/angular-ellipsis-tooltip/assets/demo_ellipsis.gif)

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
