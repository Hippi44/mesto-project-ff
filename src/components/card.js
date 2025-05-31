import { openPopup } from './modal.js';
import { initialCards } from './cards.js';

const cardTemplate = document.querySelector('#card-template');
const cardContent = cardTemplate.content;

const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

// @todo: Функция создания карточки

export function createCard(cardArg, deleteCard, handleLike) {
  const cardElement = cardContent.querySelector('.places__item').cloneNode(true);
  const image = cardElement.querySelector('.card__image');
  const title = cardElement.querySelector('.card__title');
  const deleteBtn = cardElement.querySelector('.card__delete-button');
  const likeBtn = cardElement.querySelector('.card__like-button');

  image.src = cardArg.link;
  image.alt = cardArg.name;
  title.textContent = cardArg.name;

  deleteBtn.addEventListener('click', function () {
    deleteCard(cardElement);
  });

  likeBtn.addEventListener('click', function () {
   handleLike(likeBtn);
  });

  function openImagePopup(name, link) {
    popupImageElement.src = link;
    popupImageElement.alt = name;
    popupCaption.textContent = name;
    openPopup(popupImage);
  }

  image.addEventListener('click', function () {
    openImagePopup(cardArg.name, cardArg.link);
  });

  return cardElement;
}

// @todo: Функция удаления карточки

export function deleteCard(card) {
  card.remove();
};

// @todo: Функция лайка карточки

export function handleLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
}
