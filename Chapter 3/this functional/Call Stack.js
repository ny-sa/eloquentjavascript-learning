//Call Stack
const penthouse = () => {                                              //floors are levels on a call stack
    console.log('Floor 4');
};
const floor3 = () => {
    console.log('Floor 3');
    penthouse();
    console.log('Floor 3');
};
const floor2 = () => {
    console.log('Floor 2');
    floor3();
    console.log('Floor 2');
};
let elevator = () => {
    console.log('Floor 1');
    floor2();
    console.log('Floor 1');
};
elevator();