import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// створюємо розмітку галереї
function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}
            width="300"
            />
        </a>
       </li>`;
    })
    .join("");
}
// додаємо розмітку галереї до DOM дерева:

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

// додаємо прослуховувача на галерею та відкриваємо модальне вікно при клікі на картинку
gallery.addEventListener("click", clickOnImg);

let instance = "";

// функція для відкриття "модалки":
function clickOnImg(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", pressEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", pressEsc);
      },
    }
  );
  instance.show();
}

// функція для закриття модалки:
function pressEsc(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
