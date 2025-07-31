import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let url = 'https://sua-api.com/login';
  let payload = JSON.stringify({
    email: 'usuario@teste.com',
    senha: '123456',
  });

  let params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res = http.post(url, payload, params);

  check(res, {
    'login feito com sucesso': (r) => r.status === 200,
  });
}
