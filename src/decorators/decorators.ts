function logged(constructorFn: Function): void {
  console.log('[Constructor]', constructorFn);
}

@logged
class Person {
  constructor(public name: string) {
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

// @logging(true)
class Car {

}

// Advanced

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log(this);
  }
}

@logged
@printable
class Plant {
  name = "Green plant";
}

const plant = new Plant();
(<any>plant).print();

// Method decorator
// Property decorator

function editable(value: boolean) {
  return function (_target: any, _propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function (_target: any, _propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };

    return newDescriptor;
  }
}

class Project {
  @overwritable(true)
  projectName: string;

  constructor(public name: string) {
    this.projectName = name;
  }

  @editable(true)
  calcBudget() {
    console.log('[Budget]', 1000);
  }
}

const project = new Project('Super project');
project.calcBudget();
project.calcBudget = function () {
  console.log('[Budget]', 2000);
};
project.calcBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('[Target: ]', target);
  console.log('[Method name: ]', methodName);
  console.log('[Parameter index: ]', paramIndex);
}

class Course {
  constructor(public name: string) {
    this.name = name;
  }

  printStudentsNumber(@printInfo _mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log('[All]', 10000);
    } else {
      console.log('[Not all]', 2000);
    }
  }
}

const course = new Course('Super course');
course.printStudentsNumber('All students', true);
course.printStudentsNumber('Not all students', false);
