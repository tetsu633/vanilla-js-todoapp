const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createTodo(inputText);
};

// 追加ボタン
document.getElementById("add-button").addEventListener("click", onClickAdd);

// Todoの生成
const createTodo = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // ulタグにpタグを追加
  li.appendChild(p);

  // liタグに完了ボタンを追加
  li.appendChild(createCompleteButton());

  // liタグに削除ボタンを追加
  li.appendChild(createDeleteButton());

  // ulタグにliタグを追加
  document.getElementById("imcomplete-list").appendChild(li);
};

// 完了したTodoの生成
const createCompleteTodo = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // ulタグにpタグを追加
  li.appendChild(p);

  // liタグに戻るボタンを追加
  li.appendChild(createReturnButton());

  // ulタグにliタグを追加
  document.getElementById("complete-list").appendChild(li);
};

// button(完了)タグ生成
const createCompleteButton = () => {
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const target = completeButton.parentNode;
    const targetText = target.firstChild.innerText;
    createCompleteTodo(targetText);
    document.getElementById("imcomplete-list").removeChild(target);
  });
  return completeButton;
};

// button(戻る)タグ生成
const createReturnButton = () => {
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    const target = returnButton.parentNode;
    const targetText = target.firstChild.innerText;
    createTodo(targetText);
    document.getElementById("complete-list").removeChild(target);
  });
  return returnButton;
};

// button(削除)タグの生成
const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    const target = deleteButton.parentNode;
    document.getElementById("imcomplete-list").removeChild(target);
  });
  return deleteButton;
};
