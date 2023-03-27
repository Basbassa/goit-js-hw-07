import * as basicLightbox from "./basicLightbox.min.js";
import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
let activeIndex = 0;

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }

  const sourceUrl = event.target.dataset.source;

  activeIndex = galleryItems.findIndex((item) => item.original === sourceUrl);

  const instance = basicLightbox.create(`
    <img src="${sourceUrl}" width="800" height="600">
  `);

  instance.show(activeIndex);
}

console.log(galleryItems);
