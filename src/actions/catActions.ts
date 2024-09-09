//FETCH_CAT_REQUEST: representa o início da requisição para buscar dados de um gato.
//FETCH_CAT_SUCCESS: indica que a requisição foi bem-sucedida e os dados do gato foram obtidos.
//FETCH_CAT_FAILURE: sinaliza que ocorreu um erro durante a requisição.
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE';

//ação
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST,
});

//ação
export const fetchCatSuccess = (catData: any) => ({
  type: FETCH_CAT_SUCCESS,
  payload: catData,
});

//ação
export const fetchCatFailure = (error: any) => ({
  type: FETCH_CAT_FAILURE,
  payload: error,
});



