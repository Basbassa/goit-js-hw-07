import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

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

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});

console.log(galleryItems);
