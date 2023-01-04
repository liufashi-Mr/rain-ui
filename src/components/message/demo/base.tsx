import React from 'react';
import { Button, message } from 'raind';
const App: React.FC = () => {
  return <Button onClick={() => message.info('this is a message')}>message tip</Button>;
};

export default App;
