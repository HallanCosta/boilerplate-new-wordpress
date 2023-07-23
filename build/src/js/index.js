import "../sass/style.scss";

import { Home } from "./pages/home";

window.onload = function() {
    switch ($$page) {
        case "home":
            Home();
            break;
      }
}