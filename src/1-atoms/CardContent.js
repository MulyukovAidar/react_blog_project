import React from 'react';
import './CardContent.module.css';


class CardContent extends React.Component {
    render(props){
        return(
            <div className="card-section">
                <div className="pure-u-md-12-24 ">
                    <h5>На замену TCP: протокол QUIC готов для внедрения [но не готов стать RFC]</h5>
                    <p>Представители Инженерного совета интернета (IETF) объявили, что протокол QUIC для передачи данных на транспортном уровне готов для широкомасштабных тестов. Но из-за ряда недостатков, его пока нельзя представить в виде RFC. Подробности — в нашем сегодняшнем материале.


                        / Pixabay / www_slon_pics / PD

                        Почему появился QUIC

                        Работу над QUIC начала Google в 2013 году. Он тестировался в браузерах Chrome и Chromium. Позже технологию начали поддерживать сайты компании, в том числе YouTube. Через пару лет ИТ-гигант объявил, что тестирование протокола прошло успешно, и его представят в IETF.

                        Совет интернета начал работать над QUIC в марте 2016 года. Как отметили представители IETF, в будущем QUIC должен будет заменить TCP, так как последний исчерпал свои возможности в условиях современных сетей (в основном мобильных).

                        В протоколе TCP-соединение определяется IP-адресами и портами сервера и клиента. Если по какой-то причине один из этих параметров изменяется, приходится пересоздавать подключение. Отсюда вытекают сложности со стабильностью связи в мобильных сетях. Пользователь перемещается между разными сотовыми вышками и постоянно меняет IP-адрес.
                        </p>
                </div>
            </div>
        );
    }

}
export default CardContent;
