import React from 'react';
import { Logo } from '../Logo/Logo';

export const Sidebar = (props) => {
    const { user, logoutHandler, changePage, page } = props;
    let menu = null;

    // not regular user but an admin
    if(!user) {
        menu = <SideMenu changePage={changePage} page={page} logoutHandler={logoutHandler} />;
    }

    // regular user
    if(user) {
        menu = <ClientMenu changePage={changePage} page={page} logoutHandler={logoutHandler} />
    }

    return(
        <section id="side-menu">
            <Logo />
            <hr></hr>
            {menu}
        </section>
    )
}

export const ClientMenu = (props) => {
    const {changePage, logoutHandler, page} = props;

    return (
        <ul>
            <SideLink onClickHandler={changePage} active={page} page="home" text="Home" />
            <SideLink onClickHandler={changePage} active={page} page="budget" text="Budget" />
            <SideLink onClickHandler={changePage} active={page} page="transfer" text="Transfers" />
            <SideLink onClickHandler={logoutHandler} active={page} text="Logout" />
        </ul>
    )
}
  
export const SideMenu = (props) => {
    const {changePage, logoutHandler, page} = props;
    return (
        <ul>
            <SideLink onClickHandler={changePage} active={page} page="home" text="Home" />
            <SideLink onClickHandler={changePage} active={page} page="create-account" text="Create Account" />
            <SideLink onClickHandler={changePage} active={page} page="transfer" text="Fund Transfer" />
            <SideLink onClickHandler={changePage} active={page} page="deposit" text="Deposit" />
            <SideLink onClickHandler={changePage} active={page} page="withdraw" text="Withdraw" />
            <SideLink onClickHandler={logoutHandler} active={page} text="Logout" />
        </ul>
    )
}
  
export const SideLink = (props) => {
    const {icon, text, page, active} = props;
    
    function clickLink(event) {
        if(page) {
            event.preventDefault();
            props.onClickHandler(page);
        } else {
            event.preventDefault();
            props.onClickHandler();
        }
    }

    return (
        <li>
            <a onClick={clickLink}  id={text} className={ active === page ? 'active' : '' } href="#"><i className={icon} ></i> {text}</a></li>
    )
}
