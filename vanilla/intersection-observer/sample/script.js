function main() {
  var body = document.getElementById("body");
  var boxes = body.querySelectorAll("div.box");
  console.log("Body", body);
  const observer = new IntersectionObserver(
    (entries) => {
       console.log("All Entries:", entries);
      console.log(
        "Appear Entries:",
        entries.filter((entry) => entry.isIntersecting).map((e) => e.target.innerHTML)
      );
      console.log(
        "Not Appear Entries:",
        entries.filter((entry) => !entry.isIntersecting).map((e) => e.target.innerHTML)
      );
    },
    { threshold: 0 }
  );

  boxes.forEach((box) => observer.observe(box));
}

main();
