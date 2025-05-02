// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');
const cardContent = cardTemplate.content;
const placesList = document.querySelector('.places__list');

// @todo: DOM узлы


// @todo: Функция создания карточки
function cardAdd(cardArg, deleteCard) {
  const cardElement = cardContent.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = cardArg.link;
  cardElement.querySelector('.card__image').alt = cardArg.name;
  cardElement.querySelector('.card__title').textContent = cardArg.name;

  const deleteBtn = cardElement.querySelector('.card__delete-button');
  deleteBtn.addEventListener('click', function () {
    deleteCard(cardElement);
  });

  return cardElement;
}


// @todo: Функция удаления карточки
function deleteCard(card) {
  card.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function (cardArg) {
  const newCard = cardAdd(cardArg, deleteCard);
  placesList.append(newCard);
})
