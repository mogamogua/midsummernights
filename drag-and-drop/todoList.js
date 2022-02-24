const onClickAddCard = (listId) => {

}

const onClickAddList = () => {
  const newSection = document.createElement("section");
  newSection.classList.add("section");

  const todoListBox = document.createElement("ul");
  todoListBox.classList.add("list");
  todoListBox.setAttribute("name", "todo");

  const addCardBtn = document.createElement("button");
  addCardBtn.classList.add("add_card_btn");
  addCardBtn.setAttribute("onclick", "onClickAddCard()");
  addCardBtn.innerText = "Add Card";

  todoListBox.appendChild(addCardBtn);
  newSection.appendChild(todoListBox);

  const main = document.querySelector("main");
  main.appendChild(newSection);

// 1. 버튼넣기
//2. ul만들기 : button추가해서
//3. ul넣기
//4. section을 main lastchild로 넣기
{/* <section class="section">
<ul class="list" name="오늘의 할 일">
  <button class="add_card_btn" onclick="onClickAddCard()">Add Card</button>
  <li class="card">밥 먹기</li>
</ul>
</section>
<button class="add_list_btn" onclick="onClickAddList()"></button> */}
}