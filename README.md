## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Краткое описание работы

При загрузке приложения происходит фокус на форму поиска.
Обработчик события onChange формы обернут в debounce с задержкой в 1сек.
Результат поиска представлен в виде dropdown menu со сниппетами первых 8-ми найденых книг.
При клике на сниппет, в модальном окне, появляется более подробная информация о книге.
При клике на x происходит reset формы и автофокус. Также добавлены события формы onBlur и onFocus.
При submit формы происходит редирект на страницу '/content' с полным результатом поиска,
представленным в виде карточек книг. При клике на карточку, в модальном окне, появляется более подробная информация о книге.
Также добавлен пагинатор.
При клике на логотип со стопкой книг происходит редирект на стартовую страницу.