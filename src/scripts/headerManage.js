export default function setHeaderFixing() {

    const header = document.querySelector("header");

    const headerHeight = header.scrollHeight;

    const userScrollDistance = window.scrollY;

    const currentHeaderState = (header.getAttribute("fixed") === "true");

    if ((userScrollDistance + 5) > headerHeight && !currentHeaderState) {

        // do a nice animation
        header.setAttribute("fixed", "true");

    } else {

        header.setAttribute("fixed", "false");

    }

}