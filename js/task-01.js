console.dir(
  "Number of categories: " +
    document.querySelector("#categories").children.length
);
document
  .querySelectorAll(".item")
  .forEach((item) =>
    console.log(
      item.firstElementChild.textContent +
        " " +
        item.lastElementChild.children.length
    )
  );
