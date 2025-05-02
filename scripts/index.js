// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template');
const cardContent = cardTemplate.content;
const cardsContainer = document.querySelector('.places__list');

// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(cardArg, deleteCard) {
  const cardElement = cardContent.querySelector('.places__item').cloneNode(true);
  const image = cardElement.querySelector('.card__image');
  const title = cardElement.querySelector('.card__title');

  image.src = cardArg.link;
  image.alt = cardArg.name;
  title.textContent = cardArg.name;

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
initialCards.forEach(function(cardArg) {
  const newCard = createCard(cardArg, deleteCard);
  cardsContainer.append(newCard);
})
