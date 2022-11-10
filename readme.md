es6
[...], {...}

let nums = [1, 2, 3]; //[1,2,3,4,5]
nums = [...nums, 4, 5];

console.log(nums); //[1,2,3,4,5]
///

let p = {
name: "A",
};

p = { ...p, age: 10, address: "Hn", name: "Update" };

console.log(p);

//localstorage

// cahcs lưu
// cách láy thông tin ra
// xoa

- luu localStorage.setItem('keys',value)
- lay ra localStorage.getItem('keys')
- xoa localStorage.removeItem('keys)

* lưu ý : khi lấy ra : JSON.parse(localStorage.getItem('keys'))
  khi lưu vào : localStorage.setItem('keys',JSON.stringtify('value'))
