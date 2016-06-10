# ng-weekday-selector

A responsive AngularJS directive for selecting multiple weekdays following iOS native look.

# Demo:

[See Demo Here](http://plnkr.co/edit/M9wFoj3WC4gyjHo2WJqe?p=preview)

Demo can be seen in app:

[Fitness Meal Planner](http://www.fitnessmealplanner.com)

## Requirements

- Angular 1.*

## Usage

- Add CSS and JS to project:

```html
<link rel="stylesheet" href="wherever-you-put-it/ngWeekdaySelector.css">

<script type="text/javascript" src="wherever-you-put-it/ngWeekdaySelector.js"></script>
```

Add dependencies on the `ng-weekday-selector` AngularJS module:

```javascript
angular.module('myApp', ['ng-weekday-selector']);
```

You can now use the directive, add the attribute to your existing DOM element in HTML:

```html
<div ng-model="value" ng-weekday-selector>
```

## Directive Attributes

- `ng-model (optional)` - Define the model to bind the selected values to.
- `ng-change (optional)` - method called after changes done to currently selected week days
- `week-starts-index (optional)` - Define what day starts the week. default is sunday which is index `0`
- `ng-disabled` (optional) - disable/enable control
- `control` (optional) - control element to control directive from outside (see notes below for details)


## Notes

- Control methods which can be called:
 * `toggleDayByIndex` - toggle from code a specific day

## Testing

TBD. Currently only manually

## License

As AngularJS itself, this module is released under the permissive [MIT license](http://revolunet.mit-license.org). Your contributions are always welcome.

