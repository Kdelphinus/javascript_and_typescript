// 객체 선언 방법 1
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};

// 객체 선언 방법 2
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

// 객체 선언 방법 3
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

// 객체 지향
var grades = {
  'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
  'show': function() {
    for (var name in this.list) {
      console.log(name, this.list[name]);
    }
  },
};

grades.list['myko'] = 42;
grades.show();