import './pages/index.css';
import { createCard, deleteCard, handleLike } from './components/card.js';
import { openPopup, closePopup } from './components/modal.js';
import { initialCards } from './components/cards.js'; // 🔧 добавь эту строку


// @todo: Темплейт карточки

const cardsContainer = document.querySelector('.places__list');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button')
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card')
const closeButtons = document.querySelectorAll('.popup__close');

const cardImage = document.querySelectorAll('.card__image')
const allPopups = document.querySelectorAll('.popup');

const titleProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__description');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

const addCardForm = document.forms['new-place'];
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = addCardForm.querySelector('.popup__input_type_url');

const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

// @todo: Вывести карточки на страницу
initialCards.forEach(function(cardArg) {
  const newCard = createCard(cardArg, deleteCard, handleLike, handleImageClick);
  cardsContainer.append(newCard);
});


// Открытие попапа при клике на иконку редактирования
editButton.addEventListener('click', () => {
    nameInput.value = titleProfile.textContent;
  jobInput.value = descriptionProfile.textContent;
  openPopup(popupEdit);
});

// Открытие попапа при клике на иконку добавления
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

// Закрытие всех попапов
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

allPopups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

      const newName = nameInput.value;
      const newJob = jobInput.value;

  titleProfile.textContent = newName;
  descriptionProfile.textContent = newJob;
  closePopup(popupEdit);
}

function handleImageClick(name, link) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImage);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;

  const newCard = createCard({ name, link }, deleteCard, handleLike);
  cardsContainer.prepend(newCard);

  closePopup(popupAdd);
  addCardForm.reset();
}

addCardForm.addEventListener('submit', handleAddCardSubmit);

