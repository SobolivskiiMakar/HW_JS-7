// 1

const first = [1, 2, 3]
console.log(first)
first[1] = 5
console.log(first)


// 2

const second = ["a", "b", "v"]
console.log(second)
second[3] = "g"
console.log(second)


// 3

const fourth = [30, 67, 3]
let sum = 0
for (let i = 0; i < fourth.length; i++) {
    console.log(sum += fourth[i])
}


// 4

const third = ["hello", "nice", "ok", "great", "bad"]
for (let i = 0; i < third.length; i++) {
    console.log(third[i])
}


// 5

const fifth = ["asdfg", "qwe", "qwfghtr", "ppoi", "cvbnmkk"]
for (let i = 0; i < fifth.length; i++) {
    if (fifth[i].length > 4) {
        console.log(fifth[i])
    }
}


// 6

const sixth = [1, 2, 33, 4, 5, 6, 7, 8, 22, 10];
let max = sixth[0]; 
for (let i = 0; i < sixth.length; i++) {
    if (sixth[i] > max) {
        max = sixth[i];
    }
}
console.log(max);


// 7

const seventh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < seventh.length; i++) {
    if (seventh[i] % 2 === 0) {
        console.log(seventh[i])
    }
}
