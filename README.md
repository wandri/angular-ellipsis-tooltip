# Angular Ellipsis Material Tooltip

For responsive applications, the use of **ellispis** for long content can be necessary. When we want to go further and
display
the **[Angular material tooltip](https://material.angular.io/components/tooltip/overview "Angular material tooltip")**
when the ellipsis are displayed.

**Demo**: https://wandri.github.io/angular-ellipsis-tooltip/.

![demo tooltip](https://github.com/wandri/angular-ellipsis-tooltip/blob/master/assets/demo_ellipsis.gif)

Add the module

```
@NgModule({
  declarations: [
    ...,
  ],
  imports: [
    ...,
    NgxEllipsisTooltipModule,
  ],
})
```

## `<ngx-ellipsis-tooltip></ngx-ellipsis-tooltip>`

| @ Input  | Description                                          | Type    | Requested              |
|:---------|:-----------------------------------------------------|:--------|:-----------------------|
| text     | text to display                                      | string  | True                   |
| smartCut | move the ellipsis inside the text and not at the end | boolean | False (default = true) |
