import { useNavigate } from 'react-router-dom';

export const withFuncProps = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    return (
      <Component
        navigate={navigate}
        {...props}
        />
    );
  };
  
  return Wrapper;
};