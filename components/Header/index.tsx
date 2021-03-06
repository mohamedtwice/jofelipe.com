import { useState, FC } from 'react';
import Link from 'next/link';

import { Wrapper, Menu, MobileMenu } from './styles';

interface IHeader {
  isStatic: boolean;
}

const Header: FC<IHeader> = ({ isStatic }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper isStatic={isStatic}>
      <Link href="/">
        <a className="logo">Jonathan Felipe</a>
      </Link>

      <Menu isOpen={openMenu}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/projetos">
              <a>Projetos</a>
            </Link>
          </li>
        </ul>
      </Menu>

      <MobileMenu isOpen={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <span className="fill" />
        <span className="fill" />
      </MobileMenu>
    </Wrapper>
  );
};

export default Header;
