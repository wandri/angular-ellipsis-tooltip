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
