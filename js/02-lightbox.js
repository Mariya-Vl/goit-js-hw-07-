import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log("galleryItems:", galleryItems);

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
        alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

// додаю розмітку до html сторінки:
gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

new SimpleLightbox(".gallery a", { captionsData: `alt`, captionDelay: 250 });
