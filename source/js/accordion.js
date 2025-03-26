const topicButtons = document.querySelectorAll('.faq__topic-button');
const questionLists = document.querySelectorAll('.faq__questions-list');

const setOnTopicButtonClick = () => {

  topicButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      topicButtons.forEach((topic, topicIndex) => {
        topic.classList.remove('faq__topic-button--active');
        questionLists[topicIndex].style.display = 'none';
      });

      button.classList.add('faq__topic-button--active');
      questionLists[index].style.display = 'block';
    });
  });

  questionLists.forEach((list, index) => {
    list.style.display = index === 0 ? 'block' : 'none';
  });
};

setOnTopicButtonClick();
