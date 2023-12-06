// App.tsx
import React from 'react';
import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import Text from '../../../components/Text';
import { AppContainer } from './styles'; 


const App: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Solicitar clicado');
  };

  return (
    <AppContainer>
      <Header title="Solicitação" />
      <Text text="Profissional" /> 
      <Text text="Client" /> 
      <Input />
      <Button type="terciary" title="Verificar" onPress={handleButtonClick} />
    </AppContainer>
  );
};

export default App;
