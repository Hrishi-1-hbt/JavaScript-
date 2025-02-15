// ES6 - An external file that contains reusable code that
//         can be imported into other javascript files.
//         write reusability code for many different apps.
//         can contains variable, classes , functions ,... and more
//         Introduction as part of ECMAScript 2015 update

export const PI = 3.14159;

export function getCircumference(radius){
        return 2* PI *radius;

}
export function getArea(radius){
        return PI * radius *  radius;
}
export function getVolume(radius){
        return 4* PI * radius * radius;
}