import Router from 'next/router';

const Header = () => {
    const handlerToBlog = (e) => {
        e.preventDefault()
        Router.push({
            pathname: '/about',
            query: { name: 'abcd' }
        })
    };

    const handlerStaticGenPath = (e) => {
        e.preventDefault()
        Router.push({
            pathname: '/posts/' + Math.floor(Math.random() * 10)
        })
    };

    const handlerStaticGenElasticPath = (e) => {
        e.preventDefault()
        Router.push({
            pathname: '/posts_elastic/' + Math.floor(Math.random() * 10)
        })
    };

    return (<div className={`navigation_menus`}>
            <a href='/'>home</a>
            <a href="#" onClick={handlerToBlog}>about</a>
            <a href='/blog'>blog</a>
            <a href='/error'>test error</a>
            <a href='/testDynamicRouter'>test dynamic router</a>
            <a href='#' onClick={handlerStaticGenPath} title='/posts/1 or /posts/2'>static generation path</a>
            <a href='#' onClick={handlerStaticGenElasticPath} title='/posts_elastic/[id]'>static generation elastic path</a>
        </div>)
}

export default Header;
