let uniqueFlavors=new WeakSet();
let favor1={ flavor: 'chocolate' };
let favor2={ flavor: 'chocolates' }
uniqueFlavors.add(favor1);
uniqueFlavors.add(favor2);
uniqueFlavors.add(favor1);
console.log(uniqueFlavors);