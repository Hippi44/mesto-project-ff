import { initialCards } from './cards.js';

const cardTemplate = document.querySelector('#card-template');
const cardContent = cardTemplate.content;

// @todo: Функция создания карточки

// card.js

export function createCard(cardArg, deleteCard, handleLike, handleImageClick) {
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

  image.addEventListener('click', function () {
    handleImageClick(cardArg.name, cardArg.link);
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
