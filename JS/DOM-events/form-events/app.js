// Form Events & PreventDefault

// *** Practice  With Form Events & preventDefault ***

const form = document.querySelector("#form");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // In default case, from refreshes the page when it's submited. By using preventDefault, we can ignore that.

  // console.log(newLi);

  const catName = input.value; // catName degiskenine inputa girilen degeri atandi.
  const newLi = document.createElement("li"); // yeni li element oluşturmasi icin newLi degiskenini olusturuldu.
  newLi.innerText = catName; // yeni olusturulan li icerigi girilen input ile esitlendi.
  list.append(newLi); // sectigimiz #cats id'li ul elementinin icine newLi isimli li elemtini appendledik.
  input.value = ""; // Append ettikten sonra input degerini sifirlandi.
});
