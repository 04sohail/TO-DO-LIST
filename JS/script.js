const dayOfWeekName = new Date().toLocaleString("default", { weekday: "long" });

let heading = document.getElementsByClassName("heading")[0];
heading.innerHTML = "<h1>" + " Hey It's" + dayOfWeekName;
