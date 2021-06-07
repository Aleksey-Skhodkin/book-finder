import React from 'react';
import styled from 'styled-components';

const AboutBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 10px;

	& p, ul, li {
		margin: 5px 0 0 0;
	}
`;

export default function AboutMe() {
	return (
		<AboutBox>
			<p>Приложение для отклика на вакансию: стажер – разработчик интерфейсов в Авто.ру</p>
			<p>Исполнитель: Сходкин Алексей</p>
			<p>
				<a href="https://hh.ru/resume/7b13ab1dff08ce7df90039ed1f443943616c37">Ссылка на github</a>
			</p>
			<ul>
				<b>Мои контакты:</b>
				<li>
					<p>тел. <a href="tel:+79688647839">+7 (968) 864-78-39</a></p>
				</li>
				<li>
					<a href="mailto:alex.cob.fan@gmail.com">Почта</a>
				</li>
				<li>
					<a href="https://telegram.me/alex_cob_fan">Telegram</a>
				</li>
				<li>
					<a href="https://hh.ru/resume/7b13ab1dff08ce7df90039ed1f443943616c37">Резюме</a>
				</li>
			</ul>
		</AboutBox>
	);
}
