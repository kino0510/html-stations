// async function getData() {
//   // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
//   // ３秒後にフルネームのリストを表示されるようにしましょう。
//   // 最初から表示されていると、クリアになりません。
//   const userList = [
//     { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
//     { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
//   ];
//   const result = await test()
//   return await result
// }

// function test() {
//   return
// }

async function getData() {
  // ユーザーリストを宣言
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  // Promiseで非同期処理を実装
  const result = await test(userList);
  return result; // フルネームを含むリストを返す
}

function test(userList) {
  return new Promise((resolve) => {
    // 3秒後にフルネーム付きのリストを返す
    setTimeout(() => {
      const fullNameList = userList.map(user => ({
        ...user,
        full_name: `${user.family_name} ${user.first_name}`
      }));
      resolve(fullNameList);
    }, 3000); // 3秒遅延
  });
}

// 結果をHTMLに表示
document.addEventListener("DOMContentLoaded", async function () {
  const result = await getData(); // 非同期関数を呼び出して結果を取得
  const ul = document.getElementById('result');

  // // フルネームをリスト表示
  // result.forEach(item => {
  //   const li = document.createElement('li');
  //   li.textContent = item.full_name;
  //   ul.appendChild(li);
  // });
});

