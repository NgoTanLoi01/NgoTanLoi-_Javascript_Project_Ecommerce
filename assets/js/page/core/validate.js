function Validate(options) {
  //1. Lay ra container bao dong form
  const container = document.querySelector(options.container);
  //2. Tat ca cac elements khac query dua vao container
  const btnSignUpSelector = container.querySelector(".btn-signup");
  const rules = options.rules;
  const message = options.message;
  console.log(message);
  

  function initEventAndData() {
    btnSignUpSelector.addEventListener("click", handleSignUpClick);
  }

  function handleSignUpClick(event) {
    event.preventDefault();
  }

  //add event listener + data init
  initEventAndData();
}
