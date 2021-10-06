import { WeddingProvider } from './Wedding';
import { ConfraternizationProvider } from './Confraternization';
import { DrinkProvider } from './Drinks';
import { GraduationProvider } from './Graduation';

const Providers = ({ children }) => {
  return (
    <DrinkProvider>
      <WeddingProvider>
        <ConfraternizationProvider>
          <GraduationProvider>{children}</GraduationProvider>
        </ConfraternizationProvider>
      </WeddingProvider>
    </DrinkProvider>
  );
};

export default Providers;
