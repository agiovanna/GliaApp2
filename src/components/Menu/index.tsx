import React from 'react';
import * as Styled from './styles';

interface MenuProps {
  onSelect: (option: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onSelect }) => {
  const menuOptions = ['Cabelo', 'Unha', 'Make', 'Cílios', 'Sobrancelha'];

  return (
    <Styled.MenuContainer>
      {menuOptions.map((option, index) => (
        <Styled.MenuItem key={index} onPress={() => onSelect(option)}>
          <Styled.MenuText>{option}</Styled.MenuText>
        </Styled.MenuItem>
      ))}
    </Styled.MenuContainer>
  );
};

export default Menu;
