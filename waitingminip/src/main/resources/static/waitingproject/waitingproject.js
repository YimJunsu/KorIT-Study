function waiting() {
  let nameInput = document.querySelector(".nameInput");
  let peopleInput = document.querySelector(".peopleInput");
  let phnumInput = document.querySelector(".phnumInput");

  let name = nameInput.value;
  let people = peopleInput.value;
  let phnum = phnumInput.value;

  let info = { name: name, people: people, phnum: phnum };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  };

  fetch("/register.do", options)
    .then((response) => response.json())
    .then((data) => {
      if (data == true) {
        console.log("등록성공");
      } else {
        console.log("등록실패");
      }
      console.log(data);
      waitingnum();
    })
    .catch((error) => console.log("error:", error));

  nameInput.value = "";
  peopleInput.value = "";
  phnumInput.value = "";
}

function view() {
  const waitingtable = document.querySelector(".waitingtable");

  let html = `<tr>
            <th>번호</th>
            <th>이름</th>
            <th>인원수</th>
            <th>전화번호</th>
            <th>현황</th>
        </tr>`;

  fetch("/viewall.do")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.map((value, i) => {
        html += `<tr>
        <td>${i + 1}</td>
        <td>${value.name}</td>
        <td>${value.people}</td>
        <td>${value.phnum}</td>
        <td>${value.status ? "입장 완료" : "대기중"}</td>
        <td><button onclick="pass(${value.wno})" />수정</td>
        <td><button onclick="remove(${value.wno})" />삭제</td>
    </tr>`;
        waitingtable.innerHTML = html;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function waitingnum() {
  const waitingnum = document.querySelector(".waitingnumarea");
  fetch("/waitingnum.do")
    .then((response) => response.json())
    .then((data) => {
      waitingnum.innerHTML = data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function pass(index) {
  const option = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };

  fetch(`/pass.do?wno=${index}`, option)
    .then((response) => response.json())
    .then(() => view());
}

function remove(index) {
  fetch(`/delete.do?wno=${index}`, { method: "DELETE" })
    .then((response) => response.json())
    .then(() => view());
}
