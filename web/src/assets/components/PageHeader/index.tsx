import React from 'react';

import perfilIcon from '../../images/icons/perfil.svg';
import menuIcon from '../../images/icons/menu.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader:React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar">
                <img src={menuIcon} alt="Menu"/>
                <strong>{props.title}</strong>
                <img src={perfilIcon} alt="Perfil"/>
            </div>
        </header>
    )
}

export default PageHeader;