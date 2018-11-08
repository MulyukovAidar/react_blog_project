import React from 'react';
import PostContent from '../1-atoms/PostContent';
import PostHeader from '../1-atoms/PostHeader';
import './Post.css'

// Как передавать дочерним элементам пропсы?
class Post extends React.Component {
    render() {
        return (
            <div className="post">
                {/*<PostHeader headerText={this.props.headerText}></PostHeader>*/}
                {/*<PostContent postText={this.props.postText}></PostContent>*/}
                <PostHeader headerText="Почему новый дизайн Gmail такой медленный?"></PostHeader>
                <PostContent postText="В стенах компании активно поощряют запуски (launch) — публичные релизы чего-либо. И то, что продукты могут содержать лишь половину необходимых фич, не работать, работать только из-под Chrome и прочее — это никого не волнует, ведь их создателям за это ничего не грозит. Это — норма.

Смысл подобный действий заключается только в одном — в продвижении по службе, поскольку без крупных запусков дальше определенного уровня пройти не удастся. Вот мы и получаем в итоге сотни ненужных приложений-чатов, бесконечные редизайны и перезапуски — иначе отдельные личности не смогут получить повышение.

Когда руководство компании попробовало решить проблему, выпустив внутренний документ, который вместо «launches» (запусков) мотивирует достигать успешных «landings» (посадок, успешных запусков) — всё, что изменили в своей жизни сотрудники, так это выполнили s/launch/landing/g в своих performance review.
"></PostContent>
            </div>
        );
    }
}

export default Post;
