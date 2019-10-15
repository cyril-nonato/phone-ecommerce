import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as S from './toolbar.styles';
import { selectWindowInnerWidth } from '../../redux/navigation/navigation.selectors';
import { toggleSidedrawer } from '../../redux/navigation/navigation.actions';

const Toolbar = ({ navLinks, currentUser }) => {
  const { sign_in, sign_out, sign_up, ...otherLinks } = navLinks;

  const dispatch = useDispatch();

  const windowWidth = useSelector(selectWindowInnerWidth);

  let mobileView = windowWidth < 700;
  let checkForLinks = null;
  if (!mobileView && !currentUser) {
    checkForLinks = (
      <React.Fragment>
        <S.Item>
          <S.Link to={sign_in.route}>
            {sign_in.name}
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link to={sign_up.route}>
            {sign_up.name}
          </S.Link>
        </S.Item>
      </React.Fragment>
    )
  } else if (!mobileView && currentUser) {
    checkForLinks = (
      <S.Item>
        <S.Link to={sign_out.route}>
          {sign_out.name}
        </S.Link>
      </S.Item>
    )
  }

  return (
    <S.ToolbarContainer>
      <S.HeaderLink to='/'>Phone Market</S.HeaderLink>
      <S.List>
        {
          mobileView
          &&
          <S.ToggleContainer onClick={() => dispatch(toggleSidedrawer())}>
            <S.ToggleIcon />
          </S.ToggleContainer>
        }
        {
          !mobileView
          &&
          Object.keys(otherLinks)
            .map(key =>
              <S.Item key={key}>
                <S.Link to={otherLinks[key].route}>
                  {otherLinks[key].name}
                </S.Link>
              </S.Item>
            )
        }
        {
          checkForLinks
        }
      </S.List>

    </S.ToolbarContainer>
  );
}

export default Toolbar;