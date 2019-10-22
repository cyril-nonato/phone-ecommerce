import React from 'react'
import * as S from './toolbar.styles';

const Toolbar = ({
  noUserNavLinks,
  userNavLinks,
  currentUser,
  windowWidth,
  toggleSidedrawer
}) => {
  let mobileView = windowWidth < 700;
  let toolBarContent = null;

  if (currentUser) {
    toolBarContent = (
      <S.List>
        {
          userNavLinks.map(link =>
            <S.Item key={link.name}>
              <S.Link to={link.route}>
                {link.name}
              </S.Link>
            </S.Item>
          )
        }
      </S.List>
    );
  }

  if (!currentUser) {
    toolBarContent = (<S.List>
      {
        noUserNavLinks.map(link =>
          <S.Item data-testid={link.name} key={link.name}>
            <S.Link to={link.route}>
              {link.name}
            </S.Link>
          </S.Item>
        )
      }
    </S.List>)
  }

  if (mobileView) {
    toolBarContent = (
      <S.ToggleContainer data-testid='toggle-icon' onClick={toggleSidedrawer}>
        <S.ToggleIcon />
      </S.ToggleContainer>
    )
  }

  return (
    <S.ToolbarContainer>
      <S.HeaderLink to='/'>Phone Market</S.HeaderLink>
      {toolBarContent}
    </S.ToolbarContainer>
  )

}


export default Toolbar;

