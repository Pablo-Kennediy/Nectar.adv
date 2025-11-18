import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useTemplateRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/licenca-compra');
    }, 15000); // 15 segundos

    return () => clearTimeout(timer);
  }, [navigate]);
};
