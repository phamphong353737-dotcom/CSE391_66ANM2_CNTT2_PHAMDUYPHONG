const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnText = document.querySelector("#text-big");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});

const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
btnText.addEventListener("click", ()=>{
    document.body.style.fontSize = "40px";
})
nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
// $("#btnHello").on("click", function () {
//   alert("Hello from jQuery!");
// });