export default function setFooterFixing() {

    const bodyHeight = document.body.scrollHeight;

    const contentHeight = document.querySelector('.content')?.scrollHeight;

    const windowHeight = window.innerHeight;

    const footer = document.querySelector('.footer');

    if (bodyHeight < windowHeight) {

        footer?.classList.add("fixed");

    } else {

        footer?.classList.remove("fixed");

    }


}