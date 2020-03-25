import Router from 'next/router';

const Header = () => {
    const handlerToBlog = (e) => {
        e.preventDefault()
        Router.push({
            pathname: '/about',
            query: { name: 'abcd' }
        })
    };

    return (<div className={`navigation_menus`}>
            <a href='/'>home</a>
            <a href="#" onClick={handlerToBlog}>about</a>
            <a href='/blog'>blog</a>
            <a href='/error'>test error</a>
        </div>)
}

export default Header;
