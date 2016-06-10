angular.module('ng-weekday-selector', [])
  .directive("ngWeekdaySelector", function() {
    "use strict";

    var const_days = [{
      id: 0,
      name: "SUN",
      isSelected: false
    }, {
      id: 1,
      name: "MON",
      isSelected: false
    }, {
      id: 2,
      name: "TUE",
      isSelected: false
    }, {
      id: 3,
      name: "WED",
      isSelected: false
    }, {
      id: 4,
      name: "THU",
      isSelected: false
    }, {
      id: 5,
      name: "FRI",
      isSelected: false
    }, {
      id: 6,
      name: "SAT",
      isSelected: false
    }];

    var template = "<div class='days-container'>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-0' ng-class='{\"is-selected\": ngModel[(0 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((0 + weekStartsIndex)%7)'>{{ngModel[(0 + weekStartsIndex)%7].name}}</div>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-1' ng-class='{\"is-selected\": ngModel[(1 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((1 + weekStartsIndex)%7)'>{{ngModel[(1 + weekStartsIndex)%7].name}}</div>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-2' ng-class='{\"is-selected\": ngModel[(2 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((2 + weekStartsIndex)%7)'>{{ngModel[(2 + weekStartsIndex)%7].name}}</div>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-3' ng-class='{\"is-selected\": ngModel[(3 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((3 + weekStartsIndex)%7)'>{{ngModel[(3 + weekStartsIndex)%7].name}}</div>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-4' ng-class='{\"is-selected\": ngModel[(4 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((4 + weekStartsIndex)%7)'>{{ngModel[(4 + weekStartsIndex)%7].name}}</div>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-5' ng-class='{\"is-selected\": ngModel[(5 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((5 + weekStartsIndex)%7)'>{{ngModel[(5 + weekStartsIndex)%7].name}}</div>" +
      "<div ng-disabled='{{ngDisabled}}' class='day-circle day-6' ng-class='{\"is-selected\": ngModel[(6 + weekStartsIndex)%7].isSelected}' ng-click='ngDisabled || onDayClicked((6 + weekStartsIndex)%7)'>{{ngModel[(6 + weekStartsIndex)%7].name}}</div>" +
      "</div>";

    var link = function(scope) {
      var init = function(){
        if (!scope.weekStartsIndex){
          scope.weekStartsIndex = 0;
        }
        initDaysSelected();
        initControl();
      };

      var initDaysSelected = function(){
        if (!scope.ngModel){
          scope.ngModel = [];
          angular.extend(scope.ngModel, const_days);
        }
      };

      var initControl = function(){
        if (scope.control){
          scope.control.toggleDayByIndex = function(dayIndex){
            if (scope.ngModel){
              scope.ngModel[dayIndex].isSelected = !scope.ngModel[dayIndex].isSelected;
            }else{
              console.log("Error, no model to toggle for!");
            }
          };
        }
      };

      scope.onDayClicked = function(dayIndex){
        scope.ngModel[dayIndex].isSelected = !scope.ngModel[dayIndex].isSelected;
        if (typeof scope.ngChange === "function"){
          scope.ngChange({newValue: {index: dayIndex, item: scope.ngModel[dayIndex]}});
        }
      };

      init();
    };

    return {
      restrict: 'AE',
      scope: {
        ngModel: '=?',
        ngChange: '&',
        weekStartsIndex: '=?',
        ngDisabled: '=?',
        control: '=?'
      },
      link: link,
      template: template
    };
  });
